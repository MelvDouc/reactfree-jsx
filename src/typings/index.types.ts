import type { HTMLOnlyTagName, HTMLPropsTagNameMap } from "$src/typings/html.types.js";
import type { SVGOnlyTagName, SVGPropsTagNameMap } from "$src/typings/svg.types.js";
import type { AnyDepth, ClassRecord, Obs, OptionalObs } from "$src/typings/utils.types.js";
import type { Component, ComponentChild, ComponentParentProps, NodeObs } from "$src/typings/nodes.types.js";
import type { StyleRecord } from "$src/utils/apply-style.js";

type _PropsMap = object;

type _ElementTagNameMap<PropsMap extends _PropsMap> = {
  [K in keyof PropsMap]: Element;
};

type ElementSpecificProps<T> = {
  [K in keyof T]?: OptionalObs<T[K]>;
};

type ExtraProps<E extends Element> = ComponentParentProps & {
  className?: string | ClassRecord;
  style?: StyleRecord;
  is?: string;
  $init?: (element: E) => unknown;
  [key: `data-${string}`]: OptionalObs<string>;
};

type IntrinsicElement<
  PropsMap extends _PropsMap,
  ElMap extends _ElementTagNameMap<PropsMap>,
  K extends keyof PropsMap
> = ElementSpecificProps<PropsMap[K]> & ExtraProps<ElMap[K]>;

type IntrinsicElementMap<PropsMap extends _PropsMap, ElMap extends _ElementTagNameMap<PropsMap>> = {
  [K in keyof PropsMap]: IntrinsicElement<PropsMap, ElMap, K>
};

type IntrinsicHTMLElements = IntrinsicElementMap<HTMLPropsTagNameMap, HTMLElementTagNameMap>;
type IntrinsicSVGElements = IntrinsicElementMap<SVGPropsTagNameMap, SVGElementTagNameMap>;
type JSXIntrinsicElements = IntrinsicHTMLElements & IntrinsicSVGElements;

export type {
  AnyDepth,
  ClassRecord,
  Component,
  ComponentChild,
  ComponentParentProps,
  HTMLOnlyTagName,
  JSXIntrinsicElements,
  NodeObs,
  Obs,
  OptionalObs,
  StyleRecord,
  SVGOnlyTagName
};