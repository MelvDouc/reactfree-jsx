export type RecursiveArray<T> = (T | RecursiveArray<T>)[];

export type ExtractConstant<T extends object, K extends string> = T[Extract<keyof T, K>];
export type ExcludeMethods<T extends object> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K]
};

export type Obs<T> = import("melv_observable").Observable<T>;
export type OptionalObs<T> = T | Obs<T>;