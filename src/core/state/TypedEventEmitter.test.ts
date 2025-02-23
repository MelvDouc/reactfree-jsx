import { describe, it, expect } from "vitest";
import TypedEventEmitter from "$src/core/state/TypedEventEmitter.js";

describe("TypedEventEmitter", () => {
  it("should emit events", () => {
    const emitter = new TypedEventEmitter<{
      foo: [string];
    }>();

    let value = "";
    emitter.on("foo", (arg) => {
      value = arg;
    });
    emitter.emit("foo", "newValue");
    expect(value).toBe("newValue");
  });

  it("should remove listeners", () => {
    const emitter = new TypedEventEmitter<{
      foo: [];
    }>();

    let count = 0;
    const removeListener = emitter.on("foo", () => {
      count++;
    });

    for (let i = 0; i < 5; i++)
      emitter.emit("foo");

    removeListener();
    expect(count).toBe(5);
    emitter.emit("foo");
    expect(count).toBe(5);
  });
});