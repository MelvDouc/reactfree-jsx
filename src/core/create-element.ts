import createSVG, { isSVGTagName } from "$src/core/create-svg.js";
import { applyChildren } from "$src/core/props/children.js";
import { applyClasses } from "$src/core/props/classes.js";
import { applyProps } from "$src/core/props/props.js";
import { applyStyle } from "$src/core/props/style.js";
import type { Component, ComponentChildren, ComponentProps } from "$src/typings/component.js";
import type { JSXProps } from "$src/typings/intrinsic.js";

export default function createElement(
  tag: string | Component<ComponentProps | undefined>,
  props: ComponentProps | null,
  ...children: ComponentChildren
): JSX.Element {
  if (typeof tag === "function")
    return tag({ ...props, children });

  const { className, is, style, $init, ...otherProps } = (props ?? {}) as JSXProps;
  const element = createHTMLOrSVGElement(tag, is);

  applyProps(element, otherProps);
  className && applyClasses(element, className);
  style && applyStyle(element, style);
  applyChildren(element, children);
  $init && ($init as (element: Element) => unknown)(element);

  return element;
}

function createHTMLOrSVGElement(tagName: string, is?: string): HTMLElement | SVGElement {
  return isSVGTagName(tagName)
    ? createSVG(tagName)
    : document.createElement(tagName, { is });
}