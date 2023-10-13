import { Obs } from "@/Obs.js";
import { StyleRecord } from "@/typings/intrinsic-element.js";

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