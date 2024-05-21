import type { Obs, RecursiveArray } from "$types/misc.js";

type Primitive = boolean | string | number | bigint | symbol | undefined | null;
type Appendable = Primitive | Node;
export type ObsOfAppendables = Obs<RecursiveArray<Appendable>>;
export type ElementOrFragment = Element | DocumentFragment;
export type ComponentChild = Appendable | ObsOfAppendables;
export type ComponentChildren = RecursiveArray<ComponentChild>;
export type Component = <T extends ElementOrFragment>(props: Record<string, unknown> & { children?: ComponentChildren; }) => T;