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
