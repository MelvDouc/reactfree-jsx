import type { Obs, RecursiveArray } from "$types/misc.js";

type Primitive = boolean | string | number | bigint | symbol | undefined | null;
type ReactFreeNode = Primitive | Node;

export type ReactFreeNodeObs = Obs<RecursiveArray<ReactFreeNode>>;
export type ComponentChild = ReactFreeNode | ReactFreeNodeObs;
export type ComponentChildren = RecursiveArray<ComponentChild>;
export type Component = (props: Record<string, unknown> & { children?: ComponentChildren; }) => Node;