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

  followObservable<O>(observable: Observable<O>, mapFn: (value: O) => T): this {
    observable.subscribe((value) => {
      this.value = mapFn(value);
    });
    return this;
  }

  notify(): void {
    this.#subscriptions.forEach((subscription) => subscription(this.#value));
  }
}