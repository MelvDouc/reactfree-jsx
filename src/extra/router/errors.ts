import type { JsonValue } from "$src/extra/router/types.js";

export class PageNotFoundError extends Error { }

export class RedirectionError extends Error {
  public readonly url: URL;
  public readonly state: JsonValue;

  public constructor(url: URL, state: JsonValue) {
    super();
    this.url = url;
    this.state = state;
  }
}