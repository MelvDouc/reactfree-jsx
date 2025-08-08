import { applyChild } from "$src/core/props/children.js";
import { PageNotFoundError, RedirectionError } from "$src/extra/router/errors.js";
import { RouteObject } from "$src/extra/router/Route.js";
import RouterContext from "$src/extra/router/RouterContext.js";
import { stringifyState } from "$src/extra/router/state.js";
import type { JsonValue } from "$src/extra/router/types.js";
import TypedEventEmitter, { type Listener } from "$src/extra/TypedEventEmitter.js";

export default class RouterOutlet extends HTMLElement {
  public static instance: RouterOutlet | null = null;

  static {
    customElements.define("router-outlet", this);
  }

  private readonly routes: RouteObject[];
  private readonly eventEmitter: TypedEventEmitter<RouterOutletEvents>;
  private readonly contextCache = new Map<string, RouterContext>();

  public constructor({ routes, $init }: RouterProps) {
    super();
    RouterOutlet.instance = this;
    this.routes = routes;
    this.eventEmitter = new TypedEventEmitter();
    $init?.({
      onNavRequest: this.onNavRequest.bind(this),
      onNavStarted: this.onNavStarted.bind(this),
      onNavComplete: this.onNavComplete.bind(this),
      onPageNotFound: this.onPageNotFound.bind(this),
      updateChildren: this.updateChildren.bind(this),
    });
  }

  async connectedCallback(): Promise<void> {
    this.onNavRequest(async (url, state, pushState) => {
      await this.handleNavRequest(url, state, pushState);
    });

    window.addEventListener("popstate", () => {
      this.emitNavRequest(new URL(location.toString()), "", false);
    });

    this.style.display = "contents";
    this.emitNavRequest(new URL(location.toString()), "", false);
  }

  public onNavRequest(listener: Listener<RouterOutletEvents, "navRequest">): VoidFunction {
    return this.eventEmitter.on("navRequest", listener);
  }

  public emitNavRequest(url: URL, state: JsonValue, pushState: boolean): void {
    this.eventEmitter.emit("navRequest", url, state, pushState);
  }

  public onNavStarted(listener: Listener<RouterOutletEvents, "navStarted">): VoidFunction {
    return this.eventEmitter.on("navStarted", listener);
  }

  public onNavComplete(listener: Listener<RouterOutletEvents, "navComplete">): VoidFunction {
    return this.eventEmitter.on("navComplete", listener);
  }

  public onPageNotFound(listener: Listener<RouterOutletEvents, "pageNotFound">): VoidFunction {
    return this.eventEmitter.on("pageNotFound", listener);
  }

  public updateChildren(element: unknown): void {
    this.replaceChildren();
    applyChild(this, element);
  }

  private async handleNavRequest(url: URL, state: JsonValue, pushState: boolean): Promise<void> {
    try {
      const ctx = this.findContext(url);

      if (!ctx)
        throw new PageNotFoundError();

      this.eventEmitter.emit("navStarted", ctx);

      pushState && history.pushState(stringifyState(state), "", url);
      const element = await ctx.component({
        params: ctx.pathParams,
        query: Object.fromEntries(ctx.url.searchParams)
      });
      this.updateChildren(element);

      this.eventEmitter.emit("navComplete", ctx);
    } catch (error) {
      if (error instanceof RedirectionError) {
        history.replaceState(stringifyState(error.state), "", error.url);
        await this.handleNavRequest(error.url, error.state, false);
        return;
      }

      if (error instanceof PageNotFoundError)
        this.eventEmitter.emit("pageNotFound", error);
    }
  }

  private findContext(url: URL): RouterContext | null {
    const key = url.toString();

    if (this.contextCache.has(key))
      return this.contextCache.get(key) as RouterContext;

    for (const route of this.routes) {
      const pathParams = route.parse(url);

      if (pathParams) {
        const ctx = new RouterContext(url, pathParams, route.component);
        this.contextCache.set(key, ctx);
        return ctx;
      }
    }

    return null;
  }
}

export function getRouterInstance(): RouterOutlet | null {
  return RouterOutlet.instance;
}

type RouterOutletEvents = {
  navRequest: [url: URL, state: JsonValue, pushState: boolean];
  navStarted: [ctx: RouterContext];
  navComplete: [ctx: RouterContext];
  pageNotFound: [err: PageNotFoundError];
};

export type PublicRouter = Pick<RouterOutlet, "onNavRequest" | "onNavStarted" | "onNavComplete" | "onPageNotFound" | "updateChildren">;

export type RouterProps = {
  routes: RouteObject[];
  $init?: (router: PublicRouter) => unknown;
};