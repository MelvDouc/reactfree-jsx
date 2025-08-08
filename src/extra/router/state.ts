import type { JsonValue } from "$src/extra/router/types.js";

export function stringifyState(state: JsonValue): string {
  try {
    return JSON.stringify(state);
  } catch {
    throw new Error("State must be serializable.");
  }
}

/**
 * Retrieve serializable data saved in the global `history` object.
 */
export function getState(): JsonValue {
  try {
    const state = history.state;
    return typeof state === "string"
      ? JSON.parse(state)
      : state;
  } catch {
    return null;
  }
}