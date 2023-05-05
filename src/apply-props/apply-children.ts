import { Observable } from "melv_observable";
import { ComponentChildren } from "@/types/index.js";

export default function applyChildren(
  element: Pick<Element, "append" | "replaceChild">,
  children: ComponentChildren
): void {
  if ((typeof children !== "object" || children instanceof Element) && children !== false && children != null) {
    element.append(children as string | Node);
    return;
  }

  if (children instanceof Observable) {
    if (typeof children.value !== "object") {
      const textNode = document.createTextNode(String(children.value));
      element.append(textNode);
      children.subscribe((value) => {
        textNode.textContent = String(value);
      });
      return;
    }

    let prevChild = children.value!;
    element.append(prevChild);
    children.subscribe((value) => {
      element.replaceChild(value as Element, prevChild);
      prevChild = value as Element;
    });
    return;
  }

  if (Array.isArray(children))
    children.forEach((child) => applyChildren(element, child));
}