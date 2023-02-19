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

export type ClassObj = Record<string, boolean | ClassObjObsAndPredicate>;
type ClassObjObsAndPredicate<T = any> = {
  obs: Observable<T>;
  predicate: (value: T | undefined) => boolean;
};
export type Props<T extends keyof JSX.IntrinsicElements> = Partial<
  JSX.IntrinsicElements[T]
>;
export type StyleObj = Partial<
  Omit<CSSStyleDeclaration, "setProperty" | "removeProperty">
>;

type ReadWriteOnly<T> = {
  -readonly [P in keyof T]: T[P];
};

declare global {
  namespace JSX {
    type IntrinsicElementsHTML = {
      [K in keyof HTMLElementTagNameMap]:
      & Partial<
        Omit<ReadWriteOnly<HTMLElementTagNameMap[K]>, "classList" | "style">
      >
      & {
        $init?: (element: HTMLElementTagNameMap[K]) => void;
        classNames?: string[];
        classObj?: ClassObj;
        style?: StyleObj;
        [dataAttribute: `data${string}`]: string;
      };
    };

    type IntrinsicElements = IntrinsicElementsHTML;
  }
}