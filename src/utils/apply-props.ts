import { Obs } from "@/Obs.js";
import { HTMLElementProps } from "@/types.js";

function bindProp<E extends Element, K extends keyof E>(element: E, prop: K, obs: Obs<E[K]>) {
  element[prop] = obs.value;
  obs.subscribe((value) => element[prop] = value);
}

export default function applyProps<E extends HTMLElement>(element: E, props: HTMLElementProps<E>) {
  for (const key in props) {
    const value = props[key];

    if (value instanceof Obs) {
      bindProp(element, key, value);
      continue;
    }

    element[key as keyof E] = value as E[keyof E];
  }
}