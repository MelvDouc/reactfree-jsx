# React-free JSX

A package to use JSX and TSX with the full power of Vanilla JS minus the
constraints of React.

## vite.config.js

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "",
    jsxInject: "import {h} from 'reactfree-jsx'",
  },
});
```

## types.d.ts

A VS Code bug appears to make it so that it doesn't recognize the JSX namespace
but it can be fixed by having a types file containing:

```javascript
import("reactfree-jsx");
```
