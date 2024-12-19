import { describe, it, expect } from "vitest";
import createFragment from "$src/create-element/create-fragment.js";

describe("Fragment component", () => {
  it("renders correctly", () => {
    const fragment = createFragment({ children: [] });
    expect(fragment).toBeInstanceOf(DocumentFragment);
  });

  it("contains children elements", () => {
    const fragment = createFragment({
      children: ["child1", document.createElement("div")]
    });
    expect(fragment.childNodes).toHaveLength(2);
  });
});