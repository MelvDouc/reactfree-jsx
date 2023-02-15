import Observable from "melv_observable";
export { JSX };

export type ComponentChild =
  | ComponentChild[]
  | Node
  | string
  | number
  | boolean
  | undefined
  | null;
export type ComponentChildren = ComponentChild | ComponentChild[];
export type ComponentFactory = (props: {
  children?: ComponentChildren;
}) => Element | ComponentFactory;

export type StyleObj = Partial<
  Record<keyof CSSStyleDeclaration, string | Observable<string>>
>;
export type ClassObj = Record<string, boolean | ClassObjObsAndPredicate>;
type ClassObjObsAndPredicate<T = any> = {
  obs: Observable<T>;
  predicate: (value: T | undefined) => boolean;
};
export type Props<T extends keyof JSX.IntrinsicElements> = Partial<
  JSX.IntrinsicElements[T]
>;

declare global {
  namespace JSX {
    type ObservableHTMLElements = {
      [K in keyof HTMLElementTagNameMap]: {
        [L in keyof HTMLElementTagNameMap[K]as `_${string &
        L}`]?: Observable<HTMLElementTagNameMap[K][L]>;
      };
    };

    type IntrinsicElementsHTML = {
      [K in keyof HTMLElementTagNameMap]:
      & HTMLElementTagNameMap[K]
      & ObservableHTMLElements[K]
      & {
        $init?: (element: HTMLElementTagNameMap[K]) => void;
        classNames?: string[];
        classObj?: ClassObj;
        styleObj?: StyleObj;
      };
    };

    type IntrinsicElements = IntrinsicElementsHTML;
  }
}