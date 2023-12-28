import applyChildren from "$src/utils/apply-children.js";
import applyClasses from "$src/utils/apply-classes.js";
import applyProps from "$src/utils/apply-props.js";
import applyStyle from "$src/utils/apply-style.js";
import type { ComponentChildren, IntrinsicElement } from "$src/types.js";

export function h(tagName: keyof HTMLElementTagNameMap, props: IntrinsicElement<keyof HTMLElementTagNameMap> | null, ...children: ComponentChildren): Element;
export function h(tagName: typeof Fragment, props: null, ...children: ComponentChildren): DocumentFragment;

export function h(
  tagName: keyof HTMLElementTagNameMap | (typeof Fragment),
  props: IntrinsicElement<keyof HTMLElementTagNameMap> | null,
  ...children: ComponentChildren
): Element | DocumentFragment {
  if (isFragmentFn(tagName))
    return tagName(children);

  const { className, style, is, $init, ...others } = props ?? {};
  const element = document.createElement(tagName, { is });
  className && applyClasses(element, className);
  style && applyStyle(element, style);
  applyProps(element, others);
  applyChildren(element, children);
  $init && $init(element);
  return element;
}

export function Fragment(children: ComponentChildren) {
  const fragment = document.createDocumentFragment();
  applyChildren(fragment, children);
  return fragment;
}

function isFragmentFn(arg: unknown): arg is typeof Fragment {
  return arg === Fragment;
}