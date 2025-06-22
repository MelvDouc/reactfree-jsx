import { eventListenerProperty } from "$src/core/props/setters/element-setters.js";
import { HTMLElementSetterTable } from "$src/core/props/setters/html-setters.js";
import { SVGElementSetterTable } from "$src/core/props/setters/svg-setters.js";
import { Observable } from "$src/core/state/obs.js";

export function applyProps(element: Element, props: Record<string, unknown>): void {
  for (const key in props) {
    const item = props[key];
    const setter = getSetter(element.localName, key);

    if (item instanceof Observable) {
      item.bind(element, key, (value) => setter(element, value));
      continue;
    }

    setter(element, item);
  }
}

function getSetter(tagName: string, key: string): GenericElementSetter {
  if (tagName in HTMLElementSetterTable && key in HTMLElementSetterTable[tagName as "html"])
    return Reflect.get(HTMLElementSetterTable, tagName)[key];

  if (tagName in SVGElementSetterTable && key in SVGElementSetterTable[tagName as "svg"])
    return Reflect.get(SVGElementSetterTable, tagName)[key];

  if (key.startsWith("on:"))
    return eventListenerProperty(key.slice(3)) as GenericElementSetter;

  return (element, value) => {
    element.setAttribute(key, String(value));
  };
}

type GenericElementSetter = (element: Element, value: unknown) => void;