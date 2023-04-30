import { Obs } from "./types/Obs.js";

export default class Observable<T extends any> implements Obs<T> {
  #value: T;
  #subscriptions = new Set<(value: T) => any>();

  constructor(value?: T) {
    if (value !== undefined)
      this.#value = value;
  }

  get value(): T {
    return this.#value;
  }

  set value(value: T) {
    this.#value = value;
    this.notify();
  }

  subscribe(subscription: (value: T) => any): VoidFunction {
    this.#subscriptions.add(subscription);
    return () => this.#subscriptions.delete(subscription);
  }

  map<U>(mapFn: (value: T) => U): Obs<U> {
    const observable = new Observable<U>(mapFn(this.value));
    this.subscribe((value) => observable.value = mapFn(value));
    return observable;
  }

  notify(): void {
    this.#subscriptions.forEach((subscription) => subscription(this.#value));
  }
}