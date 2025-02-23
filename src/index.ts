import createElement from "$src/create-element/create-element.js";
import createFragment from "$src/create-element/create-fragment.js";
import obs from "$src/props/obs.js";
import TypedEventEmitter from "$src/state-management/TypedEventEmitter.js";
import type {
  Component,
  ComponentChild,
  ComponentParentProps,
  JSXProps,
  JSXPropsTagNameMap,
  Obs,
  OptionalObs
} from "$src/typings/mod.js";

// Extend the global JSX namespace to include custom intrinsic elements.
declare global {
  namespace JSX {
    // Allows TypeScript to infer the return type of components as `JSX.Element`.
    type Element = globalThis.Node;

    // Allows for child nodes to be inferred as the value of the `children` prop.
    interface ElementChildrenAttribute extends ComponentParentProps { }

    // Necessary for custom JSX to be recognized by TypeScript.
    interface IntrinsicElements extends JSXPropsTagNameMap { }
  }

  // Now necessary for the `<></>` shorthand to be recognized by TypeScript.
  const RF_JSX: {
    createElement: typeof createElement;
    Fragment: typeof createFragment;
  };
}

Object.defineProperty(globalThis, "RF_JSX", {
  value: {
    createElement,
    Fragment: createFragment
  }
});

export {
  obs,
  TypedEventEmitter,
  type Component,
  type ComponentChild,
  type ComponentParentProps,
  type JSXProps,
  type Obs,
  type OptionalObs
};