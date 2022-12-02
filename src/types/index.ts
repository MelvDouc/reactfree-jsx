import Observable from "melv_observable";
import { FreeJsxElementTagNameMap } from "./elements";
HTMLElement;
export { JSX };

export type ComponentChild = ComponentChild[] | Node | string | number | boolean | undefined | null;
export type ComponentChildren = ComponentChild | ComponentChild[];
export type ComponentFactory = (props: { children?: ComponentChildren; }) => Element | ComponentFactory;

export type StyleObj = Record<keyof CSSStyleDeclaration, string | Observable<string>>;
export type ClassObj = Record<string, boolean | ClassObjObsAndPredicate>;
type ClassObjObsAndPredicate<T = any> = { obs: Observable<T>, predicate: (value: T | undefined) => boolean; };
export type Props<T extends keyof JSX.IntrinsicElements> = Partial<JSX.IntrinsicElements[T]>;

declare global {
  namespace JSX {
    type WritableHTMLElements = {
      [K in keyof FreeJsxElementTagNameMap]: FreeJsxElementTagNameMap[K]
    };

    type ObservableHTMLElements = {
      [K in keyof FreeJsxElementTagNameMap]: {
        [L in keyof FreeJsxElementTagNameMap[K]as `_${string & L}`]?: Observable<FreeJsxElementTagNameMap[K][L]>;
      }
    };

    type InitializableHTMLElements = {
      [K in keyof FreeJsxElementTagNameMap]: {
        $init?: (element: FreeJsxElementTagNameMap[K]) => void;
        classNames?: string[];
        classObj?: ClassObj;
        styleObj?: StyleObj;
      }
    };

    type IntrinsicElementsHTML = WritableHTMLElements & ObservableHTMLElements & InitializableHTMLElements;
    type IntrinsicElements = IntrinsicElementsHTML;
  }
}