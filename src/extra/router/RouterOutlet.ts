import { applyChild } from "$src/core/props/children.js";
import { PageNotFoundError, RedirectionError } from "$src/extra/router/errors.js";
import { RouteObject } from "$src/extra/router/Route.js";
import RouterContext from "$src/extra/router/RouterContext.js";
import TypedEventEmitter, { type Listener } from "$src/extra/TypedEventEmitter.js";

export default class RouterOutlet extends HTMLElement {
  private static instance: RouterOutlet | null = null;

  public static emitNavRequest(url: URL, state: unknown, stateAction: StateAction): void {
    this.instance?.emitNavRequest(url, state, stateAction);
  }

  private static updateHistory(url: URL, state: unknown, stateAction: StateAction): void {
    switch (stateAction) {
      case "replace":
        history.replaceState(state, "", url);
        break;
      case "push":
        history.pushState(state, "", url);
    }
  }

  static {
    customElements.define("router-outlet", this);
  }

  private readonly routes: RouteObject[];
  private readonly eventEmitter: TypedEventEmitter<RouterOutletEvents>;
  private readonly contextCache = new Map<string, RouterContext>();
  private readonly defaultComponent: (err: PageNotFoundError) => JSX.Element | Promise<JSX.Element>;

  public constructor({ routes, defaultComponent, onNavStarted, onNavComplete }: RouterProps) {
    super();
    RouterOutlet.instance = this;
    this.routes = routes;
    this.defaultComponent = defaultComponent;
    this.eventEmitter = new TypedEventEmitter();

    onNavStarted && this.onNavStarted(onNavStarted);
    onNavComplete && this.onNavComplete(onNavComplete);
  }

  async connectedCallback(): Promise<void> {
    this.onNavRequest(async (url, state, stateAction) => {
      await this.handleNavRequest(url, state, stateAction);
    });

    window.addEventListener("popstate", () => {
      this.emitNavRequest(new URL(location.toString()), null, "none");
    });

    this.style.display = "contents";
    this.emitNavRequest(new URL(location.toString()), null, "none");
  }

  private emitNavRequest(url: URL, state: unknown, stateAction: StateAction): void {
    this.eventEmitter.emit("navRequest", url, state, stateAction);
  }

  private onNavRequest(listener: Listener<RouterOutletEvents, "navRequest">): VoidFunction {
    return this.eventEmitter.on("navRequest", listener);
  }

  private onNavStarted(listener: Listener<RouterOutletEvents, "navStarted">): VoidFunction {
    return this.eventEmitter.on("navStarted", listener);
  }

  private onNavComplete(listener: Listener<RouterOutletEvents, "navComplete">): VoidFunction {
    return this.eventEmitter.on("navComplete", listener);
  }

  private async handleNavRequest(url: URL, state: unknown, stateAction: StateAction): Promise<void> {
    try {
      const ctx = this.findContext(url);

      if (!ctx)
        throw new PageNotFoundError();

      this.eventEmitter.emit("navStarted", ctx);

      RouterOutlet.updateHistory(url, state, stateAction);
      this.updateChildren(await ctx.element());

      this.eventEmitter.emit("navComplete", url);
    } catch (error) {
      if (error instanceof RedirectionError) {
        await this.handleNavRequest(error.url, error.state, "replace");
        return;
      }

      if (error instanceof PageNotFoundError) {
        this.updateChildren(await this.defaultComponent(error));
        this.eventEmitter.emit("navComplete", url);
      }
    }
  }

  private findContext(url: URL): RouterContext | null {
    const key = url.href;

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

  private updateChildren(element: JSX.Element): void {
    this.replaceChildren();
    applyChild(this, element);
  }
}

type StateAction = "replace" | "push" | "none";

type RouterOutletEvents = {
  navRequest: [url: URL, state: unknown, stateAction: StateAction];
  navStarted: [ctx: RouterContext];
  navComplete: [url: URL];
};

export type RouterProps = {
  routes: RouteObject[];
  /**
   * Define which component to render when a page isn't found.
   * @param err An error containing the URL and state of the route that wasn't found.
   */
  defaultComponent: (err: PageNotFoundError) => JSX.Element | Promise<JSX.Element>;
  onNavStarted?: Listener<RouterOutletEvents, "navStarted">;
  onNavComplete?: Listener<RouterOutletEvents, "navComplete">;
};