import {
  Alt,
  AutoComplete,
  Dimensions,
  Disableable,
  Href,
  MinMax,
  Named,
  Rel,
  Sourced,
  Targeter,
  Valued,
  WithReferrerPolicy,
  WithText
} from "./common-props.js";
import { ExtraProps } from "./props.js";
import { Obs, PossibleObs } from "./Obs.js";

export type { ComponentChild, ComponentChildren, ComponentFactory } from "./children.js";
export type { ExtraProps, Obs, PossibleObs };

type InlineListener = ((this: Element, ev: Event) => any) | null;

export interface FreeJsxElement extends ARIAMixin, Omit<GlobalEventHandlers, "addEventListener" | "removeEventListener"> {
  id: string;
  onfullscreenchange: InlineListener;
  onfullscreenerror: InlineListener;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
  [dataAttribute: `data${string}`]: string;
}

export interface FreeJsxHTMLElement extends FreeJsxElement {
  accessKey: string;
  autocapitalize: string;
  contentEditable: "true" | "false" | "inherit";
  dir: string;
  draggable: boolean;
  enterKeyHint: string;
  hidden: boolean;
  inert: boolean;
  inputMode: string;
  lang: string;
  spellcheck: boolean;
  tabIndex: string | number;
  title: string;
  translate: boolean;
}

export interface Hyperlink extends FreeJsxHTMLElement, Href {
  hash: string;
  host: string;
  hostname: string;
  password: string;
  pathname: string;
  ping: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
}

export interface Citable extends FreeJsxHTMLElement {
  cite: string;
}

export interface Anchor extends Hyperlink, Named, Rel, Targeter, WithReferrerPolicy, WithText {
  download: string;
  hreflang: string;
  type: string;
}

export interface Area extends Hyperlink, Alt, WithReferrerPolicy, Targeter {
  coords: string;
  download: string;
  shape: string;
}

export interface Body extends FreeJsxHTMLElement {
  onafterprint: InlineListener;
  onbeforeprint: InlineListener;
  onbeforeunload: InlineListener;
  onhashchange: InlineListener;
  onlanguagechange: InlineListener;
  onmessage: InlineListener;
  onoffline: InlineListener;
  ononline: InlineListener;
  onpopstate: InlineListener;
  onredo: InlineListener;
  onstorage: InlineListener;
  onundo: InlineListener;
  onunload: InlineListener;
}

export interface Button extends FreeJsxHTMLElement, Disableable, Named, Valued {
  autofocus: boolean;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  type: string;
}

export interface Dialog extends Omit<FreeJsxHTMLElement, "tabIndex"> {
  open: boolean;
  returnValue: string;
}

export interface Form extends FreeJsxHTMLElement, AutoComplete, Named, Targeter {
  acceptCharset: string;
  action: string;
  encoding: string;
  enctype: string;
  method: "get" | "post" | "dialog" | string;
  noValidate: boolean;
}

export interface Iframe extends FreeJsxHTMLElement, Dimensions, Named, Sourced, WithReferrerPolicy {
  allow: string;
  allowfullscreen: boolean;
  scrolling: string;
  srcdoc: string;
}

export interface FreeJsxImage extends FreeJsxHTMLElement, Alt, Dimensions, Sourced, WithReferrerPolicy {
  crossOrigin: string | null;
  decoding: "async" | "sync" | "auto";
  isMap: boolean;
  loading: "eager" | "lazy";
  sizes: string;
}

export interface Input extends
  FreeJsxHTMLElement,
  Alt,
  AutoComplete,
  Dimensions,
  Disableable,
  MinMax,
  Named,
  Sourced,
  Valued {
  accept: string;
  capture: string;
  checked: boolean;
  defaultChecked: boolean;
  defaultValue: string;
  dirName: string;
  files: FileList | null;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  indeterminate: boolean;
  list: string;
  maxLength: number;
  minLength: number;
  multiple: boolean;
  pattern: string;
  placeholder: string;
  required: boolean;
  selectionDirection: "forward" | "backward" | "none" | string | null;
  selectionEnd: number | null;
  selectionStart: number | null;
  size: number;
  step: string;
  type: "button" | "checkbox" | "color" | "date"
  | "datetime-local" | "email" | "file" | "hidden"
  | "image" | "month" | "number" | "password"
  | "radio" | "range" | "reset" | "search"
  | "submit" | "tel" | "text" | "time" | "url" | "week" | string;
  valueAsDate: Date | null;
  valueAsNumber: number;
}

