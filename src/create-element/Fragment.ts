import type { ComponentParentProps } from "$src/types.js";
import applyChildren from "$src/utils/apply-children.js";

export default function Fragment(props: ComponentParentProps): DocumentFragment {
  const fragment = new DocumentFragment();
  applyChildren(fragment, props.children ?? []);
  return fragment;
}