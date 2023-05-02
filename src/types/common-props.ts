export interface Alt {
  alt: string;
}

export interface AutoComplete {
  autocomplete: string;
}

export interface Dimensions {
  height: number | string;
  width: number | string;
}

export interface Disableable {
  disabled: boolean;
}

export interface Href {
  href: string;
}

export interface Media {
  media: string;
}

export interface MinMax {
  min: number | string;
  max: number | string;
}

export interface Rel {
  rel: string;
}

export interface Sourced {
  src: string;
}

export interface WithReferrerPolicy {
  referrerPolicy: string;
}

export interface Targeter {
  target: string;
}

export interface Typed {
  type: string;
}

export type Valued<WithDefault = false> = {
  value: string | number;
  defaultValue: WithDefault extends true ? (string | number) : never;
};