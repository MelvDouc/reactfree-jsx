import { Observable } from "melv_observable";
import type { ElementSpecificProps } from "$types/props.js";

const readonlyAttributes = new Set([
  "list",
  "role"
]);

export default function applyProps<K extends keyof HTMLElementTagNameMap>(
  element: HTMLElementTagNameMap[K],
  props: ElementSpecificProps<K>
) {
  let key: Extract<keyof typeof props, string>;

  for (key in props) {
    const item = props[key];

    if (item instanceof Observable) {
      applyProp(element, key, item.value);
      item.subscribe((value) => applyProp(element, key, value));
      continue;
    }

    applyProp(element, key, item);
  }
}

function applyProp(element: Element, key: string, value: any) {
  if (!(key in element) || readonlyAttributes.has(key)) {
    element.setAttribute(key, String(value));
    return;
  }

  element[key as "id"] = value;
}