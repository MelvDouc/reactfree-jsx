import { Observable } from "melv_observable";
import type {
  ComponentChild,
  ComponentChildren,
  ElementOrFragment,
  ObsOfAppendables
} from "$types/component-types.js";
import type { RecursiveArray } from "$types/misc.js";

export default function applyChildren(element: ElementOrFragment, children: ComponentChildren) {
  children.forEach((child) => applyChild(element, child));
}

function applyChild(
  element: Element | DocumentFragment,
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

function appendObservable(element: ElementOrFragment, observable: ObsOfAppendables) {
  const startComment = new Comment("reactfree-jsx - do not remove");
  const endComment = new Comment(startComment.data);

  applyChildren(element, [startComment, observable.value, endComment]);

  observable.subscribe((value) => {
    const childNodes = [...element.childNodes];
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