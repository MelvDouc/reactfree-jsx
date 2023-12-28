import Counter from "./Counter.tsx";

const assert = (value: unknown, message?: string) => {
  if (!value)
    throw new Error(message ?? "Assertion failed,");
};

const tests = (() => {
  const testMap = new Map<string, () => unknown>();

  const tester = {
    add: (name: string, test: () => unknown) => {
      testMap.set(name, test);
      return tester;
    },
    run: () => {
      for (const [name, test] of testMap) {
        try {
          test();
          console.log(`%c${name} passed`, "color: green");
        } catch (error) {
          console.log(`%c${name} failed: ${error}`, "color: red");
        }
      }
    }
  };
  return tester;
})();;

tests
  .add("counter", () => {
    const counter: HTMLElement = (
      <Counter />
    );
    // document.body.appendChild(counter);
    // const p = counter.querySelector("p");
    // const button = counter.querySelector("button");
    // assert(p?.innerText === "Count: 0");
    // assert(button);
    // button!.click();
    // assert(p?.innerText === "Count: 1");
  })
  .run();