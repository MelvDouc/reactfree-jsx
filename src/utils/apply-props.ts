import { Observable } from "$src/deps.js";
import type { ElementSpecificProps, TagName } from "$src/types.js";

const readonlyAttributes = new Set([
  "list",
  "role",
  "style",
  "viewBox"
]);

export default function applyProps<K extends TagName>(
  element: Element,
  props: ElementSpecificProps<K>,
  isSVG: boolean
) {
  let key: Extract<keyof typeof props, string>;

  for (key in props) {
    const item = props[key];

    if (item instanceof Observable) {
      applyProp(element, key, item.value, isSVG);
      item.subscribe((value) => applyProp(element, key, value, isSVG));
      continue;
    }

    applyProp(element, key, item, isSVG);
  }
}

function applyProp(element: Element, key: string, value: any, isSVG: boolean) {
  if (!(key in element) || readonlyAttributes.has(key) || isSVG) {
    element.setAttribute(key, String(value));
    return;
  }

  element[key as "id"] = value;
}