import type { RouteComponent, ParamRecord } from "$src/extra/router/types.js";

const ROUTE_STACK: InternalRoute[] = [];

class InternalRoute {
  private static pathToPathRegex(path: string): RegExp {
    const source = path.replace(/:(\w+)/g, (_, p) => `(?<${p}>\\w+)`);
    return RegExp(`^${source}$`);
  }

  private readonly pathRegex: RegExp;
  private readonly requiredQueryParamNames: string[];
  public readonly component: RouteComponent;

  public constructor(path: string, query: string[], component: RouteComponent) {
    this.pathRegex = InternalRoute.pathToPathRegex(path);
    this.requiredQueryParamNames = query.filter((item) => !item.endsWith("?"));
    this.component = component;
  }

  public parse(url: URL): ParamRecord | null {
    const matchArray = url.pathname.match(this.pathRegex);

    if (!matchArray)
      return null;

    return this.requiredQueryParamNames.every((name) => url.searchParams.has(name))
      ? (matchArray.groups ?? {})
      : null;
  }
}

/**
 * Define a component to render at a given URL.
 */
function Route<P extends string, Q extends string>({ path, query = [], component }: RouteProps<P, Q>): null {
  const route = new InternalRoute(
    path,
    query,
    component as RouteComponent
  );
  ROUTE_STACK.push(route);

  return null;
}

type RouteProps<Path extends string, Query extends string> = {
  /**
   * A relative URL to a page, e.g. "/", "/home" or "/(home)?" (regex syntax).
   * Dynamic parameters are denoted a by a leading colon: "/profile/:id".
   */
  path: Path;
  /**
   * An array of expected query (search) parameters.
   * Optional parameters are denoted by a trailing question mark, e.g. "redirected?".
   */
  query?: Query[];
  /**
   * The ReactFree-JSX element that will be rendered when the URL of this route is visited.
   */
  component: RouteComponent<InferPathParams<Path> & InferQueryParams<Query>>;
};

type InferPathParams<T extends string> =
  T extends `${infer A}/${infer B}` ? InferPathParams<A> & InferPathParams<B>
  : T extends `/${infer A}` ? InferPathParams<A>
  : T extends `:${infer A}` ? { [K in A]: string }
  : {};

type InferQueryParams<Query extends string> =
  & { [K in Query as K extends `${string}?` ? never : K]: string; }
  & { [K in Query as K extends `${infer S}?` ? S : never]?: string; };

export {
  Route as default,
  InternalRoute as RouteObject,
  ROUTE_STACK
};