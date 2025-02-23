import { applyChild } from "$src/props/children.js";
import type { ComponentParentProps } from "$src/typings/mod.js";

export default function createFragment({ children }: ComponentParentProps): DocumentFragment {
  const fragment = new DocumentFragment();
  applyChild(fragment, children);
  return fragment;
}