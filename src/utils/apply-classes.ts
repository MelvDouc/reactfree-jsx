import { Observable } from "melv_observable";
import type { ClassRecord } from "$types/props.js";

export default function applyClasses(element: Element, classes: string | ClassRecord) {
  if (typeof classes === "string") {
    element.className = classes;
    return;
  }

  for (const className in classes) {
    const item = classes[className];

    if (item instanceof Observable) {
      item.value && element.classList.add(className);
      item.subscribe((value) => {
        value
          ? element.classList.add(className)
          : element.classList.remove(className);
      });
      continue;
    }

    if (item)
      element.classList.add(className);
  }
}