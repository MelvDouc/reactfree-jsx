import {
  alt,
  autocomplete,
  cite,
  dimensions,
  disabled,
  download,
  href,
  name,
  open,
  referrerPolicy,
  rel,
  src,
  target,
  text,
  type,
  value,
} from "./common-interfaces";

export interface FreeJsxElementTagNameMap {
  a: FreeJsxAnchorElement;
  abbr: FreeJsxHtmlElementAttributes;
  address: FreeJsxHtmlElementAttributes;
  area: FreeJsxAreaElement;
  article: FreeJsxHtmlElementAttributes;
  aside: FreeJsxHtmlElementAttributes;
  audio: FreeJsxHtmlElementAttributes;
  b: FreeJsxHtmlElementAttributes;
  base: FreeJsxBaseAttributes;
  bdi: FreeJsxHtmlElementAttributes;
  bdo: FreeJsxHtmlElementAttributes;
  blockquote: FreeJsxQuoteAttributes;
  body: FreeJsxBodyAttributes;
  br: FreeJsxHtmlElementAttributes;
  button: FreeJsxButtonAttributes;
  canvas: FreeJsxCanvasAttributes;
  caption: FreeJsxHtmlElementAttributes;
  cite: FreeJsxHtmlElementAttributes;
  code: FreeJsxHtmlElementAttributes;
  col: FreeJsxHtmlElementAttributes;
  colgroup: FreeJsxHtmlElementAttributes;
  data: FreeJsxDataAttributes;
  datalist: FreeJsxHtmlElementAttributes;
  dd: FreeJsxHtmlElementAttributes;
  del: FreeJsxModAttributes;
  details: FreeJsxDetailsAttributes;
  dfn: FreeJsxHtmlElementAttributes;
  dialog: FreeJsxDialogAttributes;
  div: FreeJsxHtmlElementAttributes;
  dl: FreeJsxHtmlElementAttributes;
  dt: FreeJsxHtmlElementAttributes;
  em: FreeJsxHtmlElementAttributes;
  embed: FreeJsxEmbedAttributes;
  fieldset: FreeJsxFieldsetAttributes;
  figcaption: FreeJsxHtmlElementAttributes;
  figure: FreeJsxHtmlElementAttributes;
  footer: FreeJsxHtmlElementAttributes;
  form: FreeJsxFormAttributes;
  h1: FreeJsxHtmlElementAttributes;
  h2: FreeJsxHtmlElementAttributes;
  h3: FreeJsxHtmlElementAttributes;
  h4: FreeJsxHtmlElementAttributes;
  h5: FreeJsxHtmlElementAttributes;
  h6: FreeJsxHtmlElementAttributes;
  head: FreeJsxHtmlElementAttributes;
  header: FreeJsxHtmlElementAttributes;
  hgroup: FreeJsxHtmlElementAttributes;
  hr: FreeJsxHtmlElementAttributes;
  html: FreeJsxHtmlElementAttributes;
  i: FreeJsxHtmlElementAttributes;
  iframe: FreeJsxIframeAttributes;
  img: FreeJsxImageAttributes;
  input: FreeJsxInputAttributes;
  ins: FreeJsxModAttributes;
  kbd: FreeJsxHtmlElementAttributes;
  label: FreeJsxLabelAttributes;
  legend: FreeJsxHtmlElementAttributes;
  li: FreeJsxLiAttributes;
  link: FreeJsxLinkAttributes;
  main: FreeJsxHtmlElementAttributes;
  map: WithName<FreeJsxHtmlElementAttributes>;
  mark: FreeJsxHtmlElementAttributes;
  menu: FreeJsxHtmlElementAttributes;
  meta: FreeJsxMetaAttributes;
  meter: FreeJsxMeterAttributes;
  nav: FreeJsxHtmlElementAttributes;
  noscript: FreeJsxHtmlElementAttributes;
  object: FreeJsxObjectAttributes;
  ol: FreeJsxOlAttributes;
  optgroup: FreeJsxOptgroupAttributes;
  option: FreeJsxOptionAttributes;
  output: FreeJsxOutputAttributes;
  p: FreeJsxHtmlElementAttributes;
  picture: FreeJsxHtmlElementAttributes;
  pre: FreeJsxHtmlElementAttributes;
  progress: FreeJsxProgressAttributes;
  q: FreeJsxQuoteAttributes;
  rp: FreeJsxHtmlElementAttributes;
  rt: FreeJsxHtmlElementAttributes;
  ruby: FreeJsxHtmlElementAttributes;
  s: FreeJsxHtmlElementAttributes;
  samp: FreeJsxHtmlElementAttributes;
  script: FreeJsxScriptAttributes;
  section: FreeJsxHtmlElementAttributes;
  select: FreeJsxSelectAttributes;
  slot: FreeJsxSourceAttributes;
  small: FreeJsxHtmlElementAttributes;
  source: FreeJsxSourceAttributes;
  span: FreeJsxHtmlElementAttributes;
  strong: FreeJsxHtmlElementAttributes;
  style: FreeJsxStyleElementAttributes;
  sub: FreeJsxHtmlElementAttributes;
  summary: FreeJsxHtmlElementAttributes;
  sup: FreeJsxHtmlElementAttributes;
  table: FreeJsxTableAttributes;
  tbody: FreeJsxHtmlElementAttributes;
  td: FreeJsxTableCellAttributes;
  template: FreeJsxTemplateAttributes;
  textarea: FreeJsxTextareaAttributes;
  tfoot: FreeJsxHtmlElementAttributes;
  th: FreeJsxTableCellAttributes;
  thead: FreeJsxHtmlElementAttributes;
  time: FreeJsxTimeAttributes;
  title: FreeJsxTitleAttributes;
  tr: FreeJsxHtmlElementAttributes;
  track: FreeJsxTrackAttributes;
  u: FreeJsxHtmlElementAttributes;
  ul: FreeJsxHtmlElementAttributes;
  var: FreeJsxHtmlElementAttributes;
  video: FreeJsxVideoAttributes;
  wbr: FreeJsxHtmlElementAttributes;
}

