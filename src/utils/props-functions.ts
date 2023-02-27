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

export function applyChildren(element: HTMLElement | DocumentFragment, children: ComponentChildren | Observable<ComponentChildren>): void {
  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (child != null)
        applyChildren(element, child);
    });
    return;
  }

  if (children instanceof Observable) {
    const value = children.value as ComponentChildren;
    applyChildren(element, value);
    children.subscribe((value) => applyChildren(element, value));
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

function applyProp(element: HTMLElement, key: keyof typeof element, value: typeof element[typeof key]) {
  if (key in element)
    // @ts-ignore
    element[key] = value;
  else
    element.setAttribute(key, String(value));
}

export function applyProps<T extends keyof JSX.IntrinsicElements>(element: HTMLElementTagNameMap[T], props: Props<T>) {
  for (const key in props) {
    const value = props[key as keyof Props<T>] as any;

    if (key.startsWith("obs_")) {
      const propName = key.slice(4) as keyof object;
      applyProp(element, propName, value);
      (value as Observable<any>).subscribe((value) => {
        applyProp(element, propName, value);
      });
    }

    applyProp(element, key as keyof HTMLElement, value);
  }
}