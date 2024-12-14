import { Observable } from "$src/deps.js";
import type { StyleAttribute, StyleRecord } from "$src/types.js";

export default function applyStyle(element: HTMLElement, style: StyleRecord) {
  let key: StyleAttribute;

  for (key in style) {
    const item = style[key];

    if (item instanceof Observable) {
      element.style[key] = item.value;
      item.subscribe((value) => element.style[key] = value);
      continue;
    }

    element.style[key] = item as string;
  }
}