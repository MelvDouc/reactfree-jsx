import type { Obs } from "$src/props/obs.js";
import type { AnyDepth } from "$src/typings/utils.js";

/**
 * A primitive value that is the child of an element.
 * It will be omitted if it's false or nullish; otherwise it'll be converted to a text node.
 */
type Primitive = boolean | string | number | bigint | symbol | undefined | null;

/**
 * A value that's a node or can be converted to one
 * in order to be appended as a child of another node.
 */
type ReactFreeNode = Primitive | Node;

export type NodeObs = Obs<AnyDepth<ReactFreeNode>>;
export type ComponentChild = AnyDepth<ReactFreeNode | NodeObs>;
export type ComponentParentProps = { children?: ComponentChild; };
export type Component<P = {}> = (props: P) => JSX.Element;