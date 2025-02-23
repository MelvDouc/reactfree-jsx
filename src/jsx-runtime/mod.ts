import { createElement, createFragment } from "$src/mod.js";
import type { Component, ComponentChildren, ComponentProps, Primitive } from "$src/typings/component.js";

function jsx(
  tag: string | Component<ComponentProps | undefined>,
  { children, ...props }: ComponentProps
): JSX.Element {
  return createElement(tag, props, children as Primitive);
}

function jsxs(
  tag: string | Component<ComponentProps | undefined>,
  { children, ...props }: ComponentProps
): JSX.Element {
  return createElement(tag, props, children as ComponentChildren);
}

export {
  jsx,
  jsxs,
  createFragment as Fragment
};