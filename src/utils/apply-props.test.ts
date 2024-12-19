import { describe, it, expect } from "vitest";
import applyProps from "$src/utils/apply-props.js";
import obs from "$src/state-management/obs.js";
import createSVG from "$src/create-element/create-svg.js";

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

  it("should handle observables", () => {
    const details = document.createElement("details");
    const openObs = obs(true);
    applyProps(details, { open: openObs });
    expect(details.open).toBe(true);
    openObs.value = false;
    expect(details.open).toBe(false);
  });
});