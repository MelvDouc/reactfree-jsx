import { Obs } from "@/core/Obs.js";
import type { ComponentChildren } from "@/typings/mod.js";

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
      const children = [...element.childNodes];
      const endCommentIndex = children.indexOf(endComment);
      const nextChildren = children.slice(endCommentIndex);
      for (let i = children.indexOf(startComment) + 1; i < endCommentIndex; i++)
        element.removeChild(children[i]);
      element.append(getNode(value), ...nextChildren);
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

  if (isFalsyComponentChild(value))
    return document.createTextNode("");

  return document.createTextNode(String(value));
}

export function isFalsyComponentChild(value: unknown) {
  return value === false || value == null;
}