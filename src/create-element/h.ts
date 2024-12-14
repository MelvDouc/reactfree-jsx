import type { Component, ComponentChildren, IntrinsicElement, TagName, TagNameToElement } from "$src/types.js";
import applyChildren from "$src/utils/apply-children.js";
import applyClasses from "$src/utils/apply-classes.js";
import applyProps from "$src/utils/apply-props.js";
import applyStyle from "$src/utils/apply-style.js";

export function h(tagName: TagName, props: IntrinsicElement<TagName> | null, ...children: ComponentChildren): HTMLElement;
export function h(tagName: Component, props: Parameters<Component>[0] | null, ...children: ComponentChildren): Node;

export function h<T extends TagName | Component>(
  tagName: T,
  props: (T extends TagName ? IntrinsicElement<TagName> : Parameters<Component>[0]) | null,
  ...children: ComponentChildren
): Node {
  props ??= {};

  if (typeof tagName === "function")
    return tagName({ ...props, children });

  return SVG_TAG_NAMES.includes(tagName)
    ? createSVGElement(tagName, props, children)
    : createHTMLElement(tagName, props, children);
}

function createHTMLElement<T extends TagName>(tagName: T, { className, style, is, $init, ...props }: IntrinsicElement<T>, children: ComponentChildren): HTMLElement {
  const element = document.createElement(tagName, is ? { is } : undefined);
  className && applyClasses(element, className);
  style && applyStyle(element, style);
  applyProps(element, props, false);
  applyChildren(element, children);
  $init && $init(element as TagNameToElement<T>);
  return element;
}

function createSVGElement<T extends TagName>(tagName: T, { $init, ...props }: IntrinsicElement<T>, children: ComponentChildren): SVGElement {
  const element = document.createElementNS(NAMESPACES.SVG, tagName);
  applyProps(element, props, true);
  applyChildren(element, children);
  $init && $init(element as TagNameToElement<T>);
  return element;
}

const NAMESPACES = {
  HTML: "http://www.w3.org/2000/xhtml",
  SVG: "http://www.w3.org/2000/svg"
} as const;

const SVG_TAG_NAMES = [
  "animate",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tspan",
  "use",
  "view"
];