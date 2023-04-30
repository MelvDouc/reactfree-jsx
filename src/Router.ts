import Observable from "./Observable.js";
import { h } from "./h.js";
import { FreeJSX } from "./types/index.js";

export default class Router {
  private readonly $404Route: RouteInfo;
  private readonly routes: (Route<any> & { regex: RegExp; })[];
  private readonly routeInfoObs: Observable<RouteInfo>;
  private readonly pageTitleFormatter: (title: string) => string;

  constructor({ pageTitleFormatter, $404Route }: {
    pageTitleFormatter: (title: string) => string;
    $404Route: RouteInfo;
  }) {
    this.routes = [];
    this.routeInfoObs = new Observable();
    this.pageTitleFormatter = pageTitleFormatter;
    this.$404Route = $404Route;
    window.addEventListener("popstate", () => this.updateUrl(location.pathname));
  }

  public addRoute<Path extends string>(dynamicPath: Path, route: Route<Path>): this {
    dynamicPath = dynamicPath.replace(/:([^\/]+)/g, (_, param) => `(?<${param}>[^\/]+)`) as Path;
    this.routes.push({
      regex: RegExp(`^${dynamicPath}\$`),
      ...route as any
    });
    return this;
  }

  public navigate(url: string): void {
    history.pushState({}, "", url);
    this.updateUrl(url);
  }

  public updateUrl(url: string): void {
    const route = this.routes.find(({ regex }) => regex.test(url));

    if (!route) {
      this.routeInfoObs.value = this.$404Route;
      return;
    }

    const params = url.match(route.regex)?.groups ?? {};
    this.routeInfoObs.value = {
      title: this.pageTitleFormatter(route.getPageTitle(params)),
      component: () => route.component(params)
    };
  }

  public onUrlChange(subscription: (routeInfo: RouteInfo) => any): void {
    this.routeInfoObs.subscribe(subscription);
  }

  public link(props: Omit<FreeJSX.Props<"a">, "href"> & { to: string; children?: FreeJSX.ComponentChild[]; }): HTMLAnchorElement {
    const { children, to, ...otherProps } = props;
    const anchor = h("a", otherProps, ...(children ?? []));
    anchor.href = to;
    anchor.onclick = (e) => {
      e.preventDefault();
      this.navigate(to);
    };
    return anchor;
  }
}

export interface Route<Path extends string> {
  getPageTitle: (params: RouteParams<Path>) => string;
  component: (params: RouteParams<Path>) => string | Node | Promise<string | Node>;
}

export type RouteInfo = {
  title: string;
  component: () => string | Node | Promise<string | Node>;
};

type RouteParams<Path extends string> =
  Path extends `${string}/:${infer Param}/${infer Rest}` ? { [k in Param | keyof RouteParams<Rest>]: string }
  : Path extends `:${infer Param}/${infer Rest}` ? { [k in Param | keyof RouteParams<Rest>]: string }
  : Path extends `${string}/:${infer Param}` ? { [k in Param]: string }
  : Path extends `:${infer Param}` ? { [k in Param]: string }
  : never;