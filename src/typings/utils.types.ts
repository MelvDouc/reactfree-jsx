export type AnyDepth<T> = T | AnyDepth<T>[];
export type Obs<T> = import("$src/deps.ts").Observable<T>;
export type OptionalObs<T> = T | Obs<T>;

export type ClassRecord = Record<string, OptionalObs<boolean>>;
