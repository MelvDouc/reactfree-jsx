import type { IntrinsicElement, HTMLPropsTagNameMap } from "$src/types.js";

export { obs } from "$src/Obs.js";
export { Fragment, h } from "$src/create-element.js";

declare global {
  namespace JSX {
    type IntrinsicElements = {
      [K in keyof HTMLPropsTagNameMap]: IntrinsicElement<K>
    };
  }
}