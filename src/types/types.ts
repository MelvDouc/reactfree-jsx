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
    type IntrinsicElementsHTML = {
      [K in keyof FreeJsxElementTagNameMap]:
      & Partial<FreeJsxElementTagNameMap[K]>
      & {
        $init?: (element: HTMLElementTagNameMap[K]) => void;
        classes?: Record<string, boolean>;
        style?: FreeJsxStyles;
      };
    };

    type IntrinsicElements = IntrinsicElementsHTML;
  }
}