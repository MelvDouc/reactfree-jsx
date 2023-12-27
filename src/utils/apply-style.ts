import { Obs } from "@/core/Obs.js";
import type { StyleRecord } from "@/typings/mod.js";

export default function applyStyle(element: HTMLElement, style: StyleRecord) {
  for (const key in style) {
    const item = style[key];

    if (item instanceof Obs) {
      element.style[key] = item.value;
      item.subscribe((value) => element.style[key] = value);
      continue;
    }

    element.style[key] = item!;
  }
}