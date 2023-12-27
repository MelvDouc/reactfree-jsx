import type { IntrinsicElement, PropsTagNameMap } from "@/typings/mod.js";

export { obs } from "@/core/Obs.js";
export { Fragment, h } from "@/core/create-element.js";

declare global {
  namespace JSX {
    type IntrinsicElements = {
      [K in keyof PropsTagNameMap]: IntrinsicElement<K>
    };
  }
}