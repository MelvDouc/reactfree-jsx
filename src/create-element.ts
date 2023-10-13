import applyChildren from "@/utils/apply-children.js";
import applyProps from "@/utils/apply-props.js";
import { TagName, Component, ComponentChildren } from "@/types.js";

export function h(
  tagName: TagName | (typeof Fragment) | Component,
  props: Record<string, unknown> | null,
  ...children: ComponentChildren
): HTMLElement | DocumentFragment {
  if (tagName === Fragment)
    return tagName(children);

  if (typeof tagName === "function")
    return (tagName as Component)({ ...props, children });

  const { $init, ...others } = props ?? {};
  const element = document.createElement(tagName);
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