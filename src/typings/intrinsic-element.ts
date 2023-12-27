import type { Obs } from "@/core/Obs.js";
import type { PropsTagNameMap } from "@/typings/props/PropsTagNameMap.js";
import type { ExcludeMethods } from "@/typings/type-utils.js";

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
    is?: string;
    $init?: (element: HTMLElementTagNameMap[T]) => unknown;
    [key: `data-${string}`]: OptionalObs<string>;
  };