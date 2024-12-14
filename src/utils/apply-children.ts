import { Observable } from "$src/deps.js";
import type { ComponentChild, ComponentChildren, ObservableNode } from "$src/types.js";

export default function applyChildren(node: Node, children: ComponentChildren) {
  children.forEach((child) => applyChild(node, child));
}

function applyChild(element: Node, child: ComponentChild) {
  if (Array.isArray(child)) {
    applyChildren(element, child);
    return;
  }

  if (child instanceof Observable) {
    appendObservable(element, child);
    return;
  }

  if (child instanceof Node) {
    element.appendChild(child);
    return;
  }

  if (!isFalseOrNullish(child)) {
    element.appendChild(createTextNode(child));
  }
}

function appendObservable(node: Node, obs: ObservableNode) {
  const startComment = new Comment("reactfree-jsx - do not remove");
  const endComment = new Comment(startComment.data);
  const v = obs.value;

  applyChildren(node, [startComment, v, endComment]);

  obs.subscribe((value) => {
    const childNodes = [...node.childNodes];
    const startCommentIndex = childNodes.indexOf(startComment);
    const endCommentIndex = childNodes.indexOf(endComment);

    for (let i = endCommentIndex - 1; i > startCommentIndex; i--)
      childNodes[i].remove();

    const fragment = new DocumentFragment();
    applyChild(fragment, value);
    startComment.after(fragment);
  });
}

function createTextNode(child: unknown) {
  return document.createTextNode(String(child));
}

function isFalseOrNullish(value: unknown) {
  return value === false || value == null;
}