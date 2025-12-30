import type { ParamRecord, RouteComponent } from "$src/extra/router/types.js";

export default class RouterContext {
  public readonly url: URL;
  public readonly component: RouteComponent<ParamRecord, ParamRecord>;
  public readonly pathParams: ParamRecord;

  public constructor(url: URL, pathParams: ParamRecord, component: RouteComponent<ParamRecord, ParamRecord>) {
    this.url = url;
    this.pathParams = pathParams;
    this.component = component;
  }
}