import { CommonProps } from "@/typings/props/Props.js";

export interface BaseProps extends CommonProps {
  href: string;
  target: string;
}

export interface CanvasProps extends CommonProps {
  height: number;
  width: number;
}

export interface DataProps extends CommonProps {
  value: string;
}

export interface DetailsProps extends CommonProps {
  open: boolean;
}

export interface DialogProps extends CommonProps {
  open: boolean;
  returnValue: string;
}

export interface EmbedProps extends CommonProps {
  height: number;
  src: string;
  type: string;
  width: number;
}

export interface IFrameProps extends CommonProps {
  allow: string;
  allowFullscreen: boolean;
  frameBorder: string;
  height: string;
  loading: string;
  longDesc: string;
  marginHeight: string;
  marginWidth: string;
  name: string;
  referrerPolicy: ReferrerPolicy;
  scrolling: string;
  src: string;
  srcdoc: string;
  width: string;
}

export interface ImageProps extends CommonProps {
  alt: string;
  border: string;
  crossOrigin: string | null;
  decoding: "async" | "sync" | "auto";
  height: number;
  isMap: boolean;
  loading: "eager" | "lazy";
  referrerPolicy: string;
  sizes: string;
  src: string;
  srcset: string;
  useMap: string;
  width: number;
}

export interface LinkProps extends CommonProps {
  as: string;
  crossOrigin: string | null;
  disabled: boolean;
  href: string;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
  referrerPolicy: string;
  rel: string;
  rev: string;
  target: string;
  type: string;
}

export interface MapProps extends CommonProps {
  name: string;
}

export interface MetaProps extends CommonProps {
  content: string;
  httpEquiv: string;
  media: string;
  name: string;
}

export interface MeterProps extends CommonProps {
  high: number;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;
}

export interface ModProps extends CommonProps {
  cite: string;
  dateTime: string;
}

export interface ObjectProps extends CommonProps {
  data: string;
  height: string;
  name: string;
  standby: string;
  type: string;
  useMap: string;
  vspace: number;
  width: string;
}

export interface OutputProps extends CommonProps {
  defaultValue: string;
  name: string;
  value: string;
}

export interface QuoteProps extends CommonProps {
  cite: string;
}

export interface ScriptProps extends CommonProps {
  async: boolean;
  crossOrigin: string | null;
  defer: boolean;
  integrity: string;
  noModule: boolean;
  referrerPolicy: string;
  src: string;
  type: string;
}

export interface SlotProps extends CommonProps {
  name: string;
}

export interface StyleProps extends CommonProps {
  disabled: boolean;
  media: string;
}

export interface TimeProps extends CommonProps {
  dateTime: string;
}