export interface Label extends FreeJsxHTMLElement {
  htmlFor: string;
}

export interface Link extends FreeJsxHTMLElement, Disableable, Href, Rel, Targeter, WithReferrerPolicy {
  as: string;
  crossOrigin: string | null;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
  type: string;
}

export interface MetaElement extends FreeJsxHTMLElement, Named {
  content: string;
  httpEquiv: string;
  media: string;
}

export interface Meter extends FreeJsxHTMLElement, MinMax, Valued {
  high: number;
  low: number;
  optimum: number;
}

export interface ObjectElement extends FreeJsxHTMLElement, Dimensions, Named {
  data: string;
  standby: string;
  type: string;
  useMap: string;
}

export interface Ol extends FreeJsxHTMLElement {
  reversed: boolean;
  start: number;
  type: string;
}

export interface Option extends FreeJsxHTMLElement, Disableable, Valued, WithText {
  defaultSelected: boolean;
  label: string;
  selected: boolean;
}

export interface Output extends FreeJsxHTMLElement, Named, Valued {
  defaultValue: string;
}

export interface Progress extends FreeJsxHTMLElement {
  max: number;
  value: number;
}

export interface Script extends FreeJsxHTMLElement, WithReferrerPolicy, Sourced, WithText {
  async: boolean;
  crossOrigin: string;
  defer: boolean;
  integrity: string;
  noModule: boolean;
  type: string;
}

export interface Select extends FreeJsxHTMLElement, AutoComplete, Disableable, Named, Valued {
  length: number;
  multiple: boolean;
  required: boolean;
  selectedIndex: number;
  size: number;
}

export interface FreeJsxSource extends FreeJsxHTMLElement, Dimensions, Sourced {
  media: string;
  sizes: string;
  srcset: string;
  type: string;
}

export interface StyleElement extends FreeJsxHTMLElement, Disableable {
  media: string;
}

export interface Textarea extends FreeJsxHTMLElement, AutoComplete, Disableable, Named, Valued {
  cols: number;
  defaultValue: string;
  dirName: string;
  maxLength: number;
  minLength: number;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  selectionDirection: "forward" | "backward" | "none" | string;
  selectionEnd: number;
  selectionStart: number;
  wrap: string;
}

export interface Track extends FreeJsxHTMLElement, Sourced {
  default: boolean;
  kind: string;
  label: string;
  srclang: string;
}

export interface TableCell extends FreeJsxHTMLElement {
  abbr: string;
  col: any;
  colgroup: any;
  colSpan: number;
  headers: string;
  height: string;
  row: any;
  rowgroup: any;
  rowSpan: number;
  scope: string;
}

export interface Video extends FreeJsxHTMLElement, Dimensions {
  disablePictureInPicture: boolean;
  onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  playsInline: boolean;
  poster: string;
}

// ===== ===== ===== ===== =====
// FREEJSX_TAG_NAME_MAP
// ===== ===== ===== ===== =====

