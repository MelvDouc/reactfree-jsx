import type { HTMLElementPropMap } from "$src/core/props/setters/html-setters.js";
import type { SVGElementPropMap } from "$src/core/props/setters/svg-setters.js";
import type { OptionalObs } from "$src/core/state/obs.js";
import type { ComponentChild } from "$src/typings/component.js";
import type { ClassNameProp, EventHandlerProp, StyleRecord } from "$src/typings/props.js";

type EventMap = GlobalEventHandlersEventMap;

type GlobalEventHandlerProps = {
  [K in keyof EventMap as `on:${K}`]?: OptionalObs<EventHandlerProp<EventMap[K]>>;
};

type ExtraProps = GlobalEventHandlerProps & {
  [key: `aria${string}`]: OptionalObs<string>;
  [key: `data-${string}`]: OptionalObs<string>;
  is?: string;
  className?: ClassNameProp;
  style?: StyleRecord;
  children?: ComponentChild;
};

type JSXPropsMapHTML = {
  [K in keyof HTMLElementPropMap]:
  & {
    [K2 in keyof HTMLElementPropMap[K]]?: OptionalObs<HTMLElementPropMap[K][K2]>
  }
  & {
    $init?: (element: HTMLElementTagNameMap[K]) => void;
  }
  & ExtraProps
};

type JSXPropsMapSVG = {
  [K in keyof SVGElementPropMap]:
  & {
    [K2 in keyof SVGElementPropMap[K]]?: OptionalObs<SVGElementPropMap[K][K2]>;
  }
  & {
    $init?: (element: SVGElementTagNameMap[K]) => void;
  }
  & ExtraProps
};

export type JSXPropsTagNameMap = JSXPropsMapHTML & JSXPropsMapSVG;

/**
 * A union of all intrinsic JSX element properties.
 */
export type JSXProps = JSXPropsTagNameMap[keyof JSXPropsTagNameMap];