import RouterOutlet from "$src/extra/router/RouterOutlet.js";
import type { JsonValue } from "$src/extra/router/types.js";
import { jsx } from "$src/jsx-runtime/mod.js";

/**
 * An `HTMLAnchorElement` for navigation between pages.
 * The `state` enables passing data to the next page.
 */
export default function Link({ href, state = "", ...props }: {
  href: string;
  state?: JsonValue;
} & Omit<JSX.IntrinsicElements["a"], "href" | "on:click">) {
  const url = new URL(href, location.origin);

  const handleClick = (e: Event): void => {
    e.preventDefault();
    RouterOutlet.getInstance()?.emitNavRequest(url, state, true);
  };

  return jsx("a", { ...props, href, "on:click": handleClick });
}