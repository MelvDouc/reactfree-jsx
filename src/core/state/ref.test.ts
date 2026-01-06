import { test, expect } from "vitest";
import createElement from "$src/core/create-element.js";
import { createRef } from "$src/core/state/ref.js";

test("ref", () => {
  const ref = createRef<HTMLDivElement>();

  const button = createElement("button", {
    "on:click": () => {
      ref?.value?.classList.remove("cls");
    }
  });
  const element = createElement(
    "div",
    { className: "cls", $ref: ref },
    button
  );

  expect(button).to.be.instanceOf(HTMLButtonElement);
  (button as HTMLButtonElement).click();
  expect((element as HTMLElement).classList.contains("cls")).to.be.false;
});