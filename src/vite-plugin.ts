export function reactfreePlugin() {
  return {
    name: "vite-plugin-reactfree-jsx",
    config: () => {
      return {
        esbuild: {
          jsxFactory: "createElement",
          jsxFragment: "Fragment",
          jsxInject: `import { createElement, Fragment } from "reactfree-jsx";`
        }
      };
    }
  };
}