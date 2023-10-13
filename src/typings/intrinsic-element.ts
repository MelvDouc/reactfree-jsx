import type { Obs } from "@/Obs.js";
import PropsTagNameMap from "@/typings/props/PropsTagNameMap.js";
import { ExcludeMethods } from "@/typings/type-utils.js";

export type OptionalObs<T> = T | Obs<T>;

export type HTMLElementProps<T extends keyof HTMLElementTagNameMap> = {
  [K in keyof PropsTagNameMap[T]]?: OptionalObs<PropsTagNameMap[T][K]>
};

export type ClassRecord = Record<string, OptionalObs<boolean>>;

export type StyleRecord = {
  [K in keyof ExcludeMethods<CSSStyleDeclaration>]?: OptionalObs<string>;
};

export type IntrinsicElement<T extends keyof HTMLElementTagNameMap> =
  & HTMLElementProps<T>
  & {
    className?: string | ClassRecord;
    style?: StyleRecord;
    $init?: (element: HTMLElementTagNameMap[T]) => unknown;
    [key: `data-${string}`]: OptionalObs<string>;
  };