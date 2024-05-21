import applyChildren from "$src/utils/apply-children.js";
import applyClasses from "$src/utils/apply-classes.js";
import applyProps from "$src/utils/apply-props.js";
import applyStyle from "$src/utils/apply-style.js";
import type { Component, ComponentChildren, ElementOrFragment } from "$types/component-types.js";
import type { HTMLTagName, IntrinsicElement } from "$types/props.js";

export function h(tagName: HTMLTagName, props: IntrinsicElement<HTMLTagName> | null, ...children: ComponentChildren): Element;
export function h(tagName: Component, props: Parameters<Component>[0] | null, ...children: ComponentChildren): ElementOrFragment;
export function h(tagName: FragmentFn, props: null, ...children: ComponentChildren): DocumentFragment;

export function h(
  tagName: HTMLTagName | Component | FragmentFn,
  props: IntrinsicElement<HTMLTagName> | Parameters<Component>[0] | null,
  ...children: ComponentChildren
): ElementOrFragment {
  props ??= {};

  if (typeof tagName === "function") {
    return isFragmentFn(tagName)
      ? tagName(children)
      : tagName({ ...props, children });
  }

  const { className, style, is, $init, ...others } = props as IntrinsicElement<HTMLTagName>;
  const element = document.createElement(tagName, is ? { is } : void 0);
  className && applyClasses(element, className);
  style && applyStyle(element, style);
  applyProps(element, others);
  applyChildren(element, children);
  $init && $init(element);
  return element;
}

export function Fragment(children: ComponentChildren) {
  const fragment = new DocumentFragment();
  applyChildren(fragment, children);
  return fragment;
}

function isFragmentFn(fn: unknown): fn is FragmentFn {
  return fn === Fragment;
}

type FragmentFn = typeof Fragment;