import { Obs } from "@/core/Obs.js";
import type { HTMLElementProps } from "@/typings/mod.js";

export default function applyProps<K extends keyof HTMLElementTagNameMap>(
  element: HTMLElementTagNameMap[K],
  props: HTMLElementProps<K>
) {
  let key: Extract<keyof typeof props, string>;

  for (key in props) {
    const item = props[key];

    if (item instanceof Obs) {
      applyProp(element, key, item.value);
      item.subscribe((value) => applyProp(element, key, value));
      continue;
    }

    applyProp(element, key, item);
  }
}

function applyProp(element: Element, key: string, value: any) {
  if (!(key in element) || key === "list") {
    element.setAttribute(key, String(value));
    return;
  }

  element[key as "id"] = value;
}