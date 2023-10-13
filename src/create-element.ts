import { Component, ComponentChildren } from "@/typings/component.js";
import { IntrinsicElement } from "@/typings/intrinsic-element.js";
import applyChildren from "@/utils/apply-children.js";
import applyClasses from "@/utils/apply-classes.js";
import applyProps from "@/utils/apply-props.js";
import applyStyle from "@/utils/apply-style.js";

export function h(
  tagName: keyof HTMLElementTagNameMap | (typeof Fragment) | Component,
  props: IntrinsicElement<keyof HTMLElementTagNameMap> | null,
  ...children: ComponentChildren
): HTMLElement | DocumentFragment {
  if (tagName === Fragment)
    return tagName(children);

  if (typeof tagName === "function")
    return (tagName as Component)({ ...props, children });

  const { className, style, $init, ...others } = props ?? {};
  const element = document.createElement(tagName);
  applyProps(element, others);
  className && applyClasses(element, className);
  style && applyStyle(element, style);
  applyChildren(element, children);

  if (typeof $init === "function")
    $init(element);

  return element as HTMLElementTagNameMap[typeof tagName];
}

export function Fragment(children: ComponentChildren) {
  const fragment = document.createDocumentFragment();
  applyChildren(fragment, children);
  return fragment;
}