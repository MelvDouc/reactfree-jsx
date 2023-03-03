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
  /**
   * A function to run on the element after its properties have been set.
   * @param element The element being created.
   */
  $init: (element: HTMLElementTagNameMap[K]) => void;
  /**
   * A record of CSS classes that will be added to the element if the value is true
   * or, if it is an observable, when its value changes to `true`.
   */
  classes: Record<string, PossibleObservable<boolean>>;
  /**
   * An array of CSS classes to add to the element.
   */
  classNames: string[];
  /**
   * A record of CSS classes that will be applied to the element
   * either directly or dynamically via an observable.
   */
  style: FreeJsxStyles;
};

// ===== ===== ===== ===== =====
// STYLES
// ===== ===== ===== ===== =====

type CSSStyleDeclarationMethod = "getPropertyPriority" | "getPropertyValue" | "item" | "length" | "removeProperty" | "setProperty";
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