export default function obs<T>(value?: T): Observable<T> {
  return new Observable(value);
}

export class Observable<T> {
  private _value: T;
  private readonly _subscriptions = new Set<Subscription<T>>();

  public constructor(value?: T) {
    if (value !== undefined)
      this._value = value;
  }

  /**
   * Get the private value stored in this instance.
   */
  public get value(): T {
    return this._value;
  }

  /**
   * Change the value of this instance and notify subscribers
   * if the new value is different from the old one.
   */
  public set value(newValue: T) {
    if (!Object.is(this._value, newValue)) {
      this._value = newValue;
      this.notify();
    }
  }

  /**
   * Run a function whenever the value stored in this instance is reassigned.
   * @param subscription The function to run.
   * @returns An unsubscribe function.
   */
  public subscribe(subscription: Subscription<T>): () => void {
    this._subscriptions.add(subscription);
    return () => this._subscriptions.delete(subscription);
  }

  /**
   * Create a new observable whose value is mapped on to the value of this instance.
   * @param mapFn A function to convert this instance's value into that of the returned observable.
   * @returns The mapped observable.
   */
  public map<U>(mapFn: (value: T) => U): Observable<U> {
    const obs = new Observable(mapFn(this._value));
    this.subscribe((value) => {
      obs.value = mapFn(value);
    });
    return obs;
  }

  /**
   * Update an object property when the value of this instance changes.
   * @param object Any object.
   * @param key A writable property name of `object`.
   * @param setter How to set a value on `object`. Defaults to `(value) => { object[key] = value; }`.
   */
  public bind<K extends PropertyKey, O extends { [P in K]: T }>(object: O, key: K, setter?: (value: T) => unknown): void {
    setter ??= (value) => { object[key] = value as O[K]; };
    setter(this.value);
    this.subscribe(setter);
  }

  /**
   * Execute every subscription function that was added to this instance via `subscribe`.
   */
  public notify(): void {
    this._subscriptions.forEach((subscription) => subscription(this._value));
  }
}

type Subscription<T> = (value: T) => unknown;
export type OptionalObs<T> = T | Observable<T>;