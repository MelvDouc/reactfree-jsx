import { describe, it, expect } from "vitest";
import { applyClasses } from "$src/core/props/classes.js";
import obs from "$src/core/state/obs.js";

describe("applyClasses", () => {
  it("should work with strings", () => {
    const element = document.createElement("div");
    applyClasses(element, "class1 class2");
    expect(element.className).toBe("class1 class2");
  });

  it("should work with observables", () => {
    const element = document.createElement("div");
    const boolObs = obs(true);
    applyClasses(element, {
      class1: boolObs,
      class2: true
    });
    expect(element.className).toBe("class1 class2");
    boolObs.value = false;
    expect(element.className).toBe("class2");
  });
});