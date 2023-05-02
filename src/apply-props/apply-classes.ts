import { OptionalObs } from "melv_observable";

export default function applyClasses<T extends keyof HTMLElementTagNameMap>(
  element: HTMLElementTagNameMap[T],
  className: string | undefined,
  classNames: string[] | undefined,
  classes: Record<string, OptionalObs<boolean>> | undefined
): void {
  if (className)
    element.className = className;
  if (classNames)
    classNames.forEach((cssClass) => element.classList.add(cssClass));
  if (classes)
    applyClassRecord(element, classes);
}

function applyClassRecord({ classList }: HTMLElement, classes: Record<string, OptionalObs<boolean>>): void {
  for (const cssClass in classes) {
    const item = classes[cssClass];

    if (typeof item === "boolean") {
      item && classList.add(cssClass);
      continue;
    }

    item.value && classList.add(cssClass);
    item.subscribe((value) => {
      value
        ? classList.add(cssClass)
        : classList.remove(cssClass);
    });
  }
}