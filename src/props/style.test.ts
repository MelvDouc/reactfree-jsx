import { describe, it, expect } from "vitest";
import obs from "$src/props/obs.js";
import { applyStyle } from "$src/props/style.js";

describe("applyStyle", () => {
  it("should work with strings", () => {
    const element = document.createElement("div");
    applyStyle(element, { color: "red" });
    expect(element.style.color).toBe("red");
  });

  it("should work with observables", () => {
    const element = document.createElement("div");
    const colorObs = obs("red");
    applyStyle(element, { color: colorObs });
    expect(element.style.color).toBe("red");
    colorObs.value = "blue";
    expect(element.style.color).toBe("blue");
  });
});