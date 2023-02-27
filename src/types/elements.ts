import {
  WithAlt,
  WithAutoComplete,
  WithCite,
  WithHeightAndWidth,
  Disableable,
  WithDownload,
  WithHref,
  WithName,
  Openable,
  WithReferrerPolicy,
  WithRel,
  WithSrc,
  WithTarget,
  WithText,
  WithType,
  WithValue,
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
  map: FreeJsxMapAttributes;
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
  template: FreeJsxHtmlElementAttributes;
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

interface FreeJsxElement extends ARIAMixin {
  className: string;
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

interface HyperlinkUtils extends WithHref {
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
  WithDownload,
  WithName,
  WithRel,
  WithTarget,
  WithType,
  WithReferrerPolicy,
  WithText {
  hreflang: string;
  ping: string;
}

interface FreeJsxAreaElement extends
  FreeJsxHtmlElementAttributes,
  HyperlinkUtils,
  WithAlt,
  WithDownload,
  WithReferrerPolicy,
  WithTarget {
  coords: string;
  ping: string;
  shape: string;
}

interface FreeJsxBaseAttributes extends FreeJsxHtmlElementAttributes, WithHref { }
interface FreeJsxQuoteAttributes extends FreeJsxHtmlElementAttributes, WithCite { }

interface FreeJsxBodyAttributes extends FreeJsxHtmlElementAttributes, OmitEventListenerTogglers<WindowEventHandlers> {
  vLink: string;
}

interface FreeJsxButtonAttributes extends FreeJsxHtmlElementAttributes, Disableable, WithName, WithType, WithValue {
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
}

interface FreeJsxCanvasAttributes extends FreeJsxHtmlElementAttributes, WithHeightAndWidth { }
interface FreeJsxDataAttributes extends FreeJsxHtmlElementAttributes, WithValue { }
interface FreeJsxDetailsAttributes extends FreeJsxHtmlElementAttributes, Openable { }

interface FreeJsxDialogAttributes extends FreeJsxHtmlElementAttributes, Openable {
  returnValue: string;
}

interface FreeJsxEmbedAttributes extends FreeJsxHtmlElementAttributes, WithHeightAndWidth, WithName, WithSrc, WithType { }
interface FreeJsxFieldsetAttributes extends FreeJsxHtmlElementAttributes, Disableable, WithName { }

interface FreeJsxFormAttributes extends FreeJsxHtmlElementAttributes, WithAutoComplete, WithName, WithTarget {
  acceptCharset: string;
  action: string;
  encoding: string;
  enctype: string;
  method: string;
  noValidate: boolean;
}

interface FreeJsxIframeAttributes extends
  FreeJsxHtmlElementAttributes,
  WithHeightAndWidth,
  WithSrc,
  WithName,
  WithReferrerPolicy {
  allow: string;
  allowFullscreen: boolean;
  scrolling: string;
  srcdoc: string;
}

interface FreeJsxImageAttributes extends
  FreeJsxHtmlElementAttributes,
  WithAlt,
  WithReferrerPolicy,
  WithSrc,
  WithHeightAndWidth {
  crossOrigin: string | null;
  decoding: "async" | "sync" | "auto";
  isMap: boolean;
  loading: "eager" | "lazy";
  sizes: string;
}

interface FreeJsxInputAttributes extends
  FreeJsxHtmlElementAttributes,
  WithAlt,
  WithAutoComplete,
  Disableable,
  WithName,
  WithSrc,
  WithType,
  WithValue {
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

interface FreeJsxLiAttributes extends FreeJsxHtmlElementAttributes, WithValue { }

interface FreeJsxLinkAttributes extends
  FreeJsxHtmlElementAttributes,
  Disableable,
  WithHref,
  WithReferrerPolicy,
  WithRel,
  WithTarget,
  WithType {
  as: string;
  crossOrigin: string | null;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
}

interface FreeJsxMapAttributes extends FreeJsxHtmlElementAttributes, WithName { }

interface FreeJsxMetaAttributes extends FreeJsxHtmlElementAttributes, WithName {
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

interface FreeJsxModAttributes extends FreeJsxHtmlElementAttributes, WithCite { }

interface FreeJsxObjectAttributes extends FreeJsxHtmlElementAttributes, WithHeightAndWidth, WithName, WithType {
  data: string;
  standby: string;
  useMap: string;
}

interface FreeJsxOlAttributes extends FreeJsxHtmlElementAttributes, WithType {
  reversed: boolean;
  start: number;
}

interface FreeJsxOptgroupAttributes extends FreeJsxHtmlElementAttributes, Disableable {
  label: string;
}

interface FreeJsxOptionAttributes extends FreeJsxHtmlElementAttributes, Disableable, WithValue, WithText {
  defaultSelected: boolean;
  label: string;
  selected: boolean;
}

interface FreeJsxOutputAttributes extends FreeJsxHtmlElementAttributes, WithName, WithValue {
  defaultValue: string;
}

interface FreeJsxProgressAttributes extends FreeJsxHtmlElementAttributes {
  max: number;
  value: number;
}

interface FreeJsxScriptAttributes extends FreeJsxHtmlElementAttributes, WithReferrerPolicy, WithSrc, WithText, WithType {
  async: boolean;
  crossOrigin: string;
  defer: boolean;
  integrity: string;
  noModule: boolean;
}

interface FreeJsxSelectAttributes
  extends FreeJsxHtmlElementAttributes,
  WithAutoComplete,
  Disableable,
  WithName,
  WithValue {
  length: number;
  multiple: boolean;
  required: boolean;
  selectedIndex: number;
  size: number;
}

interface FreeJsxSourceAttributes extends FreeJsxHtmlElementAttributes, WithSrc, WithType {
  height: number;
  media: string;
  sizes: string;
  srcset: string;
  width: number;
}

interface FreeJsxStyleElementAttributes extends FreeJsxHtmlElementAttributes, Disableable {
  media: string;
}

interface FreeJsxTextareaAttributes extends
  FreeJsxHtmlElementAttributes,
  WithAutoComplete,
  Disableable,
  WithName,
  WithValue {
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

interface FreeJsxTitleAttributes extends FreeJsxHtmlElementAttributes, WithText { }

interface FreeJsxTrackAttributes extends FreeJsxHtmlElementAttributes, WithSrc {
  default: boolean;
  kind: string;
  label: string;
  srclang: string;
}

interface FreeJsxVideoAttributes extends FreeJsxHtmlElementAttributes, WithHeightAndWidth {
  disablePictureInPicture: boolean;
  onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  playsInline: boolean;
  poster: string;
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