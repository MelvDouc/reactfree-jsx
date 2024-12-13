import type Fragment from "$src/create-element/Fragment.js";
import applyChildren from "$src/utils/apply-children.js";
import applyClasses from "$src/utils/apply-classes.js";
import applyProps from "$src/utils/apply-props.js";
import applyStyle from "$src/utils/apply-style.js";
import type { Component, ComponentChildren } from "$types/component-types.js";
import type { HTMLTagName, IntrinsicElement } from "$types/props.js";

export function h(tagName: HTMLTagName, props: IntrinsicElement<HTMLTagName> | null, ...children: ComponentChildren): HTMLElement;
export function h(tagName: Component, props: Parameters<Component>[0] | null, ...children: ComponentChildren): Node;

export function h(
  tagName: HTMLTagName | Component | typeof Fragment,
  props: IntrinsicElement<HTMLTagName> | Parameters<Component>[0] | null,
  ...children: ComponentChildren
): Node {
  props ??= {};

  if (typeof tagName === "function")
    return tagName({ ...props, children });

  const { className, style, is, $init, ...others } = props as IntrinsicElement<HTMLTagName>;
  const element = document.createElement(tagName, is ? { is } : void 0);
  className && applyClasses(element, className);
  style && applyStyle(element, style);
  applyProps(element, others);
  applyChildren(element, children);
  $init && $init(element);
  return element;
}