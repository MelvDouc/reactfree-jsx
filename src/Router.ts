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
    this.onUrlChange(({ title }) => document.title = title);
  }

  public addRoute(dynamicPath: string, route: Route): this {
    dynamicPath = dynamicPath.replace(/:([^\/]+)/g, (_, param) => `(?<${param}>[^\/]+)`);
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

  /**
   * Create an anchor that will navigate to an internal URL without reloading the page.
   */
  public link = (props: Omit<FreeJSX.Props<"a">, "href"> & { to: string; children?: FreeJSX.ComponentChild[]; }): HTMLAnchorElement => {
    const { children, to, ...otherProps } = props;
    const anchor = h("a", otherProps, ...(children ?? []));
    anchor.href = to;
    anchor.onclick = (e) => {
      e.preventDefault();
      this.navigate(to);
    };
    return anchor;
  };
}

interface Route<Params extends Record<string, string> = any> {
  /**
   * @returns An optionally dynamic page title based on path parameters.
   */
  getPageTitle: (params: Params) => string;
  component: (params: Params) => string | Node | Promise<string | Node>;
}

type RouteInfo = {
  title: string;
  component: () => string | Node | Promise<string | Node>;
};