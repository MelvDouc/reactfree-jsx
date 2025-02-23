import type { OptionalObs } from "$src/props/obs.js";
import type { StyleRecord } from "$src/props/style.js";
import type { ComponentParentProps } from "$src/typings/component.js";

type Events = GlobalEventHandlersEventMap;

type EventHandlerProp<El extends Element, Ev extends Event> = ((this: El, ev: Ev) => unknown) | null;

type EventHandlerProps<E extends Element> = {
  [K in keyof Events as `on${K}`]?: OptionalObs<EventHandlerProp<E, Events[K]>>
};

interface AriaProps {
  [key: `aria${string}`]: OptionalObs<string>;
}

interface DatasetProps {
  [key: `data-${string}`]: OptionalObs<string>;
}

export interface ElementProps<E extends Element> extends AriaProps, ComponentParentProps, DatasetProps, EventHandlerProps<E> {
  autofocus?: OptionalObs<boolean>;
  className?: OptionalObs<string> | Record<string, OptionalObs<boolean>>;
  id?: OptionalObs<string>;
  is?: E extends HTMLElement ? string : never;
  nonce?: OptionalObs<string>;
  role?: OptionalObs<string | null>;
  slot?: OptionalObs<string>;
  style?: StyleRecord;
  scrollLeft?: OptionalObs<number>;
  scrollTop?: OptionalObs<number>;
  tabIndex?: OptionalObs<number>;
  $init?: (element: E) => unknown;
}