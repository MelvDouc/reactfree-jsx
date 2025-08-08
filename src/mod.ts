import createElement from "$src/core/create-element.js";
import createFragment from "$src/core/create-fragment.js";
import obs, { type Observable as Obs, type OptionalObs } from "$src/core/state/obs.js";
import type { Component, ComponentChild, ComponentParentProps } from "$src/typings/component.js";
import type { JSXProps, JSXPropsTagNameMap } from "$src/typings/intrinsic.js";

// Extend the global JSX namespace to include custom intrinsic elements.
declare global {
  namespace JSX {
    // Allows TypeScript to infer the return type of components as `JSX.Element`.
    type Element = ComponentChild;

    // Allows for child nodes to be inferred as the value of the `children` prop.
    interface ElementChildrenAttribute extends ComponentParentProps { }

    // Necessary for custom JSX to be recognized by TypeScript.
    interface IntrinsicElements extends JSXPropsTagNameMap { }
  }
}

export {
  createElement,
  createFragment,
  obs,
  type Component,
  type ComponentChild,
  type ComponentParentProps,
  type JSXProps,
  type Obs,
  type OptionalObs
};