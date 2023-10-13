import { IntrinsicElement } from "@/typings/intrinsic-element.js";
import PropsTagNameMap from "@/typings/props/PropsTagNameMap.js";

export type IntrinsicElements = {
  [K in keyof PropsTagNameMap]: IntrinsicElement<K>
};