export interface HTMLElementTagNameMap {
  a: Anchor;
  abbr: FreeJsxHTMLElement;
  address: FreeJsxHTMLElement;
  area: Area;
  article: FreeJsxHTMLElement;
  aside: FreeJsxHTMLElement;
  audio: FreeJsxHTMLElement;
  b: FreeJsxHTMLElement;
  base: FreeJsxHTMLElement & Href;
  bdi: FreeJsxHTMLElement;
  bdo: FreeJsxHTMLElement;
  blockquote: Citable;
  body: Body;
  br: FreeJsxHTMLElement;
  button: Button;
  canvas: FreeJsxHTMLElement & Dimensions;
  caption: FreeJsxHTMLElement;
  cite: FreeJsxHTMLElement;
  code: FreeJsxHTMLElement;
  col: FreeJsxHTMLElement;
  colgroup: FreeJsxHTMLElement;
  data: FreeJsxHTMLElement & Valued;
  datalist: FreeJsxHTMLElement;
  dd: FreeJsxHTMLElement;
  del: Citable;
  details: FreeJsxHTMLElement & { open: boolean; };
  dfn: FreeJsxHTMLElement;
  dialog: Dialog;
  div: FreeJsxHTMLElement;
  dl: FreeJsxHTMLElement;
  dt: FreeJsxHTMLElement;
  em: FreeJsxHTMLElement;
  embed: FreeJsxHTMLElement & Dimensions & Sourced & {
    type: string;
  };
  fieldset: FreeJsxHTMLElement & Disableable & Named;
  figcaption: FreeJsxHTMLElement;
  figure: FreeJsxHTMLElement;
  footer: FreeJsxHTMLElement;
  form: Form;
  h1: FreeJsxHTMLElement;
  h2: FreeJsxHTMLElement;
  h3: FreeJsxHTMLElement;
  h4: FreeJsxHTMLElement;
  h5: FreeJsxHTMLElement;
  h6: FreeJsxHTMLElement;
  head: FreeJsxHTMLElement;
  header: FreeJsxHTMLElement;
  hgroup: FreeJsxHTMLElement;
  hr: FreeJsxHTMLElement;
  html: FreeJsxHTMLElement;
  i: FreeJsxHTMLElement;
  iframe: Iframe;
  img: FreeJsxImage;
  input: Input;
  ins: Citable;
  kbd: FreeJsxHTMLElement;
  label: Label;
  legend: FreeJsxHTMLElement;
  li: FreeJsxHTMLElement & Valued;
  link: Link;
  main: FreeJsxHTMLElement;
  map: FreeJsxHTMLElement & Named;
  mark: FreeJsxHTMLElement;
  menu: FreeJsxHTMLElement;
  meta: MetaElement;
  meter: Meter;
  nav: FreeJsxHTMLElement;
  noscript: FreeJsxHTMLElement;
  object: ObjectElement;
  ol: Ol;
  optgroup: FreeJsxHTMLElement & Disableable & { label: string; };
  option: Option;
  output: Output;
  p: FreeJsxHTMLElement;
  picture: FreeJsxHTMLElement;
  pre: FreeJsxHTMLElement;
  progress: Progress;
  q: Citable;
  rp: FreeJsxHTMLElement;
  rt: FreeJsxHTMLElement;
  ruby: FreeJsxHTMLElement;
  s: FreeJsxHTMLElement;
  samp: FreeJsxHTMLElement;
  script: Script;
  section: FreeJsxHTMLElement;
  select: Select;
  slot: Omit<FreeJsxHTMLElement, "slot"> & Named;
  small: FreeJsxHTMLElement;
  source: FreeJsxSource;
  span: FreeJsxHTMLElement;
  strong: FreeJsxHTMLElement;
  style: StyleElement;
  sub: FreeJsxHTMLElement;
  summary: FreeJsxHTMLElement;
  sup: FreeJsxHTMLElement;
  table: FreeJsxHTMLElement;
  tbody: FreeJsxHTMLElement;
  td: TableCell;
  template: FreeJsxHTMLElement;
  textarea: Textarea;
  tfoot: FreeJsxHTMLElement;
  th: TableCell;
  thead: FreeJsxHTMLElement;
  time: FreeJsxHTMLElement & { dateTime: string; };
  title: FreeJsxHTMLElement & WithText;
  tr: FreeJsxHTMLElement;
  track: Track;
  u: FreeJsxHTMLElement;
  ul: FreeJsxHTMLElement;
  var: FreeJsxHTMLElement;
  video: Video;
  wbr: FreeJsxHTMLElement;
}

// ===== ===== ===== ===== =====
// INTRINSIC ELEMENTS
// ===== ===== ===== ===== =====

export type Props<T extends keyof IntrinsicElementsHTML> = Partial<IntrinsicElementsHTML[T]>;

export type IntrinsicElementsHTML = {
  [K in keyof HTMLElementTagNameMap]: {
    [P in keyof HTMLElementTagNameMap[K]]?: PossibleObs<HTMLElementTagNameMap[K][P]>
  } & Partial<ExtraProps<K>>
};