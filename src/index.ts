import { FreeJSX } from "./types/index.js";

export * from "./h.js";
export { default as Observable } from "./Observable.js";
export { default as Router } from "./Router.js";
export type { FreeJSX };

declare global {
  namespace JSX {
    type IntrinsicElements = FreeJSX.IntrinsicElementsHTML;
  }
}