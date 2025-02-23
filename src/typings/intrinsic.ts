import type { HTMLPropsTagNameMap } from "$src/typings/element/html.js";
import type { SVGPropsTagNameMap } from "$src/typings/element/svg.js";

export interface JSXPropsTagNameMap extends HTMLPropsTagNameMap, SVGPropsTagNameMap { }

export type JSXProps = JSXPropsTagNameMap[keyof JSXPropsTagNameMap];