import { IntrinsicElement } from "@/typings/intrinsic-element.js";
import PropsTagNameMap from "@/typings/props/PropsTagNameMap.js";

export { obs } from "@/Obs.js";
export { Fragment, h } from "@/create-element.js";

declare global {
  namespace JSX {
    type IntrinsicElements = {
      [K in keyof PropsTagNameMap]: IntrinsicElement<K>
    };
  }
}