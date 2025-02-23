import type { Observable as Obs } from "$src/core/state/obs.js";

/**
 * A primitive value that is the child of an element.
 * It will be omitted if it's false or nullish; otherwise it'll be converted to a text node.
 */
export type Primitive = boolean | string | number | bigint | symbol | undefined | null;
type StaticComponentChild = Primitive | Node | ComponentChildren;

export type ComponentObs = Obs<StaticComponentChild>;
export type ComponentChild = StaticComponentChild | ComponentObs;
export type ComponentChildren = ComponentChild[];

export type ComponentParentProps = {
  children?: ComponentChild;
};

export type Component<P> = (props: P) => JSX.Element;
export type ComponentProps = Record<string, unknown>;