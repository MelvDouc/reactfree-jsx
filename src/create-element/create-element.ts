import createSVG, { isSVGTagName } from "$src/create-element/create-svg.js";
import type { Component, ComponentChild, JSXIntrinsicElements } from "$src/typings/index.types.js";
import applyChildren from "$src/utils/apply-children.js";
import applyClasses from "$src/utils/apply-classes.js";
import applyProps from "$src/utils/apply-props.js";
import applyStyle from "$src/utils/apply-style.js";

export default function createElement(tagName: string | Component, props: object | null, ...children: ComponentChild[]): Node {
  if (typeof tagName === "function")
    return tagName({ ...props, children });

  const { className, style, $init, ...p } = (props ?? {}) as JSXIntrinsicElements[keyof JSXIntrinsicElements];
  const element = createHTMLOrSVGElement(tagName);

  applyProps(element, p);
  className && applyClasses(element, className);
  style && applyStyle(element, style);
  applyChildren(element, children);
  $init && ($init as (element: Element) => unknown)(element);

  return element;
}

function createHTMLOrSVGElement(tagName: string): HTMLElement | SVGElement {
  return isSVGTagName(tagName)
    ? createSVG(tagName)
    : document.createElement(tagName);
}