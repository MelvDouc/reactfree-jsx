import { Obs } from "@/core/Obs.js";
import type { ClassRecord } from "@/typings/mod.js";

export default function applyClasses(element: Element, classes: string | ClassRecord) {
  if (typeof classes === "string") {
    element.className = classes;
    return;
  }

  for (const className in classes) {
    const item = classes[className];

    if (item instanceof Obs) {
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