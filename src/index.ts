import type { HTMLPropsTagNameMap, IntrinsicElement } from "$types/props.js";

export { type Observable as Obs } from "melv_observable";
export { obs } from "$src/Obs.js";
export { Fragment, h } from "$src/create-element.js";
export type { Component } from "$types/component-types.js";

declare global {
  namespace JSX {
    type IntrinsicElements = {
      [K in keyof HTMLPropsTagNameMap]: IntrinsicElement<K>
    };
  }
}