import type { ComponentChildren } from "$src/types/component-types.js";
import applyChildren from "$src/utils/apply-children.js";

export default function Fragment(props: { children?: ComponentChildren; }): DocumentFragment {
  const fragment = new DocumentFragment();
  applyChildren(fragment, props.children ?? []);
  return fragment;
}