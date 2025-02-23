import { Observable } from "$src/core/state/obs.js";
import type { StyleAttribute, StyleRecord } from "$src/typings/props.js";

export function applyStyle(element: HTMLElement | SVGElement, style: StyleRecord): void {
  Object.entries(style).forEach(([k, v]) => {
    if (!(v instanceof Observable)) {
      element.style[k as StyleAttribute] = v as string;
      return;
    }

    v.bind(element.style, k as StyleAttribute);
  });
}