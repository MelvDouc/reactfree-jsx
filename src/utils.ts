import Observable from "melv_observable";
import { ComponentChildren, Props } from "./types/types";

export function applyClasses<T extends keyof HTMLElementTagNameMap>(element: HTMLElement, props: Props<T>) {
  if (props.classes) {
    for (const key in props.classes)
      if (props.classes[key])
        element.classList.add(key);
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

  if (!(children instanceof Observable)) {
    element.append(children as string | Node);
    return;
  }

  const value = children.getValue() as ComponentChildren;
  applyChildren(element, value);
  children.subscribe((value) => {
    Array.isArray(value)
      ? element.replaceChildren(...value)
      : element.replaceChildren(value);
  });
}

export function applyStyles<T extends keyof HTMLElementTagNameMap>(element: HTMLElement, props: Props<T>) {
  if (props.style) {
    for (const key in props.style) {
      element.style.setProperty(
        key.replace(/[A-Z]/g, s => "-" + s.toLowerCase()),
        props.style![key as keyof object]!
      );
    }
    delete props.style;
  }
}

export function applyProps<T extends keyof JSX.IntrinsicElements>(element: HTMLElementTagNameMap[T], props: Props<T>) {
  Object.keys(props).forEach((key) => {
    const value = props[key as keyof Props<T>];

    if (key in element)
      (element[key as keyof HTMLElementTagNameMap[T]] as typeof value) = value;
    else
      element.setAttribute(key, String(value));
  });
}