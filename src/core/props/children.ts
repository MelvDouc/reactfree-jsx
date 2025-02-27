import { Observable } from "$src/core/state/obs.js";
import type { ComponentChild, ComponentChildren, ComponentObs } from "$src/typings/component.js";

export function applyChildren(node: Node, children: ComponentChildren): void {
  children.forEach((child) => applyChild(node, child));
}

function applyChild(element: Node, child: ComponentChild): void {
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

  if (!isFalseOrNullish(child))
    element.appendChild(createTextNode(child));
}

function appendObservable(node: Node, obs: ComponentObs): void {
  const startComment = new Comment("reactfree-jsx - do not remove");
  const endComment = new Comment(startComment.data);
  applyChildren(node, [startComment, obs.value, endComment]);

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