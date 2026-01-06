export default class WebStore<T extends Exclude<JsonValue, null>> {
  private readonly storage: Storage;
  private readonly key: string;
  public readonly getDefault: () => T;

  public constructor(storage: Storage, key: string, getDefault: () => T) {
    this.storage = storage;
    this.key = key;
    this.getDefault = getDefault;
  }

  public getData(): T {
    const savedData = this.storage.getItem(this.key);
    return savedData === null ? this.getDefault() : JSON.parse(savedData);
  }

  public setData(data: T): void {
    this.storage.setItem(this.key, JSON.stringify(data));
  }

  public updateData(updater: (prevDate: T) => T): void {
    this.setData(updater(this.getData()));
  }
}

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue; };