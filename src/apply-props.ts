import Observable from "./Observable.js";

type DifferentAttributes = typeof differentlyNamedAttributes;

const differentlyNamedAttributes = {
  className: "class",
  colSpan: "colspan",
  contentEditable: "contenteditable",
  crossOrigin: "crossorigin",
  dirName: "dirname",
  htmlFor: "for",
  imageSizes: "imagesizes",
  imageSrcSet: "imagesrcset",
  inputMode: "inputmode",
  maxLength: "maxlength",
  minLength: "minlength",
  playsInline: "playsinline",
  tabIndex: "tabindex",
  readOnly: "readonly",
  rowSpan: "rowspan",
} as const;

const javascriptProperties = Object.keys(differentlyNamedAttributes).reduce((acc, key) => {
  // @ts-ignore
  acc[differentlyNamedAttributes[key]] = key;
  return acc;
}, {} as Record<DifferentAttributes[keyof DifferentAttributes], keyof DifferentAttributes>);

function applyClassRecord({ classList }: HTMLElement, classes: Record<string, PossibleObs<boolean>>): void {
  for (const cssClass in classes) {
    const hasClass = classes[cssClass];

    if (typeof hasClass === "boolean") {
      hasClass && classList.add(cssClass);
      continue;
    }

    hasClass.value && classList.add(cssClass);
    hasClass.subscribe((value) => {
      value
        ? classList.add(cssClass)
        : classList.remove(cssClass);
    });
  }
}

export function applyClasses<T extends keyof HTMLElementTagNameMap>(element: HTMLElementTagNameMap[T], props: Props<T>): void {
  if (props.classes)
    applyClassRecord(element, props.classes);
  else if (props.classNames)
    element.className = props.classNames.join(" ");

  delete props.classes;
  delete props.classNames;
}

export function applyChildren(element: HTMLElement | DocumentFragment, children: ComponentChildren): void {
  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (child != null)
        applyChildren(element, child);
    });
    return;
  }

  element.append(children as string | Node);
}

export function applyStyles<T extends keyof HTMLElementTagNameMap>(element: HTMLElementTagNameMap[T], props: Props<T>): void {
  if (!props.style)
    return;

  for (const key in props.style) {
    const style = props.style[key]!;

    if (typeof style === "string") {
      element.style[key] = style;
      continue;
    }

    element.style[key] = style.value;
    style.subscribe((value) => element.style[key] = value);
  }

  delete props.style;
}

function applyProp(element: HTMLElement, key: string, value: any) {
  if (key in element) {
    if (element[key as keyof typeof element] !== value)
      (element[key as keyof typeof element] as any) = value;
    return;
  }

  if (element.getAttribute(key) !== value)
    element.setAttribute(key, value);
}

function observeAttributeChange(element: HTMLElement, observedValues: Map<string, Observable<any>>) {
  new MutationObserver((mutations) => {
    for (const { attributeName } of mutations) {
      if (!attributeName || !observedValues.has(attributeName))
        continue;

      const obs = observedValues.get(attributeName)!;
      const key = javascriptProperties[attributeName as keyof object] ?? attributeName;

      if ((key !== attributeName || key in element) && obs.value !== element[key]) {
        obs.value = element[key];
        continue;
      }

      if (obs.value !== element.getAttribute(attributeName))
        obs.value = element.getAttribute(attributeName);
    }
  }).observe(element, { attributes: true });
}

export function applyProps<T extends keyof JSX.IntrinsicElements>(element: HTMLElementTagNameMap[T], props: Props<T>): void {
  const observedValues = new Map<string, Observable<any>>();

  for (const key in props) {
    const dynamicValue = props[key as keyof Props<T>];

    if (!(dynamicValue instanceof Observable)) {
      applyProp(element, key, dynamicValue);
      continue;
    }

    applyProp(element, key, dynamicValue.value);
    dynamicValue.subscribe((value) => applyProp(element, key, value));
    observedValues.set(differentlyNamedAttributes[key as keyof object] ?? key, dynamicValue);
  }

  if (observedValues.size)
    observeAttributeChange(element, observedValues);
}