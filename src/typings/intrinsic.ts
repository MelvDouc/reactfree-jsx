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

type _JSX_Props<E, J> =
  & {
    [K in keyof J]?: OptionalObs<J[K]>;
  }
  & {
    $init?: (element: E) => void;
  }
  & ExtraProps;

type JSXPropsMapHTML = {
  [K in keyof HTMLElementPropMap]: _JSX_Props<HTMLElementTagNameMap[K], HTMLElementPropMap[K]>
};

type JSXPropsMapSVG = {
  [K in keyof SVGElementPropMap]: _JSX_Props<SVGElementTagNameMap[K], SVGElementPropMap[K]>
};

export type JSXPropsTagNameMap = JSXPropsMapHTML & JSXPropsMapSVG;

/**
 * A union of all intrinsic JSX element properties.
 */
export type JSXProps = JSXPropsTagNameMap[keyof JSXPropsTagNameMap];