import type { HTMLPropsTagNameMap, IntrinsicElement } from "$src/types/props.js";

export type IntrinsicElements = {
  [K in keyof HTMLPropsTagNameMap]: IntrinsicElement<K>
};