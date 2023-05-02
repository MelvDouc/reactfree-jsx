import { Observable } from "melv_observable";
import { FreeJSX } from "@/types/index.js";

export default function applyProps<T extends keyof HTMLElementTagNameMap>(
  element: HTMLElementTagNameMap[T],
  props: Partial<FreeJSX.HTMLPropsTagNameMap[T]>
): void {
  for (const key in props) {
    // @ts-ignore
    const item = props[key];

    if (!(item instanceof Observable)) {
      applyProp(element, key, item);
      continue;
    }

    applyProp(element, key, item.value);
    item.subscribe((value) => applyProp(element, key, value));

    if (key === "open") {
      new MutationObserver((mutations) => {
        for (const { attributeName } of mutations) {
          if (attributeName === "open") {
            item.value = element.getAttribute("open") !== null;
            return;
          }
        }
      }).observe(element, { attributeFilter: ["open"] });
    }
  }
}

function applyProp<T extends keyof HTMLElementTagNameMap>(element: HTMLElementTagNameMap[T], key: string, value: any): void {
  if ((key in element) && key !== "list") {
    if (element[key as keyof typeof element] !== value)
      element[key as keyof typeof element] = value;
    return;
  }

  if (element.getAttribute(key) !== value)
    element.setAttribute(key, value);
}