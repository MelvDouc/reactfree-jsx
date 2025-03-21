import { describe, it, expect } from "vitest";
import { applyChild } from "$src/core/props/children.js";
import obs from "$src/core/state/obs.js";

describe("applyChildren", () => {
  it("should work with multidimensional arrays", () => {
    const element = document.createElement("div");
    const children = [
      "a",
      ["b", "c"],
      "d",
      ["e", ["f", "g"]],
      "h"
    ];
    applyChild(element, children);
    expect(element.innerHTML).toBe("abcdefgh");
  });

  it("should work with observables", () => {
    const element = document.createElement("div");
    const numberObs = obs(1);
    const children = [
      "a",
      numberObs.map((n) => {
        return Array.from({ length: n }, () => {
          return document.createElement("span");
        });
      }),
      "c"
    ];
    applyChild(element, children);

    expect(element.childNodes[0]).toBeInstanceOf(Text);
    expect(element.childNodes[1]).toBeInstanceOf(Comment);
    expect(element.childNodes[2]).toBeInstanceOf(HTMLElement);
    expect(element.childNodes[3]).toBeInstanceOf(Comment);
    expect(element.childNodes[element.childNodes.length - 1]).toBeInstanceOf(Text);

    numberObs.value = 5;
    expect(element.childNodes[0]).toBeInstanceOf(Text);
    expect(element.childNodes[1]).toBeInstanceOf(Comment);

    for (let i = 2; i < 2 + 5; i++)
      expect(element.childNodes[i]).toBeInstanceOf(HTMLElement);

    expect(element.childNodes[2 + 5]).toBeInstanceOf(Comment);
    expect(element.childNodes[element.childNodes.length - 1]).toBeInstanceOf(Text);
  });
});