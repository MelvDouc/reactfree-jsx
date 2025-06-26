import { Observable } from "$src/core/state/obs.js";
import type { ClassNameProp } from "$src/typings/props.js";

export function applyClasses(element: Element, classes: ClassNameProp) {
  if (typeof classes === "string") {
    element.className = classes;
    return;
  }

  if (classes instanceof Observable) {
    classes.bind(element, "className");
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