⚠️ **IMPORTANT** Use vite@3.2.5 or below.

# React-free JSX

A package to use JSX and TSX with the full power of Vanilla JS minus the constraints of React. It is meant to be installed in a Vite project.

## JSX

```tsx
function Counter() {
  const count = new Observable(0);

  return (
    <div>
      <p innerText={count}></p>
      <button onclick={() => count.value++}>+</button>
      <button onclick={() => count.value--}>-</button>
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

To have ambient types available, add the following to your vite-end.d.ts file:

```typescript
/// <reference path="reactfree-jsx" />
```
