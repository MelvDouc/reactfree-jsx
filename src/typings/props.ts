import { type OptionalObs } from "$src/core/state/obs.js";

// ===== ===== ===== ===== =====
// CLASSNAME
// ===== ===== ===== ===== =====

export type ClassNameProp = OptionalObs<string> | Record<string, OptionalObs<boolean>>;

// ===== ===== ===== ===== =====
// EVENT HANDLERS
// ===== ===== ===== ===== =====

export type EventHandlerProp<El extends Element, Ev extends Event> = OptionalObs<
  ((this: El, ev: Ev) => unknown) | null
>;

export type EventHandlerProps<El extends Element> = {
  [K in keyof GlobalEventHandlersEventMap as `on${K}`]?: EventHandlerProp<El, GlobalEventHandlersEventMap[K]>;
};

// ===== ===== ===== ===== =====
// STYLE
// ===== ===== ===== ===== =====

export type StyleRecord = {
  [K in StyleAttribute]?: OptionalObs<string>;
};

type StyleAttribute = Extract<keyof {
  [K in keyof CSSStyleDeclaration as CSSStyleDeclaration[K] extends string ? K : never]: unknown
}, string>;