export type ParamRecord = Record<string, string>;

export type RouteComponent<Props extends ParamRecord = ParamRecord> = (props: Props) => JSX.Element | Promise<JSX.Element>;
