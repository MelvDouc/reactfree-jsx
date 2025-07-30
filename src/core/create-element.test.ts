import { describe, it, expect } from "vitest";
import createElement from "$src/core/create-element.js";

describe("Input component", () => {
  it("renders correctly", () => {
    const input = createElement("input", { name: "name-of-input", required: true });
    expect(input).toBeInstanceOf(HTMLInputElement);
    expect((input as HTMLInputElement).name).toBe("name-of-input");
    expect((input as HTMLInputElement).required).to.be.true;
  });
});