class Ref<T extends Node> {
  public value: T | null;

  public constructor(value: T | null) {
    this.value = value;
  }
}

function createRef<T extends Node>(value: T | null = null): Ref<T> {
  return new Ref(value);
}

export {
  createRef,
  type Ref
};