export type ParamRecord = Record<string, string>;

type RouteComponentProps<P extends ParamRecord, Q extends ParamRecord> = {
  /**
   * A string dictionary matching the route's path,
   * e.g. "/profile/:id" => `{ id: string }`.
   */
  params: P;
  /**
   * A string dictionary matching the route's `query` property.
   */
  query: Q;
};

export type RouteComponent<
  P extends ParamRecord = ParamRecord,
  Q extends ParamRecord = ParamRecord
> = (props: RouteComponentProps<P, Q>) => unknown;
