import { describe, it, expect } from "vitest";
import createSVG from "$src/core/create-svg.js";
import obs from "$src/core/state/obs.js";
import { applyProps } from "$src/core/props/props.js";

describe("applyProps", () => {
  it("should handle simple props", () => {
    const element = document.createElement("div");
    applyProps(element, { id: "test", tabIndex: 2 });
    expect(element.id).toBe("test");
    expect(element.tabIndex).toBe(2);
  });

  it("should handle readonly props", () => {
    const input = document.createElement("input");
    const datalist = document.createElement("datalist");
    datalist.id = "dl";
    applyProps(input, { list: datalist.id });
    expect(input.getAttribute("list")).toBe(datalist.id);
  });

  it("should handle readonly props (SVG)", () => {
    const svg = createSVG("svg");
    const viewBox = "0 0 100 100";
    applyProps(svg, { viewBox });
    expect(svg.hasAttribute("viewBox")).toBe(true);
    expect(svg.getAttribute("viewBox")).toBe(viewBox);
  });

  it("should handle event listeners", () => {
    const element = document.createElement("div");
    let count = 0;

    applyProps(element, {
      "on:click": () => { count++; }
    });

    for (let i = 0; i < 5; i++)
      element.click();

    expect(count).to.eq(5);
  });

  it("should handle observables", () => {
    const details = document.createElement("details");
    const openObs = obs(true);
    applyProps(details, { open: openObs });
    expect(details.open).toBe(true);
    openObs.value = false;
    expect(details.open).toBe(false);
  });
});