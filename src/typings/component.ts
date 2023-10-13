import { RecursiveArray } from "@/typings/type-utils.js";

export type ComponentChildren = RecursiveArray<unknown>;
export type Component = <T extends HTMLElement>(props: Record<string, unknown> & { children?: ComponentChildren; }) => T;