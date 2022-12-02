import type { ComponentFactory, Props, ComponentChild } from "./types/index";
import {
  applyChildren,
  applyProps,
  applyClassObj,
  applyStyle
} from "./utils";

export function h<T extends keyof HTMLElementTagNameMap>(
  tagName: T | ComponentFactory,
  props: Props<T>,
  ...children: ComponentChild[]
) {
  props ??= {};

  if (typeof tagName === "function") {
    if (!(tagName.prototype instanceof HTMLElement))
      return tagName({ ...props, children });
    const element = Reflect.construct(tagName, [props]);
    applyChildren(element, children);
    return element;
  }

  const element = document.createElement(tagName) as HTMLElementTagNameMap[T];
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

  applyProps<T>(element as JSX.IntrinsicElements[T], props);
  applyChildren(element, children);

  $init && $init(element as any);
  return element;
}