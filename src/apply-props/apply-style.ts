import { FreeJSX } from "@/types/index.js";

export default function applyStyle<T extends keyof HTMLElementTagNameMap>(element: HTMLElementTagNameMap[T], style: FreeJSX.ExtraProps<T>["style"]): void {
  for (const key in style) {
    const strOrObs = style[key]!;

    if (typeof strOrObs === "string") {
      element.style[key] = strOrObs;
      continue;
    }

    element.style[key] = strOrObs.value;
    strOrObs.subscribe((v) => element.style[key] = v);
  }
}
