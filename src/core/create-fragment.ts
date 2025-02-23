import { applyChildren } from "$src/core/props/children.js";
import type { ComponentParentProps } from "$src/typings/component.js";

export default function createFragment({ children }: ComponentParentProps): DocumentFragment {
  const fragment = new DocumentFragment();
  applyChildren(fragment, [children]);
  return fragment;
}