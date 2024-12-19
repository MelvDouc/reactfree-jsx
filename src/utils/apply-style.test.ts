import { describe, it, expect } from "vitest";
import applyStyle from "$src/utils/apply-style.js";
import obs from "$src/state-management/obs.js";

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