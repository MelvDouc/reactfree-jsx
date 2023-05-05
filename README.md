# React-free JSX

A package to use JSX and TSX with the full power of Vanilla JS minus the
constraints of React. It is meant to be installed in a Vite project.

## Getting Started

### Initialize a project

```bash
npm init vite
```

Type in a name for your project and choose "Vanilla" with TypeScript preferably.

```bash
cd <project_name>
npm i -D vite@3.2.5 reactfree-jsx
```

⚠️ **IMPORTANT** Use vite@3.2.5 or below.

### vite.config.ts

Create a file with the above name in the app's route directory to tell Vite how
to compile JSX.

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

Add `"jsx": "preserve"` to `compilerOptions`.

### JSX Namespace

A VSCode bug may necessitate adding

```javascript
import("reactfree-jsx");
```

to `src/vite-env.d.ts`. Otherwise it might complain that no
`JSX.IntrinsicElements` interface was found.

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

## Observable

An `Observable` class is provided to work with reactive values.

```tsx
import { Observable } from "reactfree-jsx";

function Counter({ initialCount }: {
  initialCount: number;
}) {
  const count = new Observable(initialCount);

  return (
    <div>
      // The text node will be updated automatically // when the value of
      `count` changes.
      <p className="count">Count: {count}</p>
      <button onclick={() => count.value++}>+</button>
      <button onclick={() => count.value--}>-</button>
    </div>
  );
}
```

## Props

Elements also accept observables as attribute values. An attribute's value will
thus be mapped on to the value of an observable.

```tsx
const hidden = new Observable(true);
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

There are three ways to define an element's CSS classes.

```tsx
const isGradient = new Observable(true);

<div
  className="bg-primary"
  classNames={["bg-primary", "bg-gradient"]}
  classes={{
    "bg-primary": true,
    "bg-gradient": isGradient,
  }}
>
</div>;
```

An element's `style` property accepts both static and dynamic values.

```tsx
<div
  style={{
    color: "white",
    backgroundColor: isRedBackground.map((value) => value ? "red" : "blue"),
  }}
>
</div>;
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

### Boolean attributes

You can watch for the changes on a boolean attribute by using an observable.

```tsx
const openObs = new Observable(false);

// Opening and closing the element will toggle the value of `openObs`.
<details open={openObs}>
  <summary>
    This element is {openObs.map((isOpen) => isOpen ? "open" : "closed")}.
  </summary>
</details>;
```

## Routing

A `Router` class is available in order to link internal paths with components.

```tsx
// src/router.tsx
import { Router } from "reactfree-jsx";

const router = new Router({
  $404Route: {
    title: "Page Not Found",
    component: () => <h1>Page Not Found</h1>,
  },
  pageTitleFormatter: (title) => `${title} | My App`,
});

router
  .addRoute("/", {
    getTitle: () => "Home",
    component: () => (
      <>
        <h1>Hello from home!</h1>
        <router.link to="/profile/user1">
          Go to <em>user1</em>'s profile
        </router.link>
      </>
    ),
  })
  .addRoute("/profile/:username", {
    getTitle: ({ username }) => `${username}'s Profile`,
    component: ({ username }) => <h1>{username}'s Profile</h1>,
  });

export default router;

// src/App.tsx
import router from "./router.tsx";

export default function App() {
  const app = (
    <div
      $init={(element) => {
        router.onUrlChange(async ({ component }) => {
          element.replaceChildren(await component());
        });
      }}
    >
    </div>
  );

  router.updateUrl(location.pathname);
  return app;
}
```
