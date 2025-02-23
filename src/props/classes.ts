import { Observable } from "$src/props/obs.js";
import type { JSXProps } from "$src/typings/mod.js";

export function applyClasses(element: Element, classes: Exclude<JSXProps["className"], undefined>) {
  if (typeof classes === "string") {
    element.className = classes;
    return;
  }

  if (classes instanceof Observable) {
    element.className = classes.value ?? "";
    classes.subscribe((value) => {
      element.className = value;
    });
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