type OmitEventListenerTogglers<T> = Omit<T, "addEventListener" | "removeEventListener">;
type window_event_handlers = OmitEventListenerTogglers<WindowEventHandlers>;
type WithName<T> = T & { name: string; };

interface FreeJsxElement extends ARIAMixin {
  className: string;
  classNames: string[];
  id: string;
  onfullscreenchange: ((this: Element, ev: Event) => any) | null;
  onfullscreenerror: ((this: Element, ev: Event) => any) | null;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
  [dataAttribute: `data${string}`]: string;
}

interface FreeJsxHtmlElementAttributes extends FreeJsxElement, OmitEventListenerTogglers<GlobalEventHandlers> {
  accessKey: string;
  autocapitalize: string;
  contentEditable: string;
  dir: string;
  draggable: boolean;
  enterKeyHint: string;
  hidden: boolean;
  inert: boolean;
  inputMode: string;
  lang: string;
  spellcheck: boolean;
  title: string;
  translate: boolean;
}

interface HyperlinkUtils extends href {
  hash: string;
  host: string;
  hostname: string;
  password: string;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  username: string;
}

interface FreeJsxAnchorElement extends
  FreeJsxHtmlElementAttributes,
  HyperlinkUtils,
  download,
  name,
  rel,
  target,
  type,
  referrerPolicy,
  text {
  hreflang: string;
  ping: string;
}

interface FreeJsxAreaElement extends
  FreeJsxHtmlElementAttributes,
  HyperlinkUtils,
  alt,
  download,
  referrerPolicy,
  target {
  coords: string;
  ping: string;
  shape: string;
}

interface FreeJsxBaseAttributes extends FreeJsxHtmlElementAttributes, href { }
interface FreeJsxQuoteAttributes extends FreeJsxHtmlElementAttributes, cite { }

interface FreeJsxBodyAttributes extends FreeJsxHtmlElementAttributes, window_event_handlers {
  vLink: string;
}

interface FreeJsxButtonAttributes extends FreeJsxHtmlElementAttributes, disabled, name, type, value {
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
}

interface FreeJsxCanvasAttributes extends FreeJsxHtmlElementAttributes {
  height: number;
  width: number;
}
interface FreeJsxDataAttributes extends FreeJsxHtmlElementAttributes, value { }
interface FreeJsxDetailsAttributes extends FreeJsxHtmlElementAttributes, open { }
interface FreeJsxDialogAttributes extends FreeJsxHtmlElementAttributes, open {
  returnValue: string;
}
interface FreeJsxEmbedAttributes extends FreeJsxHtmlElementAttributes, dimensions, name, src, type { }
interface FreeJsxFieldsetAttributes extends FreeJsxHtmlElementAttributes, disabled, name { }

interface FreeJsxFormAttributes extends FreeJsxHtmlElementAttributes, autocomplete, name, target {
  acceptCharset: string;
  action: string;
  encoding: string;
  enctype: string;
  method: string;
  noValidate: boolean;
}

interface FreeJsxIframeAttributes extends
  FreeJsxHtmlElementAttributes,
  dimensions,
  src,
  name,
  referrerPolicy {
  allow: string;
  allowFullscreen: boolean;
  scrolling: string;
  srcdoc: string;
}

interface FreeJsxImageAttributes extends FreeJsxHtmlElementAttributes, alt, referrerPolicy, src {
  crossOrigin: string | null;
  decoding: "async" | "sync" | "auto";
  height: number;
  isMap: boolean;
  loading: "eager" | "lazy";
  sizes: string;
  width: number;
}

