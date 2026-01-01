import RouterOutlet, { type RouterProps } from "$src/extra/router/RouterOutlet.js";
import { ROUTE_STACK } from "$src/extra/router/Route.js";
import { PageNotFoundError, RedirectionError } from "$src/extra/router/errors.js";

/**
 * Create an element whose content will automatically update when a new page is visited.
 */
export default function Router({ children, ...props }: Omit<RouterProps, "routes"> & { children: unknown; }): RouterOutlet {
  const routes = [...ROUTE_STACK];
  ROUTE_STACK.length = 0;
  return new RouterOutlet({ routes, ...props });
}

/**
 * Throw an exception indicating that a page could not be found.
 * @param message An explanation of why the page could not be found.
 */
export function pageNotFound(message = ""): never {
  throw new PageNotFoundError(message);
}

/**
 * Throw a redirection exception informing a {@link Router} to render a different page.
 * @param path A URL pathname (including has and search params if needed) to a local page.
 * @param state Data that can be retrieved using `getHistoryState()` on the next page.
 */
export function redirect(path: string, state: unknown = null): never {
  throw new RedirectionError(new URL(path, location.origin), state);
}

/**
 * Emit a navigation request informing a {@link Router} to render a different page.
 * @param path A URL pathname (including has and search params if needed) to a local page.
 * @param state Data that can be retrieved using `getHistoryState()` on the next page.
 */
export function navigate(path: string, state: unknown = null): void {
  RouterOutlet.emitNavRequest(new URL(path, location.origin), state, "push");
}