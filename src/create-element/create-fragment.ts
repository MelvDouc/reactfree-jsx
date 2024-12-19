import type { ComponentParentProps } from "$src/typings/index.types.js";
import { applyChild } from "$src/utils/apply-children.js";

export default function createFragment({ children }: ComponentParentProps): DocumentFragment {
  const fragment = new DocumentFragment();
  applyChild(fragment, children);
  return fragment;
}