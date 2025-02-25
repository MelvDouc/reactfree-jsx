import createSVG, { isSVGTagName } from "$src/core/create-svg.js";
import { applyChildren } from "$src/core/props/children.js";
import { applyClasses } from "$src/core/props/classes.js";
import { applyProps } from "$src/core/props/props.js";
import { applyStyle } from "$src/core/props/style.js";
import type { Component, ComponentChild, ComponentProps } from "$src/typings/component.js";
import type { JSXProps } from "$src/typings/intrinsic.js";

/**
 * @param tag An HTML/SVG tag name or a component function.
 * @param props An object containing the element's properties
 * or the component function's parameter object.
 * @param children The element's child nodes.
 * @returns A JSX element.
 */
export default function createElement(
  tag: string | Component<ComponentProps | undefined>,
  props: ComponentProps | null,
  ...children: ComponentChild[]
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