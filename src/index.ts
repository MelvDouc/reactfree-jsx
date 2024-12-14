import Fragment from "$src/create-element/Fragment.js";
import { h } from "$src/create-element/h.js";
import obs from "$src/create-element/obs.js";
import type { ElementPropsTagNameMap, IntrinsicElement, Obs } from "$src/types.js";

declare global {
  namespace JSX {
    type IntrinsicElements = {
      [K in keyof ElementPropsTagNameMap]: IntrinsicElement<K>
    };
  }

  // JSX fragments won't work anymore without this.
  const React: any;
}

export {
  Fragment,
  h,
  obs,
  type Obs
};