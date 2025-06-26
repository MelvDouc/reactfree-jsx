import { Observable } from "$src/core/state/obs.js";
import type { ComponentChild } from "$src/typings/component.js";

export function applyChildren(node: Node, children: ComponentChild[]): void {
  children.forEach((child) => applyChild(node, child));
}

export function applyChild(node: Node, child: unknown): void {
  if (Array.isArray(child)) {
    applyChildren(node, child);
    return;
  }

  if (child instanceof Observable) {
    appendObservable(node, child);
    return;
  }

  if (child instanceof Node) {
    node.appendChild(child);
    return;
  }

  if (!isFalseOrNullish(child))
    node.appendChild(createTextNode(child));
}

function appendObservable(node: Node, obs: Observable<unknown>): void {
  const startComment = new Comment("reactfree-jsx - do not remove");
  const endComment = new Comment(startComment.data);
  applyChild(node, [startComment, obs.value, endComment]);

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

function createTextNode(child: unknown): Text {
  return document.createTextNode(String(child));
}

function isFalseOrNullish(value: unknown): value is false | null | undefined {
  return value === false || value == null;
}