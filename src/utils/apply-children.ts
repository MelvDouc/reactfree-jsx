import { Observable } from "melv_observable";
import type {
  ComponentChild,
  ComponentChildren,
  ReactFreeNodeObs
} from "$types/component-types.js";
import type { RecursiveArray } from "$types/misc.js";

export default function applyChildren(node: Node, children: ComponentChildren) {
  children.forEach((child) => applyChild(node, child));
}

function applyChild(
  element: Node,
  child: ComponentChild | RecursiveArray<ComponentChild>
) {
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

  if (!isFalsy(child)) {
    element.appendChild(createTextNode(child));
  }
}

function appendObservable(node: Node, observable: ReactFreeNodeObs) {
  const startComment = new Comment("reactfree-jsx - do not remove");
  const endComment = new Comment(startComment.data);

  applyChildren(node, [startComment, observable.value, endComment]);

  observable.subscribe((value) => {
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

function isFalsy(value: unknown) {
  return value === false || value == null;
}