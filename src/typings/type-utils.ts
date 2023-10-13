export type RecursiveArray<T> = (T | RecursiveArray<T>)[];

export type ExcludeMethods<T extends object> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K]
};