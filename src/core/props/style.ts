import { Observable } from "$src/core/state/obs.js";
import type { StyleRecord } from "$src/typings/props.js";

export function applyStyle(element: ElementCSSInlineStyle, style: StyleRecord): void {
  let key: keyof StyleRecord;

  for (key in style) {
    const value = style[key] as Exclude<StyleRecord[keyof StyleRecord], undefined>;

    if (!(value instanceof Observable)) {
      element.style[key] = value;
      continue;
    }

    value.bind(element.style, key);
  }
}