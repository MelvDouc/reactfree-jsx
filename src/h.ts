import type { ComponentFactory, Props, ComponentChild } from "./types/index";
import { applyChildren, applyProps, applyClassObj, applyStyle } from "./utils";

export function h<T extends keyof HTMLElementTagNameMap>(
  tagName: T | ComponentFactory | typeof Fragment,
  props: Props<T>,
  ...children: ComponentChild[]
): HTMLElementTagNameMap[T] | Element | ComponentFactory | DocumentFragment {
  props ??= {};

  if (typeof tagName === "function") {
    if (tagName === Fragment) {
      return Fragment(children);
    }

    if (!(tagName.prototype instanceof HTMLElement)) return (<ComponentFactory>tagName)({ ...props, children });
    const element = Reflect.construct(tagName, [props]);
    applyChildren(element, children);
    return element as HTMLElement;
  }

  const element = document.createElement<T>(tagName);
  const { $init } = props;
  delete props.$init;

  if (Array.isArray(props.classNames)) {
    element.className = props.classNames.join(" ");
    delete props.classNames;
    delete props.className;
  }

  if (props.classObj) {
    applyClassObj(element, props.classObj);
    delete props.classObj;
  }

  if (props.styleObj) {
    applyStyle(element, props.styleObj);
    delete props.styleObj;
  }

  applyProps<T>(element, props);
  applyChildren(element, children);

  $init && $init(element);
  return element;
}

export function Fragment(children: ComponentChild[]): DocumentFragment {
  const fragment = document.createDocumentFragment();
  applyChildren(fragment, children);
  return fragment;
}
