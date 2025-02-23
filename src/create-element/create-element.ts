import createSVG, { isSVGTagName } from "$src/create-element/create-svg.js";
import { applyChildren } from "$src/props/children.js";
import { applyClasses } from "$src/props/classes.js";
import { applyProps } from "$src/props/props.js";
import { applyStyle } from "$src/props/style.js";
import type { Component, ComponentChild, JSXProps } from "$src/typings/mod.js";

export default function createElement(
  tagName: string | Component,
  props: object | null,
  ...children: ComponentChild[]
): JSX.Element {
  if (typeof tagName === "function")
    return tagName({ ...props, children });

  const { className, is, style, $init, ...otherProps } = (props ?? {}) as JSXProps;
  const element = createHTMLOrSVGElement(tagName, is);

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