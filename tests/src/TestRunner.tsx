import Counter from "./Counter.tsx";

export default class TestRunner extends HTMLElement {
  private readonly testMap = new Map<string, TestFn>();

  connectedCallback() {
    this.addTest("counter", (root) => {
      const counter: HTMLElement = (
        <Counter />
      );
      root.appendChild(counter);
    });
    this.runTests();
  }

  private addTest(name: string, testFn: TestFn) {
    this.testMap.set(name, testFn);
    return this;
  }

  private runTests() {
    const shadowRoot = this.attachShadow({ mode: "open" });
    for (const [name, testFn] of this.testMap) {
      try {
        testFn(shadowRoot);
        shadowRoot.innerHTML += `<div style="color: green">${name} passed</div>`;
      } catch (error) {
        shadowRoot.innerHTML += `<div style="color: red">${name} failed: ${error}</div>`;
      }
    }
  }
}

type TestFn = (root: ShadowRoot) => unknown;