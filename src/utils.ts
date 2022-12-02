import Observable from "melv_observable";
import { ClassObj, ComponentChildren, Props, StyleObj } from "./types/index";

export function applyChildren(element: HTMLElement, children: ComponentChildren): void {
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

export function applyClassObj(
  element: {
    classList: {
      add: (...tokens: string[]) => void;
      remove: (...tokens: string[]) => void;
    };
  },
  classObj: ClassObj
) {
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
    obs.subscribe((value) => predicate(value) ? add(key) : remove(key));
  }
}

export function applyStyle(element: HTMLElement, styleObj: StyleObj) {
  for (const key in styleObj) {
    const value = styleObj[key];

    if (value instanceof Observable) {
      element.style[key] = value.getValue();
      value.subscribe((x) => element.style[key] = x);
      continue;
    }

    element.style[key] = value;
  }
}

export function applyProps<T extends keyof JSX.IntrinsicElements>(element: JSX.IntrinsicElements[T], props: Props<T>) {
  let key: keyof typeof props;

  for (key in props) {
    const value = props[key];

    if (key.startsWith("_") && value instanceof Observable) {
      const elementKey = key.slice(1) as keyof JSX.IntrinsicElements[T];
      element[elementKey] = value.getValue();
      value.subscribe((x) => element[elementKey] = x);
      continue;
    }

    (element[key] as typeof value) = value;
  }
}