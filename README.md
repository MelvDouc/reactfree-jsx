/!\ IMPORTANT: Use vite 3.1.0 or below.

# React-free JSX

A package to use JSX and TSX with the full power of Vanilla JS minus the
constraints of React.

## JSX

```tsx
function Counter({ initialCount }: { initialCount: number }) {
  const count = new Observable(initialCount);

  return (
    <div>
      <p innerText={count}></p>
      <button onclick={() => count.value++}>+</button>
    </div>
  );
}
```

## vite.config.js

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: "import {h, Fragment} from 'reactfree-jsx'",
  },
});
```

## types.d.ts

A VS Code bug appears to make it so that it doesn't recognize the JSX namespace
but it can be fixed by having a types file containing:

```javascript
import("reactfree-jsx");
```