interface FreeJsxInputAttributes extends
  FreeJsxHtmlElementAttributes,
  alt,
  autocomplete,
  disabled,
  name,
  src,
  type,
  value {
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
  height: number;
  indeterminate: boolean;
  max: string;
  maxLength: number;
  min: string;
  minLength: number;
  multiple: boolean;
  pattern: string;
  placeholder: string;
  required: boolean;
  selectionDirection: "forward" | "backward" | "none" | null;
  selectionEnd: number | null;
  selectionStart: number | null;
  size: number;
  step: string;
  useMap: string;
  valueAsDate: Date | null;
  valueAsNumber: number;
  webkitdirectory: boolean;
  width: number;
}

interface FreeJsxLabelAttributes extends FreeJsxHtmlElementAttributes {
  htmlFor: string;
}

interface FreeJsxLiAttributes extends FreeJsxHtmlElementAttributes, value { }

interface FreeJsxLinkAttributes extends
  FreeJsxHtmlElementAttributes,
  disabled,
  href,
  referrerPolicy,
  rel,
  target,
  type {
  as: string;
  crossOrigin: string | null;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
}

interface FreeJsxMetaAttributes extends WithName<FreeJsxHtmlElementAttributes> {
  content: string;
  httpEquiv: string;
  media: string;
}

interface FreeJsxMeterAttributes extends FreeJsxHtmlElementAttributes {
  high: number;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;
}

interface FreeJsxModAttributes extends FreeJsxHtmlElementAttributes, cite { }

interface FreeJsxObjectAttributes extends FreeJsxHtmlElementAttributes, dimensions, name, type {
  data: string;
  standby: string;
  useMap: string;
}

interface FreeJsxOlAttributes extends FreeJsxHtmlElementAttributes, type {
  reversed: boolean;
  start: number;
}

interface FreeJsxOptgroupAttributes extends FreeJsxHtmlElementAttributes, disabled {
  label: string;
}

interface FreeJsxOptionAttributes extends FreeJsxHtmlElementAttributes, disabled, value, text {
  defaultSelected: boolean;
  label: string;
  selected: boolean;
}

interface FreeJsxOutputAttributes extends FreeJsxHtmlElementAttributes, name, value {
  defaultValue: string;
}

interface FreeJsxProgressAttributes extends FreeJsxHtmlElementAttributes {
  max: number;
  value: number;
}

interface FreeJsxScriptAttributes extends FreeJsxHtmlElementAttributes, referrerPolicy, src, text, type {
  async: boolean;
  crossOrigin: string;
  defer: boolean;
  integrity: string;
  noModule: boolean;
}

interface FreeJsxSelectAttributes
  extends FreeJsxHtmlElementAttributes,
  autocomplete,
  disabled,
  name,
  value {
  length: number;
  multiple: boolean;
  required: boolean;
  selectedIndex: number;
  size: number;
}

interface FreeJsxSourceAttributes extends FreeJsxHtmlElementAttributes, src, type {
  height: number;
  media: string;
  sizes: string;
  srcset: string;
  width: number;
}

interface FreeJsxStyleElementAttributes extends FreeJsxHtmlElementAttributes, disabled {
  media: string;
}

interface FreeJsxTemplateAttributes extends FreeJsxHtmlElementAttributes { }

interface FreeJsxTextareaAttributes extends
  FreeJsxHtmlElementAttributes,
  autocomplete,
  disabled,
  name,
  value {
  cols: number;
  defaultValue: string;
  dirName: string;
  maxLength: number;
  minLength: number;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  selectionDirection: "forward" | "backward" | "none";
  selectionEnd: number;
  selectionStart: number;
  wrap: string;
}

interface FreeJsxTimeAttributes extends FreeJsxHtmlElementAttributes {
  dateTime: string;
}

interface FreeJsxTitleAttributes extends FreeJsxHtmlElementAttributes, text { }

interface FreeJsxTrackAttributes extends FreeJsxHtmlElementAttributes, src {
  default: boolean;
  kind: string;
  label: string;
  srclang: string;
}

interface FreeJsxVideoAttributes extends FreeJsxHtmlElementAttributes {
  disablePictureInPicture: boolean;
  height: number;
  onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  playsInline: boolean;
  poster: string;
  width: number;
}

interface FreeJsxTableAttributes extends FreeJsxHtmlElementAttributes {
  caption: HTMLTableCaptionElement | null;
  cellPadding: string;
  cellSpacing: string;
  tFoot: HTMLTableSectionElement | null;
  tHead: HTMLTableSectionElement | null;
  width: string;
}

interface FreeJsxTableCellAttributes extends FreeJsxHtmlElementAttributes {
  abbr: string;
  colSpan: number;
  headers: string;
  height: string;
  noWrap: boolean;
  rowSpan: number;
  scope: string;
}