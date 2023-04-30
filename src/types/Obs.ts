export interface Obs<T> {
  value: T;
  subscribe(subscription: (value: T) => void): VoidFunction;
  map<U>(mapFn: (value: T) => U): Obs<U>;
  notify(): void;
}

export type PossibleObs<T> = T | Obs<T>;