/**
 * A class similar to `EventTarget` in the DOM ane especially `EventEmitter` in NodeJS.
 * Unlike the other two, however, event functions are strongly typed.
 */
export default class TypedEventEmitter<T extends EventParamsRecord> {
  private readonly _listeners: TypedEventEmitterListeners<T> = {};

  /**
   * Adds a listener to the event.
   * @param eventType The name of the event to listen for.
   * @param listener The function to run when the event is emitted.
   * @returns A function that removes the listener from the event.
   */
  public on<K extends keyof T>(eventType: K, listener: Listener<T, K>): () => void {
    if (!(eventType in this._listeners))
      this._listeners[eventType] = new Set();

    const listeners = this._listeners[eventType] as Set<Listener<T, K>>;
    listeners.add(listener);
    return () => listeners.delete(listener);
  }

  /**
   * Emits an event to all listeners.
   * @param eventType The name of the event to listen for.
   * @param arg The argument to pass to the listeners.
   */
  public emit<K extends keyof T>(eventType: K, ...args: T[K]): void {
    this._listeners[eventType]?.forEach((listener) => listener(...args));
  }

  /**
   * Creates a pair of functions to handle an event.
   * @param eventType The name of the event to listen for.
   * @returns A tuple containing a function to add a listener and another to emit an event.
   */
  public createHandlers<K extends keyof T>(eventType: K): Handlers<T, K> {
    return [
      (listener) => this.on(eventType, listener),
      (...args) => this.emit(eventType, ...args)
    ];
  }
}

export type EventParamsRecord = Record<string, unknown[]>;
export type Listener<T extends EventParamsRecord, K extends keyof T> = (...args: T[K]) => unknown;

export type Handlers<T extends EventParamsRecord, K extends keyof T> = [
  on: (listener: Listener<T, K>) => () => void,
  emit: (...args: T[K]) => void
];

export type TypedEventEmitterListeners<T extends EventParamsRecord> = {
  [K in keyof T]?: Set<Listener<T, K>>;
};