import { Obs } from "$src/Obs.js";
import type { ComponentChildren } from "$src/types.js";

export default function applyChildren(
  element: Element | DocumentFragment,
  children: ComponentChildren
) {
  children.forEach((child) => {
    if (Array.isArray(child)) {
      applyChildren(element, child);
      return;
    }

    if (!(child instanceof Obs)) {
      element.append(getNode(child));
      return;
    }

    const startComment = new Comment("reactfree-jsx - do not remove");
    const endComment = new Comment(startComment.data);
    element.append(startComment, getNode(child.value), endComment);
    child.subscribe((value) => {
      const childNodes = [...element.childNodes];
      const endCommentIndex = childNodes.indexOf(endComment);
      for (let i = childNodes.indexOf(startComment) + 1; i < endCommentIndex; i++)
        childNodes[i].remove();
      startComment.after(getNode(value));
    });
  });
}

function getNode(value: unknown) {
  if (value instanceof Node)
    return value;

  if (Array.isArray(value)) {
    const fragment = new DocumentFragment();
    value.forEach((item) => fragment.appendChild(getNode(item)));
    return fragment;
  }

  return document.createTextNode(isFalsyComponentChild(value) ? "" : String(value));
}

export function isFalsyComponentChild(value: unknown) {
  return value === false || value == null;
}