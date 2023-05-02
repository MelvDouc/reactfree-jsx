import { FreeJSX } from "@/types/index.js";

export * from "@/h.js";
export * from "@/types/index.js";
export { default as Router } from "@/router/Router.js";
export { Observable } from "melv_observable";

declare global {
  namespace JSX {
    type IntrinsicElements = FreeJSX.IntrinsicElementsHTML;
  }
}