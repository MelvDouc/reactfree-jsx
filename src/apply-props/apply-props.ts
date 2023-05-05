import { Observable, OptionalObs } from "melv_observable";

const booleanAttributes = {
  allowfullscreen: "allowfullscreen",
  async: "async",
  autofocus: "autofocus",
  autoplay: "autoplay",
  checked: "checked",
  controls: "controls",
  default: "default",
  defer: "defer",
  disabled: "disabled",
  formNoValidate: "formnovalidate",
  inert: "inert",
  isMap: "ismap",
  loop: "loop",
  multiple: "multiple",
  muted: "muted",
  noModule: "nomodule",
  noValidate: "novalidate",
  open: "open",
  playsInline: "playsinline",
  readOnly: "readonly",
  required: "required",
  reversed: "reversed",
  selected: "selected"
} as const;

export default function applyProps<T extends keyof HTMLElementTagNameMap>(
  element: HTMLElementTagNameMap[T],
  props: Record<string, OptionalObs<any>>
): void {
  for (const key in props) {
    const item: OptionalObs<any> = props[key];

    if (!(item instanceof Observable)) {
      applyProp(element, key, item);
      continue;
    }

    applyProp(element, key, item.value);
    item.subscribe((value) => applyProp(element, key, value));

    if (key in booleanAttributes) {
      new MutationObserver((mutations) => {
        for (const { attributeName } of mutations) {
          if (attributeName === booleanAttributes[key as keyof typeof booleanAttributes]) {
            item.value = element.hasAttribute(attributeName);
            return;
          }
        }
      }).observe(element, { attributes: true });
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