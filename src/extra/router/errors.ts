export class PageNotFoundError extends Error { }

export class RedirectionError extends Error {
  public readonly url: URL;
  public readonly state: unknown;

  public constructor(url: URL, state: unknown) {
    super();
    this.url = url;
    this.state = state;
  }
}