import type { ComponentFactory, Props, ComponentChild } from "./types";
import {
  appendChildren,
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

  if (typeof tagName === "function")
    return tagName({ ...props, children });

  const element = document.createElement<T>(tagName);

  if (typeof props.$init === "function") {
    props.$init(element);
    delete props.$init;
  }

  if (Array.isArray(props.classNames)) {
    element.className = props.classNames.join(" ");
    delete props.classNames;
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
  appendChildren(element, children);
  return element;
}