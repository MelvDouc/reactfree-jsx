# React-free JSX

A package to use JSX and TSX with the full power of Vanilla JS minus the
constraints of React. It is meant to be installed in a Vite project.

## Getting Started

### Initialize a project

Type in a name for your project and choose "Vanilla" with TypeScript preferably.

```bash
npm init vite
npm i reactfree-jsx
```

### vite.config.ts

Create a `vite.config.ts` file in the app's route directory to tell Vite how to compile JSX.

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: "import {h, Fragment} from 'reactfree-jsx';",
  },
});
```

### tsconfig.json

```json
{
  "compilerOptions": {
    "jsx": "preserve"
  }
}
```

### JSX Namespace

Add ambient JSX namespace declaration.

```typescript
// main.ts
import "reactfree-jsx";
```

### src/App.tsx

Create an `App.tsx` file in the `src` folder. It may look something like this:

```tsx
export default function App() {
  return <div>This is what JSX looks like.</div>;
}

// src/main.ts
import App from "./App.jsx";

document.body.appendChild(App());
```

Run `npm run dev` to see your application in a browser.

## Components

```tsx
function Counter({ initialCount }: {
  initialCount: number;
}) {
  return (
    <div>
      <p className="count">Count: {initialCount}</p>
    </div>
  );
}

// Calling the component function
<Counter initialCount={0} />;
```

## Reactive values

An `obs` function is provided to work with reactive values.

```tsx
import { obs } from "reactfree-jsx";

function Counter({ initialCount }: {
  initialCount: number;
}) {
  const count = obs(initialCount);

  return (
    <div>
      <!-- The text node will be updated automatically
      when the value of `count` changes. -->
      <p className="count">Count: {count}</p>
      <button onclick={() => count.value++}>+</button>
      <button onclick={() => count.value--}>-</button>
    </div>
  );
}
```

## Props

Elements props can be reactive. An attribute's value will
thus be mapped on to the value of an observable.

```tsx
const hidden = obs(true);
const toggleHidden = () => {
  hidden.value = !hidden.value;
};

return (
  <>
    <button onclick={toggleHidden}>Toggle</button>
    <p hidden={hidden}>Hidden text</p>
  </>
);
```

### CSS Classes

An element's class list can be reactive.

```tsx
const isGradient = obs(true);

<div
  className={{
    "bg-primary": true,
    "bg-gradient": isGradient
  }}
></div>;
```

An element's `style` property accepts both static and dynamic values.

```tsx
const divStyle = {
  color: "white",
  backgroundColor: isRedBackground.map((value) => value ? "red" : "blue"),
};

<div style={divStyle}></div>;
```

Elements also have a unique `$init` prop whose value is a function which takes
in the current element and will be run after the element is created and all its
other props have been added.

```tsx
<div
  $init={(element) => {
    console.log(
      "I can interact with this element using normal JS inside this function.",
    );
  }}
>
</div>;
```
