import { Observable as Obs } from "melv_observable";

export function obs<T>(value?: T) {
  return new Obs(value);
}