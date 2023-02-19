import Observable from "melv_observable";
import { ClassObj, ComponentChildren, Props } from "./type";

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

export function applyClassObj(element: HTMLElement, classObj: ClassObj) {
  const { classList } = element;
  const add = classList.add.bind(classList),
    remove = classList.remove.bind(classList);

  for (const key in classObj) {
    const value = classObj[key];

    if (typeof value === "boolean") {
      value ? add(key) : remove(key);
      continue;
    }

    const { obs, predicate } = value;
    predicate(obs.getValue()) ? add(key) : remove(key);
    obs.subscribe((value) => (predicate(value) ? add(key) : remove(key)));
  }
}

export function applyProps<T extends keyof JSX.IntrinsicElements>(element: HTMLElementTagNameMap[T], props: Props<T>) {
  for (const key in props) {
    const value = props[key];

    if (key in element)
      (element[key as keyof HTMLElementTagNameMap[T]] as typeof value) = value;
    else
      element.setAttribute(key, String(value));
  }
}
