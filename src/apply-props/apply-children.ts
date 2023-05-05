import { Observable } from "melv_observable";
import { ComponentChildren } from "@/types/index.js";

export default function applyChildren(
  element: Pick<Element, "append" | "replaceChild">,
  children: ComponentChildren
): void {
  if (children instanceof Node || typeof children !== "object" && !isFalseOrNullish(children)) {
    element.append(children as Node | string);
    return;
  }

  if (children instanceof Observable) {
    if (children.value instanceof DocumentFragment)
      throw new Error("An observable that is the child of an element cannot use a fragment as its value. Consider wrapping the child element in a div or span.");

    let prevNode: Node = (children.value instanceof Node)
      ? children.value
      : document.createTextNode(!isFalseOrNullish(children.value) ? String(children.value) : "");
    element.append(prevNode);
    children.subscribe((value) => {
      const newNode = (value instanceof Node)
        ? value
        : document.createTextNode(!isFalseOrNullish(value) ? String(value) : "");
      element.replaceChild(newNode, prevNode);
      prevNode = newNode;
    });
  }

  if (Array.isArray(children))
    children.forEach((child) => applyChildren(element, child));
}

function isFalseOrNullish(value: unknown): value is false | null | undefined {
  return value === false || false == null;
}