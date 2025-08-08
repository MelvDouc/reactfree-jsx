import type { RouteComponent, InferPathParams, ParamRecord } from "$src/extra/router/types.js";

const ROUTE_STACK: InternalRoute[] = [];

class InternalRoute {
  private static pathToPathRegex(path: string): RegExp {
    const source = path.replace(/:(\w+)/g, (_, p) => `(?<${p}>\\w+)`);
    return RegExp(`^${source}$`);
  }

  public readonly component: RouteComponent<ParamRecord>;
  private readonly pathRegex: RegExp;
  private readonly queryParams: { name: string; required: boolean; }[];

  public constructor(path: string, component: RouteComponent<ParamRecord>, query: string[]) {
    this.pathRegex = InternalRoute.pathToPathRegex(path);
    this.component = component;
    this.queryParams = query.map((name) => ({ name, required: name.at(-1) !== "?" }));
  }

  public parse(url: URL): ParamRecord | null {
    const matchArray = url.pathname.match(this.pathRegex);

    if (!matchArray)
      return null;

    for (const { name, required } of this.queryParams)
      if (required && !url.searchParams.has(name))
        return null;

    return matchArray.groups ?? {};
  }
}

/**
 * Define a component to render at a given URL.
 */
function Route<T extends string>({ path, component, query = [] }: RouteProps<T>): null {
  const route = new InternalRoute(
    path,
    component as RouteComponent<ParamRecord>,
    query
  );
  ROUTE_STACK.push(route);

  return null;
}

type RouteProps<T extends string> = {
  /**
   * A relative URL to a page, e.g. "/", "/home" or "/(home)?" (regex syntax).
   * Dynamic parameters are denoted a by a leading colon: "/profile/:id".
   */
  path: T;
  /**
   * An array of expected query (search) parameters.
   * Optional parameters are denoted by a trailing question mark, e.g. "redirected?".
   */
  query?: string[];
  /**
   * The ReactFree-JSX element that will be rendered when the URL of this route is visited.
   */
  component: RouteComponent<InferPathParams<T>>;
};

export {
  Route as default,
  InternalRoute as RouteObject,
  ROUTE_STACK
};