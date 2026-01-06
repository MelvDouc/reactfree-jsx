# React-free JSX

A package to use JSX and TSX with the full power of Vanilla JS minus the constraints of React.

## Setup

tsconfig.json:

```json
{
  "jsx": "react-jsx",
  "jsxImportSource": "reactfree-jsx"
}
```

## Components

```tsx
// App.tsx
export default function App() {
  return (
    <div>This is what JSX looks like.</div>
  );
}

// main.ts
import App from "./App.jsx";

document.body.appendChild(App());
```

### Counter example

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

### Reactive values

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
      <button on:click={() => count.value++}>+</button>
      <button on:click={() => count.value--}>-</button>
    </div>
  );
}
```

### Props

Elements props can be reactive. An attribute's value will thus be mapped on to the value of an observable.

```tsx
const hidden = obs(true);
const toggleHidden = () => {
  hidden.value = !hidden.value;
};

return (
  <>
    <button on:click={toggleHidden}>Toggle</button>
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

### The `$init` prop

Elements also have a unique `$init` prop whose value is a function which takes in the current element and will be run after the element is created and all its other props have been added.

```tsx
const initDiv = (element: HTMLElement): void => {
  console.log(element);
};

<div $init={initDiv}></div>;
```

### The `$ref` prop

It's possible to refer to an element indirectly using the utility function `createRef`.

```tsx
import { createRef } from "reactfree-jsx";

const ref = createRef<HTMLDivElement>();

const toggleActive = (): void => {
  ref?.value?.classList.toggle("active");
};

<div className="active" $ref={ref}>
  <button on:click={toggleActive}>Toggle active</button>
</div>
```

## Extras

### TypedEventEmitter

An alternative to the native `EventTarget` class. Allows emitting and listening to events with typed parameters.

```ts
import { TypedEventEmitter } from "reactfree-jsx/extra";

const emitter = new TypedEventEmitter<{
  start: [date: Date];
  end: [];
}>();

emitter.on("start", (date) => {
  console.log(`start date = ${date}`);
});

emitter.emit("start", new Date());
```

### WebStore

Handle `localStorage` and `sessionStorage` with the benefit of type safety.

```ts
import { WebStore } from "reactfree-jsx/extra";

const store = new WebStore(localStorage, "todos", () => []);

const todos = store.getData();
store.setData([ { id: 1, task: "Finish writing docs." } ]);
```

### Router

```tsx
import { Router, Route } from "reactfree-jsx/extra/router";

<Router>
  <Route path="/(home)?" component={HomePage} />
  <Route path="/profile/:id" component={ProfilePage} />
</Router>
```

ProfilePage.tsx:

```tsx
export default function ProfilePage({ id }: {
  id: string; // must match route path
}) {
  return (
    <div>Profile id: {id}</div>
  );
}
```
