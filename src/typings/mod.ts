import type { Component, ComponentChild, ComponentParentProps, NodeObs } from "$src/typings/component.js";
import type { HTMLPropsTagNameMap } from "$src/typings/element/html.js";
import type { SVGPropsTagNameMap } from "$src/typings/element/svg.js";
import type { Obs, OptionalObs } from "$src/props/obs.js";

interface JSXPropsTagNameMap extends HTMLPropsTagNameMap, SVGPropsTagNameMap { }

type JSXProps = JSXPropsTagNameMap[keyof JSXPropsTagNameMap];

export type {
  Component,
  ComponentChild,
  ComponentParentProps,
  NodeObs,
  Obs,
  OptionalObs,
  JSXProps,
  JSXPropsTagNameMap
};