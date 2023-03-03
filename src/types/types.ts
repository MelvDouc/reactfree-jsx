import type Observable from "../utils/Observable";
import { FreeJsxElementTagNameMap } from "./elements";
export { JSX };

type PossibleObservable<T> = T | Observable<T>;

// ===== ===== ===== ===== =====
// COMPONENTS
// ===== ===== ===== ===== =====

export type ComponentChild =
  | ComponentChild[]
  | Node
  | string
  | number
  | boolean
  | undefined
  | null;
export type ComponentChildren = ComponentChild | ComponentChild[];
export type ComponentFactory = (props: { children?: ComponentChildren; }) => Element | ComponentFactory;

// ===== ===== ===== ===== =====
// PROPERTIES
// ===== ===== ===== ===== =====

export type Props<T extends keyof JSX.IntrinsicElements> = Partial<JSX.IntrinsicElements[T]>;
type ObservableProperties<K extends keyof FreeJsxElementTagNameMap> = {
  [P in keyof FreeJsxElementTagNameMap[K]as `obs_${Extract<P, string>}`]?: Observable<FreeJsxElementTagNameMap[K][P]>
};
type FreeJSXExtraAttributes<K extends keyof FreeJsxElementTagNameMap> = {
  $init: (element: HTMLElementTagNameMap[K]) => void;
  classes: Record<string, PossibleObservable<boolean>>;
  classNames: string[];
  style: FreeJsxStyles;
};

// ===== ===== ===== ===== =====
// STYLES
// ===== ===== ===== ===== =====

type CSSStyleDeclarationMethod = "getPropertyPriority" | "getPropertyValue" | "item" | "removeProperty" | "setProperty";
type MethodFreeCSSStyleDeclaration = Omit<CSSStyleDeclaration, CSSStyleDeclarationMethod>;
export type FreeJsxStyles = {
  [K in keyof MethodFreeCSSStyleDeclaration]?: PossibleObservable<MethodFreeCSSStyleDeclaration[K]>
};

declare global {
  namespace JSX {
    export type IntrinsicElementsHTML = {
      [K in keyof FreeJsxElementTagNameMap]:
      & Partial<FreeJsxElementTagNameMap[K]>
      & ObservableProperties<K>
      & Partial<FreeJSXExtraAttributes<K>>
    };

    export type IntrinsicElements = IntrinsicElementsHTML;
  }
}