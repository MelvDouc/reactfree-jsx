import type { Observable as Obs } from "$src/core/state/obs.js";

/**
 * A primitive value that is the child of an element.
 * It will be omitted if it's false or nullish; otherwise it'll be converted to a text node.
 */
export type Primitive = boolean | string | number | bigint | symbol | undefined | null;

type StaticComponentChild = Primitive | Node | ComponentChildren;

/**
 * Any value that can be rendered as a child of an element.
 */
export type ComponentChild = StaticComponentChild | Obs<unknown>;

type ComponentChildren = ComponentChild[];

/**
 * A property object containing the children of an element.
 */
export type ComponentParentProps = {
  children?: ComponentChild;
};

/**
 * A function that returns a JSX element.
 */
export type Component<P> = (props: P) => JSX.Element;
export type ComponentProps = Record<string, unknown>;