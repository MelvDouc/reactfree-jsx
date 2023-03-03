import Observable from "./Observable";
import { ComponentChildren, PossibleObservable, Props } from "../types/types";

function applyClassName(element: HTMLElement, className: PossibleObservable<string>): void {
  if (typeof className === "string") {
    element.className = className;
    return;
  }

  element.className = className.value;
  className.subscribe((value) => element.className = value);
}

function applyClassRecord({ classList }: HTMLElement, classes: Record<string, PossibleObservable<boolean>>): void {
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
  else if (props.className)
    applyClassName(element, props.className);

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

export function applyStyles<T extends keyof HTMLElementTagNameMap>(element: HTMLElementTagNameMap[T], props: Props<T>): void {
  if (!props.style)
    return;

  for (const key in props.style) {
    const style = props.style[key] as PossibleObservable<string>;

    if (typeof style === "string") {
      element.style[key] = style;
      continue;
    }

    element.style[key] = style.value;
    style.subscribe((value) => element.style[key] = value);
  }

  delete props.style;
}

function applyProp(element: HTMLElement, propertyKey: string, value: any) {
  if (propertyKey in element) {
    (element[propertyKey as keyof typeof element] as any) = value;
    return;
  }

  element.setAttribute(propertyKey, value);
}

export function applyProps<T extends keyof JSX.IntrinsicElements>(element: HTMLElementTagNameMap[T], props: Props<T>): void {
  for (const key in props) {
    const dynamicValue = props[key as keyof Props<T>];

    if (!(dynamicValue instanceof Observable)) {
      applyProp(element, key, dynamicValue);
      continue;
    }

    applyProp(element, key, dynamicValue.value);
    dynamicValue.subscribe((value) => applyProp(element, key, value));
  }
}