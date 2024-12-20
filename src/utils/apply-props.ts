import { Observable } from "$src/deps.js";

const READONLY_PROPERTIES = [
  "list",
  "preserveAspectRatio",
  "requiredExtensions",
  "sizes",
  "systemLanguage",
  "viewBox",
  "x",
  "y",
  "z"
];

export default function applyProps(element: Element, props: Record<string, unknown>): void {
  for (const key in props) {
    const item = props[key];

    if (item instanceof Observable) {
      applyProp(element, key, item.value);
      item.subscribe((value) => applyProp(element, key, value));
      continue;
    }

    applyProp(element, key, item);
  }
}

function applyProp(element: Element, prop: string, value: unknown): void {
  if (isReadonlyProperty(prop) || prop.startsWith("data-")) {
    element.setAttribute(prop, String(value));
    return;
  }

  Reflect.set(element, prop, value);
}

function isReadonlyProperty(prop: string) {
  return READONLY_PROPERTIES.includes(prop);
}