⚠️ **IMPORTANT** Use vite 3.1.0 or below.

# React-free JSX

A package to use JSX and TSX with the full power of Vanilla JS minus the constraints of React.

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

To have ambient types available, add a types.d.ts file to your project containing:

```typescript
/// <reference path="reactfree-jsx" />
```
