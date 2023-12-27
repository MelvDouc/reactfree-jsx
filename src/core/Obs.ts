import { Observable as Obs } from "melv_observable";

function obs<T>(value?: T) {
  return new Obs(value);
}

export {
  Obs,
  obs
};
