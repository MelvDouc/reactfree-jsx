import {
  Alt,
  AutoComplete,
  Dimensions,
  Disableable,
  Href,
  MinMax,
  Rel,
  Sourced,
  Targeter,
  Valued,
  WithReferrerPolicy
} from "./common-props.js";
import { ExtraProps } from "./props.js";
import { Obs, PossibleObs } from "./Obs.js";

export type { ComponentChild, ComponentChildren, ComponentFactory } from "./children.js";
export type { ExtraProps, Obs, PossibleObs };

type InlineListener = ((this: Element, ev: Event) => any) | null;

export interface StaticProps extends ARIAMixin, Omit<GlobalEventHandlers, "addEventListener" | "removeEventListener"> {
  id: string;
  onfullscreenchange: InlineListener;
  onfullscreenerror: InlineListener;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
  [dataAttribute: `data${string}`]: string;
}

export interface HTMLStaticProps extends StaticProps {
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

export interface HTMLStaticPropsWithName extends HTMLStaticProps {
  name: string;
}

export interface Hyperlink extends Href, Targeter {
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

export interface Citable extends HTMLStaticProps {
  cite: string;
}

export interface Anchor extends HTMLStaticPropsWithName, Hyperlink, Rel, WithReferrerPolicy {
  download: string;
  hreflang: string;
  type: string;
}

export interface Input extends
  HTMLStaticPropsWithName,
  Alt,
  AutoComplete,
  Dimensions,
  Disableable,
  MinMax,
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

export interface Link extends HTMLStaticProps, Disableable, Href, Rel, Targeter, WithReferrerPolicy {
  as: string;
  crossOrigin: string | null;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
  type: string;
}

export interface TableCell extends HTMLStaticProps {
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

// ===== ===== ===== ===== =====
// FREEJSX_TAG_NAME_MAP
// ===== ===== ===== ===== =====

export interface HTMLElementTagNameMap {
  a: Anchor;
  abbr: HTMLStaticProps;
  address: HTMLStaticProps;
  area: HTMLStaticProps & Hyperlink & Alt & WithReferrerPolicy & {
    coords: string;
    download: string;
    shape: string;
  };
  article: HTMLStaticProps;
  aside: HTMLStaticProps;
  audio: HTMLStaticProps;
  b: HTMLStaticProps;
  base: HTMLStaticProps & Href;
  bdi: HTMLStaticProps;
  bdo: HTMLStaticProps;
  blockquote: Citable;
  body: StaticProps & {
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
  };
  br: HTMLStaticProps;
  button: HTMLStaticPropsWithName & Disableable & Valued & {
    autofocus: boolean;
    formAction: string;
    formEnctype: string;
    formMethod: string;
    formNoValidate: boolean;
    formTarget: string;
    type: string;
  };
  canvas: HTMLStaticProps & Dimensions;
  caption: HTMLStaticProps;
  cite: HTMLStaticProps;
  code: HTMLStaticProps;
  col: HTMLStaticProps;
  colgroup: HTMLStaticProps;
  data: HTMLStaticProps & Valued;
  datalist: HTMLStaticProps;
  dd: HTMLStaticProps;
  del: Citable;
  details: HTMLStaticProps & { open: boolean; };
  dfn: HTMLStaticProps;
  dialog: Omit<HTMLStaticProps, "tabIndex"> & {
    open: boolean;
    returnValue: string;
  };
  div: HTMLStaticProps;
  dl: HTMLStaticProps;
  dt: HTMLStaticProps;
  em: HTMLStaticProps;
  embed: HTMLStaticProps & Dimensions & Sourced & {
    type: string;
  };
  fieldset: HTMLStaticPropsWithName & Disableable;
  figcaption: HTMLStaticProps;
  figure: HTMLStaticProps;
  footer: HTMLStaticProps;
  form: HTMLStaticPropsWithName & AutoComplete & Targeter & {
    acceptCharset: string;
    action: string;
    encoding: string;
    enctype: string;
    method: "get" | "post" | "dialog" | string;
    noValidate: boolean;
  };
  h1: HTMLStaticProps;
  h2: HTMLStaticProps;
  h3: HTMLStaticProps;
  h4: HTMLStaticProps;
  h5: HTMLStaticProps;
  h6: HTMLStaticProps;
  head: HTMLStaticProps;
  header: HTMLStaticProps;
  hgroup: HTMLStaticProps;
  hr: HTMLStaticProps;
  html: HTMLStaticProps;
  i: HTMLStaticProps;
  iframe: HTMLStaticPropsWithName & Dimensions & Sourced & WithReferrerPolicy & {
    allow: string;
    allowfullscreen: boolean;
    scrolling: string;
    srcdoc: string;
  };
  img: HTMLStaticProps & Alt & Dimensions & Sourced & WithReferrerPolicy & {
    crossOrigin: string | null;
    decoding: "async" | "sync" | "auto";
    isMap: boolean;
    loading: "eager" | "lazy";
    sizes: string;
  };
  input: Input;
  ins: Citable;
  kbd: HTMLStaticProps;
  label: HTMLStaticProps & {
    htmlFor: string;
  };
  legend: HTMLStaticProps;
  li: HTMLStaticProps & Valued;
  link: Link;
  main: HTMLStaticProps;
  map: HTMLStaticPropsWithName;
  mark: HTMLStaticProps;
  menu: HTMLStaticProps;
  meta: HTMLStaticPropsWithName & {
    content: string;
    httpEquiv: string;
    media: string;
  };
  meter: HTMLStaticProps & MinMax & Valued & {
    high: number;
    low: number;
    optimum: number;
  };
  nav: HTMLStaticProps;
  noscript: HTMLStaticProps;
  object: HTMLStaticPropsWithName & Dimensions & {
    data: string;
    standby: string;
    type: string;
    useMap: string;
  };
  ol: HTMLStaticProps & {
    reversed: boolean;
    start: number;
    type: string;
  };
  optgroup: HTMLStaticProps & Disableable & { label: string; };
  option: HTMLStaticProps & Disableable & Valued & {
    defaultSelected: boolean;
    label: string;
    selected: boolean;
  };
  output: HTMLStaticPropsWithName & Valued & {
    defaultValue: string;
  };
  p: HTMLStaticProps;
  picture: HTMLStaticProps;
  pre: HTMLStaticProps;
  progress: HTMLStaticProps & {
    max: number;
    value: number;
  };
  q: Citable;
  rp: HTMLStaticProps;
  rt: HTMLStaticProps;
  ruby: HTMLStaticProps;
  s: HTMLStaticProps;
  samp: HTMLStaticProps;
  script: HTMLStaticProps & WithReferrerPolicy & Sourced & {
    async: boolean;
    crossOrigin: string;
    defer: boolean;
    integrity: string;
    noModule: boolean;
    text: string;
    type: string;
  };
  section: HTMLStaticProps;
  select: HTMLStaticPropsWithName & AutoComplete & Disableable & Valued & {
    length: number;
    multiple: boolean;
    required: boolean;
    selectedIndex: number;
    size: number;
  };
  slot: Omit<HTMLStaticPropsWithName, "slot">;
  small: HTMLStaticProps;
  source: HTMLStaticProps & Dimensions & Sourced & {
    media: string;
    sizes: string;
    srcset: string;
    type: string;
  };
  span: HTMLStaticProps;
  strong: HTMLStaticProps;
  style: StaticProps & Disableable & {
    media: string;
  };
  sub: HTMLStaticProps;
  summary: HTMLStaticProps;
  sup: HTMLStaticProps;
  table: HTMLStaticProps;
  tbody: HTMLStaticProps;
  td: TableCell;
  template: HTMLStaticProps;
  textarea: HTMLStaticPropsWithName & AutoComplete & Disableable & Valued & {
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
  };
  tfoot: HTMLStaticProps;
  th: TableCell;
  thead: HTMLStaticProps;
  time: HTMLStaticProps & { dateTime: string; };
  title: HTMLStaticProps;
  tr: HTMLStaticProps;
  track: HTMLStaticProps & Sourced & {
    default: boolean;
    kind: string;
    label: string;
    srclang: string;
  };
  u: HTMLStaticProps;
  ul: HTMLStaticProps;
  var: HTMLStaticProps;
  video: HTMLStaticProps & Dimensions & {
    disablePictureInPicture: boolean;
    onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
    onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
    playsInline: boolean;
    poster: string;
  };
  wbr: HTMLStaticProps;
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