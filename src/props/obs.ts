import { Observable, type OptionalObs } from "melv_observable";

function obs<T>(initialValue?: T): Obs<T> {
  return new Observable(initialValue);
}

type Obs<T> = Observable<T>;

export {
  obs as default,
  Observable,
  type Obs,
  type OptionalObs
};