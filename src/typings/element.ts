import type { OptionalObs } from "$src/core/state/obs.js";
import type { ClassNameProp, EventHandlerProps, StyleRecord } from "$src/typings/props.js";
import type { ComponentParentProps } from "$src/typings/component.js";

interface AriaProps {
  [key: `aria${string}`]: OptionalObs<string>;
}

interface DatasetProps {
  [key: `data-${string}`]: OptionalObs<string>;
}

export interface ElementProps<E extends Element> extends AriaProps, ComponentParentProps, DatasetProps, EventHandlerProps<E> {
  autofocus?: OptionalObs<boolean>;
  className?: ClassNameProp;
  id?: OptionalObs<string>;
  is?: E extends HTMLElement ? string : never;
  nonce?: OptionalObs<string>;
  role?: OptionalObs<string | null>;
  scrollLeft?: OptionalObs<number>;
  scrollTop?: OptionalObs<number>;
  slot?: OptionalObs<string>;
  style?: StyleRecord;
  tabIndex?: OptionalObs<number>;
  $init?: (element: E) => unknown;
}