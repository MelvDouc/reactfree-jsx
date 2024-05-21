import { Observable } from "melv_observable";
import type { StyleAttribute, StyleRecord } from "$types/props.js";

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