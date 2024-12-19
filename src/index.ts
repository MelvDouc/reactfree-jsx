// Extend the global JSX namespace to include custom intrinsic elements.
declare global {
  namespace JSX {
    // Allows TypeScript to infer the return type of components as `JSX.Element`.
    interface Element extends globalThis.Node { }

    // Allows for child nodes to be inferred as the value of the `children` prop.
    interface ElementChildrenAttribute {
      children: {};
    }

    // Necessary for custom JSX to be recognized by TypeScript.
    type IntrinsicElements = import("$src/typings/index.types.js").JSXIntrinsicElements;
  }

  // Now necessary for the `<></>` shorthand to be recognized by TypeScript.
  const Fragment: typeof import("$src/create-element/create-fragment.js").default;
}

export { default as createElement } from "$src/create-element/create-element.js";
export { default as Fragment } from "$src/create-element/create-fragment.js";
export { default as obs } from "$src/state-management/obs.js";
export { default as TypedEventEmitter } from "$src/state-management/TypedEventEmitter.js";
export type {
  ClassRecord,
  Component,
  ComponentChild,
  ComponentParentProps,
  Obs,
  OptionalObs,
  StyleRecord
} from "$src/typings/index.types.js";
export { reactfreePlugin } from "$src/vite-plugin.js";
