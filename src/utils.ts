import Observable from "melv_observable";
import { ComponentChildren, Props } from "./types";

export function appendChildren(element: HTMLElement, children: ComponentChildren): void {
  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (child != null)
        appendChildren(element, child);
    });
    return;
  }

  if (children instanceof Observable) {
    const value = children.getValue() as ComponentChildren;
    appendChildren(element, value);
    children.subscribe((value) => {
      Array.isArray(value)
        ? element.replaceChildren(...value)
        : element.replaceChildren(value);
    });
    return;
  }
  element.append(children as string | Node);
}

export function applyClassObj<T>(
  element: HTMLElement,
  classObj: Record<string, boolean | { obs: Observable<T>, predicate: (value: T | undefined) => boolean; }>
) {
  const add = (className: string) => element.classList.add(className),
    remove = (className: string) => element.classList.remove(className);
  Object.entries(classObj).forEach(([key, value]) => {
    if (typeof value === "boolean") {
      value ? add(key) : remove(key);
      return;
    }
    const { obs, predicate } = value;
    predicate(obs.getValue()) ? add(key) : remove(key);
    obs.subscribe((value) => predicate(value) ? add(key) : remove(key));
  });
}

export function applyStyle(element: HTMLElement, styleObj: Record<string, any>) {
  Object.entries(styleObj).forEach(([key, value]) => {
    if (value instanceof Observable) {
      element.style[key as keyof object] = value.getValue();
      value.subscribe((x) => element.style[key as keyof object] = x);
      return;
    }
    element.style[key as keyof object] = value;
  });
}

export function applyProps(element: Element, props: Props) {
  Object.entries(props).forEach(([key, value]) => {
    if (key.startsWith("_")) {
      const elementKey = key.slice(1) as keyof object;
      (element[elementKey] as any) = (value as Observable<any>).getValue();
      (value as Observable<any>).subscribe((x) => (element[elementKey] as any) = x);
      return;
    }
    (element[key as keyof object] as any) = value;
  });
}