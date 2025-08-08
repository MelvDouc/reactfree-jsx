export type ParamRecord = Record<string, string>;

export type JsonValue =
  | string
  | number
  | boolean
  | null
  | JsonValue[]
  | { [key: string]: JsonValue; };

type RouteComponentProps<T extends ParamRecord> = {
  /**
   * A string dictionary matching the route's path,
   * e.g. "/profile/:id" => `{ id: string }`.
   */
  params: T;
  /**
   * A string dictionary matching the route's `query` property.
   */
  query: ParamRecord;
};

export type RouteComponent<T extends ParamRecord> = (props: RouteComponentProps<T>) => unknown;

export type InferPathParams<T extends string> =
  T extends `${infer A}/${infer B}` ? InferPathParams<A> & InferPathParams<B>
  : T extends `/${infer A}` ? InferPathParams<A>
  : T extends `:${infer A}` ? { [K in A]: string }
  : {};