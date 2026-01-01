import RouterOutlet from "$src/extra/router/RouterOutlet.js";
import { jsx } from "$src/jsx-runtime/mod.js";

/**
 * An `HTMLAnchorElement` for navigation between pages.
 * The `state` enables passing data to the next page.
 */
export default function Link({ href, state = null, ...props }: {
  href: string;
  state?: unknown;
} & Omit<JSX.IntrinsicElements["a"], "href" | "on:click">) {
  const url = new URL(href, location.origin);

  const handleClick = (e: KeyboardEvent): void => {
    if (e.ctrlKey)
      return;

    e.preventDefault();
    RouterOutlet.emitNavRequest(url, state, "push");
  };

  return jsx("a", { ...props, href, "on:click": handleClick });
}