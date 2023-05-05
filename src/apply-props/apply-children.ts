import { Observable } from "melv_observable";
import { ComponentChildren } from "@/types/index.js";

export default function applyChildren(
  element: Pick<Element, "append" | "replaceChild">,
  children: ComponentChildren
): void {
  if (children instanceof Node || typeof children !== "object" && !!children) {
    element.append(children as Node | string);
    return;
  }

  if (children instanceof Observable) {
    let prevNode: Node = (children.value instanceof Node)
      ? children.value
      : document.createTextNode(children.value ? String(children.value) : "");
    element.append(prevNode);
    children.subscribe((value) => {
      const newNode = (value instanceof Node)
        ? value
        : document.createTextNode(value ? String(value) : "");
      element.replaceChild(newNode, prevNode);
      prevNode = newNode;
    });
  }

  if (Array.isArray(children))
    children.forEach((child) => applyChildren(element, child));
}