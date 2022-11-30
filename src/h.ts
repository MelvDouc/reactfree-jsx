import type { ComponentFactory, Props, ComponentChild } from "./types";
import {
  applyChildren,
  applyProps,
  applyClassObj,
  applyStyle
} from "./utils";

export function h<T extends keyof HTMLElementTagNameMap>(
  tagName: T | ComponentFactory,
  props: Props,
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

  applyProps(element, props);
  applyChildren(element, children);

  if ($init)
    $init(element);

  return element;
}