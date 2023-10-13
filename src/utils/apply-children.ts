import { Obs } from "@/Obs.js";
import { ComponentChildren } from "@/typings/component.js";

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

    let node = getNode(child.value);
    element.appendChild(node);

    child.subscribe((value) => {
      const newNode = getNode(value);
      element.replaceChild(newNode, node);
      node = newNode;
    });
  });
}

function getNode(value: unknown) {
  if (value instanceof Element || value instanceof DocumentFragment)
    return value;

  if (isFalsyComponentChild(value))
    return document.createTextNode("");

  return document.createTextNode(String(value));
}

export function isFalsyComponentChild(value: unknown) {
  return value === false || value == null;
}