import type { ParamRecord, RouteComponent } from "$src/extra/router/types.js";

export default class RouterContext<T extends ParamRecord = {}> {
  public readonly url: URL;
  public readonly component: RouteComponent<T>;
  public readonly pathParams: T;

  public constructor(url: URL, pathParams: T, component: RouteComponent<T>) {
    this.url = url;
    this.pathParams = pathParams;
    this.component = component;
  }
}