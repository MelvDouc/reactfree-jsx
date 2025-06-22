import { applyChild } from "$src/core/props/children.js";
import type { ComponentParentProps } from "$src/typings/component.js";

/**
 * @param props An object containing the fragment's children.
 * @returns A {@link https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment document fragment}.
 */
export default function createFragment({ children }: ComponentParentProps): DocumentFragment {
  const fragment = new DocumentFragment();
  applyChild(fragment, children);
  return fragment;
}