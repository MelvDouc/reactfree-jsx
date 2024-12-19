import { Observable } from "$src/deps.js";

export default function obs<T>(value?: T) {
  return new Observable(value);
}