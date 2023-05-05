import { OptionalObs } from "melv_observable";

type FreeJsxOptionalClass = {
  className?: string;
  /**
   * An array of CSS classes to add to the element.
   */
  classNames?: string[];
  /**
   * A record of CSS classes that will be added to the element if the value is true
   * or, if it is an observable, when its value changes to `true`.
   */
  classes?: Record<string, OptionalObs<boolean>>;
};

export type ExtraProps<K extends keyof HTMLElementTagNameMap> = {
  /**
   * A function to run on the element after its properties have been set.
   * @param element The element being created.
   */
  $init: (element: HTMLElementTagNameMap[K]) => void;
  /**
   * A record of CSS classes that will be applied to the element
   * either directly or dynamically via an observable.
   */
  style: FreeJsxStyles;
  /**
   * Additional HTML attributes to add to the element.
   */
  extraAttributes: Record<string, OptionalObs<string>>;
} & FreeJsxOptionalClass;

// ===== ===== ===== ===== =====
// STYLES
// ===== ===== ===== ===== =====

type CSSStyleDeclarationMethod = "getPropertyPriority" | "getPropertyValue" | "item" | "length" | "removeProperty" | "setProperty";
type MethodFreeCSSStyleDeclaration = Omit<CSSStyleDeclaration, CSSStyleDeclarationMethod>;
type FreeJsxStyles = {
  [K in keyof MethodFreeCSSStyleDeclaration]?: OptionalObs<MethodFreeCSSStyleDeclaration[K]>
};