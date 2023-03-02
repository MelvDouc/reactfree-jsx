import Observable from "./Observable";
import { ComponentChildren, Props } from "../types/types";

export function applyClasses<T extends keyof HTMLElementTagNameMap>(element: HTMLElement, props: Props<T>): void {
  if (props.classes) {
    for (const key in props.classes) {
      if (props.classes[key] === true)
        element.classList.add(key);
    }
  } else if (props.classNames) {
    element.className = props.classNames.join(" ");
  } else if (props.className) {
    element.className = props.className;
  }

  delete props.classes;
  delete props.classNames;
  delete props.className;
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

export function applyStyles<T extends keyof HTMLElementTagNameMap>(element: HTMLElement, props: Props<T>) {
  if (!props.style)
    return;

  for (const key in props.style) {
    element.style.setProperty(
      key.replace(/[A-Z]/g, s => "-" + s.toLowerCase()),
      props.style[key]!
    );
  }

  delete props.style;
}

function applyProp<T extends keyof JSX.IntrinsicElements>(element: HTMLElementTagNameMap[T], propertyKey: string, value: any) {
  if (propertyKey in element) {
    (element[propertyKey as keyof object] as any) = value;
    return;
  }

  element.setAttribute(propertyKey, value);
}

export function applyProps<T extends keyof JSX.IntrinsicElements>(element: HTMLElementTagNameMap[T], props: Props<T>) {
  for (const key in props) {
    const propValue = props[key as keyof Props<T>] as any;

    if (!key.startsWith("obs_")) {
      applyProp(element, key, propValue);
      continue;
    }

    const propName = key.slice(4) as keyof object;
    applyProp(element, propName, propValue.value);
    (<Observable<any>>propValue).subscribe((value) => {
      applyProp(element, propName, value);
    });
  }
}