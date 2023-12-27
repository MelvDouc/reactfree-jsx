import type { Component, ComponentChildren, IntrinsicElement } from "@/typings/mod.js";
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

  const { className, style, is, $init, ...others } = props ?? {};
  const element = document.createElement(tagName, { is });
  className && applyClasses(element, className);
  style && applyStyle(element, style);
  applyProps(element, others);
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