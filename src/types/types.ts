import type Observable from "../utils/Observable";
import { FreeJsxElementTagNameMap } from "./elements";
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
export type ComponentFactory = (props: { children?: ComponentChildren; }) => Element | ComponentFactory;
export type Props<T extends keyof JSX.IntrinsicElements> = Partial<JSX.IntrinsicElements[T]>;
export type FreeJsxStyles = Partial<
  Omit<CSSStyleDeclaration, "setProperty" | "removeProperty">
>;

declare global {
  namespace JSX {
    export type IntrinsicElementsHTML = {
      [K in keyof FreeJsxElementTagNameMap]:
      & Partial<FreeJsxElementTagNameMap[K]>
      & { [P in keyof FreeJsxElementTagNameMap[K]as `obs_${Extract<P, string>}`]?: Observable<FreeJsxElementTagNameMap[K][P]> }
      & {
        $init?: (element: HTMLElementTagNameMap[K]) => void;
        classes?: Record<string, boolean | Observable<boolean>>;
        classNames?: string[];
        style?: FreeJsxStyles;
      }
    };

    export type IntrinsicElements = IntrinsicElementsHTML;
  }
}