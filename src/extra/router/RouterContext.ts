import type { ParamRecord, RouteComponent } from "$src/extra/router/types.js";

export default class RouterContext {
  public readonly url: URL;
  public readonly component: RouteComponent;
  public readonly pathParams: ParamRecord;

  public constructor(url: URL, pathParams: ParamRecord, component: RouteComponent) {
    this.url = url;
    this.pathParams = pathParams;
    this.component = component;
  }

  public get queryParams(): ParamRecord {
    return Object.fromEntries(this.url.searchParams);
  }

  public element(): JSX.Element | Promise<JSX.Element> {
    return this.component({
      ...this.pathParams,
      ...this.queryParams
    });
  }
}