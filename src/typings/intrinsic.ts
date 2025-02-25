import type { HTMLPropsTagNameMap } from "$src/typings/element/html.js";
import type { SVGPropsTagNameMap } from "$src/typings/element/svg.js";

export interface JSXPropsTagNameMap extends HTMLPropsTagNameMap, SVGPropsTagNameMap { }

/**
 * A union of all intrinsic JSX element properties.
 */
export type JSXProps = JSXPropsTagNameMap[keyof JSXPropsTagNameMap];