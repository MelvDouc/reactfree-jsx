type PossibleObservable<T> = T | Observable<T>;

// ===== ===== ===== ===== =====
// OBSERVABLE
// ===== ===== ===== ===== =====

type Observable<T> = {
  new(value?: T): Observable<T>;
  value: T;
  subscribe(subscription: (value: T) => any): VoidFunction;
  followObservable<O>(observable: Observable<O>, mapFn: (value: O) => T): ThisParameterType<Observable<T>>;
  notify(): void;
};

// ===== ===== ===== ===== =====
// COMPONENTS
// ===== ===== ===== ===== =====

type ComponentChild =
  | ComponentChild[]
  | Node
  | string
  | number
  | boolean
  | undefined
  | null;
type ComponentChildren = ComponentChild | ComponentChild[];
type ComponentFactory = (props: { children?: ComponentChildren; }) => Element | ComponentFactory;

// ===== ===== ===== ===== =====
// PROPERTIES
// ===== ===== ===== ===== =====

type Props<T extends keyof JSX.IntrinsicElements> = Partial<JSX.IntrinsicElements[T]>;
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
type FreeJsxStyles = {
  [K in keyof MethodFreeCSSStyleDeclaration]?: PossibleObservable<MethodFreeCSSStyleDeclaration[K]>
};

// ===== ===== ===== ===== =====
// JSX
// ===== ===== ===== ===== =====

declare namespace JSX {
  type IntrinsicElementsHTML = {
    [K in keyof FreeJsxElementTagNameMap]:
    & { [P in keyof FreeJsxElementTagNameMap[K]]?: PossibleObservable<FreeJsxElementTagNameMap[K][P]> }
    & Partial<FreeJSXExtraAttributes<K>>
  };

  type IntrinsicElements = IntrinsicElementsHTML;
}