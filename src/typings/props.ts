import { type OptionalObs } from "$src/core/state/obs.js";

// ===== ===== ===== ===== =====
// CLASSNAME
// ===== ===== ===== ===== =====

export type ClassNameProp = OptionalObs<string> | Record<string, OptionalObs<boolean>>;

// ===== ===== ===== ===== =====
// EVENT HANDLERS
// ===== ===== ===== ===== =====

export type EventHandlerProp<Ev extends Event> = ((ev: Ev) => unknown) | null;

// ===== ===== ===== ===== =====
// STYLE
// ===== ===== ===== ===== =====

export type StyleRecord = {
  [K in StyleAttribute]?: OptionalObs<string>;
};

type StyleAttribute = Extract<keyof {
  [K in keyof CSSStyleDeclaration as CSSStyleDeclaration[K] extends string ? K : never]: unknown
}, string>;