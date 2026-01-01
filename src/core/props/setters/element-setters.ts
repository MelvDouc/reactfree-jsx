import type { EventHandlerProp } from "$src/typings/props.js";

export function addOrRemoveAttribute(element: Element, attribute: string, value: boolean): void {
  element.toggleAttribute(attribute, value);
}

export function createAttributeSetter<V extends string | number = string>(attribute: string) {
  return (e: Element, v: V) => e.setAttribute(attribute, v.toString());
}

export function eventListenerProperty<Ev extends Event>(eventType: string) {
  return (element: Element, value: EventHandlerProp<Ev>) => {
    value && element.addEventListener(eventType, value as EventListener);
  };
}

const elementSetters = {
  autofocus: (e: Element, v: boolean) => addOrRemoveAttribute(e, "autofocus", v),
  id: (e: Element, v: string) => e.id = v,
  nonce: createAttributeSetter<string>("nonce"),
  role: (e: Element, v: string | null) => e.role = v,
  scrollLeft: (e: Element, v: number) => e.scrollLeft = v,
  scrollTop: (e: Element, v: number) => e.scrollTop = v,
  slot: (e: Element, v: string) => e.slot = v,
  tabIndex: createAttributeSetter<number>("tabindex"),
} as const;

export default elementSetters;

export type ImgDecoding = "async" | "sync" | "auto";

type SetterFn<E extends Element, V> = (element: E, value: V) => void;

export type InferPropsTable<Tb, El extends Element> = {
  [Tag in keyof Tb]: {
    [P in keyof Tb[Tag]]: Tb[Tag][P] extends SetterFn<El, infer V> ? V : never;
  }
};