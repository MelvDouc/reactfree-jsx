// ===== ===== ===== ===== =====
// JSX
// ===== ===== ===== ===== =====

declare namespace JSX {
  type IntrinsicElementsHTML = {
    [K in keyof FreeJsxElementTagNameMap]:
    & { [P in keyof FreeJsxElementTagNameMap[K]]?: PossibleObs<FreeJsxElementTagNameMap[K][P]> }
    & Partial<FreeJSXExtraAttributes<K>>
  };

  type IntrinsicElements = IntrinsicElementsHTML;
}

// ===== ===== ===== ===== =====
// OBSERVABLE
// ===== ===== ===== ===== =====

interface Obs<T> {
  value: T;
  subscribe(subscription: (value: T) => void): VoidFunction;
  followObservable<O>(obs: Obs<O>, mapFn: (value: O) => T): Obs<T>;
  notify(): void;
}

type PossibleObs<T> = T | Obs<T>;

// ===== ===== ===== ===== =====
// COMPONENTS
// ===== ===== ===== ===== =====

type ComponentChild =
  | ComponentChild[]
  | Node
  | string
  | number
  | boolean
  | undefined
  | null;
type ComponentChildren = ComponentChild | ComponentChild[];
type ComponentFactory = (props: { children?: ComponentChildren; }) => Element | ComponentFactory;

// ===== ===== ===== ===== =====
// PROPERTIES
// ===== ===== ===== ===== =====

type Props<T extends keyof JSX.IntrinsicElements> = Partial<JSX.IntrinsicElements[T]>;
type FreeJSXExtraAttributes<K extends keyof FreeJsxElementTagNameMap> = {
  /**
   * A function to run on the element after its properties have been set.
   * @param element The element being created.
   */
  $init: (element: HTMLElementTagNameMap[K]) => void;
  /**
   * A record of CSS classes that will be added to the element if the value is true
   * or, if it is an observable, when its value changes to `true`.
   */
  classes: Record<string, PossibleObs<boolean>>;
  /**
   * An array of CSS classes to add to the element.
   */
  classNames: string[];
  /**
   * A record of CSS classes that will be applied to the element
   * either directly or dynamically via an observable.
   */
  style: FreeJsxStyles;
};

// ===== ===== ===== ===== =====
// STYLES
// ===== ===== ===== ===== =====

type CSSStyleDeclarationMethod = "getPropertyPriority" | "getPropertyValue" | "item" | "length" | "removeProperty" | "setProperty";
type MethodFreeCSSStyleDeclaration = Omit<CSSStyleDeclaration, CSSStyleDeclarationMethod>;
type FreeJsxStyles = {
  [K in keyof MethodFreeCSSStyleDeclaration]?: PossibleObs<MethodFreeCSSStyleDeclaration[K]>
};

// ===== ===== ===== ===== =====
// COMMON PROPS
// ===== ===== ===== ===== =====

interface WithAlt {
  alt: string;
}

interface WithAutoComplete {
  autocomplete: string;
}

interface WithCite {
  cite: string;
}

interface Disableable {
  disabled: boolean;
}

interface WithDownload {
  download: string;
}

interface WithHref {
  href: string;
}

interface WithName {
  name: string;
}

interface Openable {
  open: boolean;
}

interface WithRel {
  rel: string;
}

interface WithSrc {
  src: string;
}

interface WithReferrerPolicy {
  referrerPolicy: string;
}

interface WithTarget {
  target: string;
}

interface WithText {
  text: string;
}

interface WithType {
  type: string;
}

interface WithValue {
  value: string | number;
}

interface WithHeightAndWidth {
  height: number | string;
  width: number | string;
}

// ===== ===== ===== ===== =====
// PROPS INTERFACES
// ===== ===== ===== ===== =====

type OmitEventListenerTogglers<T> = Omit<T, "addEventListener" | "removeEventListener">;

interface FreeJsxElementProps extends ARIAMixin {
  className: string;
  id: string;
  onfullscreenchange: ((this: Element, ev: Event) => any) | null;
  onfullscreenerror: ((this: Element, ev: Event) => any) | null;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
  [dataAttribute: `data${string}`]: string;
}

interface FreeJsxHtmlElementProps extends FreeJsxElementProps, OmitEventListenerTogglers<GlobalEventHandlers> {
  accessKey: string;
  autocapitalize: string;
  contentEditable: string;
  dir: string;
  draggable: boolean;
  enterKeyHint: string;
  hidden: boolean;
  inert: boolean;
  innerHTML: string | number;
  innerText: string | number;
  inputMode: string;
  lang: string;
  outerHTML: string;
  outerText: string;
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

interface FreeJsxAnchorProps extends
  FreeJsxHtmlElementProps,
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
  FreeJsxHtmlElementProps,
  HyperlinkUtils,
  WithAlt,
  WithDownload,
  WithReferrerPolicy,
  WithTarget {
  coords: string;
  ping: string;
  shape: string;
}

interface FreeJsxBaseProps extends FreeJsxHtmlElementProps, WithHref { }
interface FreeJsxQuoteProps extends FreeJsxHtmlElementProps, WithCite { }

interface FreeJsxBodyProps extends FreeJsxHtmlElementProps, OmitEventListenerTogglers<WindowEventHandlers> {
  vLink: string;
}

interface FreeJsxButtonProps extends FreeJsxHtmlElementProps, Disableable, WithName, WithType, WithValue {
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
}

interface FreeJsxCanvasProps extends FreeJsxHtmlElementProps, WithHeightAndWidth { }
interface FreeJsxDataProps extends FreeJsxHtmlElementProps, WithValue { }
interface FreeJsxDetailsProps extends FreeJsxHtmlElementProps, Openable { }

interface FreeJsxDialogProps extends FreeJsxHtmlElementProps, Openable {
  returnValue: string;
}

interface FreeJsxEmbedProps extends FreeJsxHtmlElementProps, WithHeightAndWidth, WithName, WithSrc, WithType { }
interface FreeJsxFieldsetProps extends FreeJsxHtmlElementProps, Disableable, WithName { }

interface FreeJsxFormProps extends FreeJsxHtmlElementProps, WithAutoComplete, WithName, WithTarget {
  acceptCharset: string;
  action: string;
  encoding: string;
  enctype: string;
  method: string;
  noValidate: boolean;
}

interface FreeJsxIframeProps extends
  FreeJsxHtmlElementProps,
  WithHeightAndWidth,
  WithSrc,
  WithName,
  WithReferrerPolicy {
  allow: string;
  allowFullscreen: boolean;
  scrolling: string;
  srcdoc: string;
}

interface FreeJsxImageProps extends
  FreeJsxHtmlElementProps,
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

interface FreeJsxInputProps extends
  FreeJsxHtmlElementProps,
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

interface FreeJsxLabelProps extends FreeJsxHtmlElementProps {
  htmlFor: string;
}

interface FreeJsxLiProps extends FreeJsxHtmlElementProps, WithValue { }

interface FreeJsxLinkProps extends
  FreeJsxHtmlElementProps,
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

interface FreeJsxMapProps extends FreeJsxHtmlElementProps, WithName { }

interface FreeJsxMetaProps extends FreeJsxHtmlElementProps, WithName {
  content: string;
  httpEquiv: string;
  media: string;
}

interface FreeJsxMeterProps extends FreeJsxHtmlElementProps {
  high: number;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;
}

interface FreeJsxModProps extends FreeJsxHtmlElementProps, WithCite { }

interface FreeJsxObjectElementProps extends FreeJsxHtmlElementProps, WithHeightAndWidth, WithName, WithType {
  data: string;
  standby: string;
  useMap: string;
}

interface FreeJsxOlProps extends FreeJsxHtmlElementProps, WithType {
  reversed: boolean;
  start: number;
}

interface FreeJsxOptgroupProps extends FreeJsxHtmlElementProps, Disableable {
  label: string;
}

interface FreeJsxOptionProps extends FreeJsxHtmlElementProps, Disableable, WithValue, WithText {
  defaultSelected: boolean;
  label: string;
  selected: boolean;
}

interface FreeJsxOutputProps extends FreeJsxHtmlElementProps, WithName, WithValue {
  defaultValue: string;
}

interface FreeJsxProgressProps extends FreeJsxHtmlElementProps {
  max: number;
  value: number;
}

interface FreeJsxScriptProps extends FreeJsxHtmlElementProps, WithReferrerPolicy, WithSrc, WithText, WithType {
  async: boolean;
  crossOrigin: string;
  defer: boolean;
  integrity: string;
  noModule: boolean;
}

interface FreeJsxSelectProps extends
  FreeJsxHtmlElementProps,
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

interface FreeJsxSlotProps extends Omit<FreeJsxElementProps, "slot">, WithName { }

interface FreeJsxSourceProps extends FreeJsxHtmlElementProps, WithSrc, WithType {
  height: number;
  media: string;
  sizes: string;
  srcset: string;
  width: number;
}

interface FreeJsxStyleElementProps extends FreeJsxHtmlElementProps, Disableable {
  media: string;
}

interface FreeJsxTextareaProps extends
  FreeJsxHtmlElementProps,
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

interface FreeJsxTimeProps extends FreeJsxHtmlElementProps {
  dateTime: string;
}

interface FreeJsxTitleProps extends FreeJsxHtmlElementProps, WithText { }

interface FreeJsxTrackProps extends FreeJsxHtmlElementProps, WithSrc {
  default: boolean;
  kind: string;
  label: string;
  srclang: string;
}

interface FreeJsxTableProps extends FreeJsxHtmlElementProps {
  caption: HTMLTableCaptionElement | null;
  cellPadding: string;
  cellSpacing: string;
  tFoot: HTMLTableSectionElement | null;
  tHead: HTMLTableSectionElement | null;
  width: string;
}

interface FreeJsxTableCellProps extends FreeJsxHtmlElementProps {
  abbr: string;
  colSpan: number;
  headers: string;
  height: string;
  noWrap: boolean;
  rowSpan: number;
  scope: string;
}

interface FreeJsxVideoProps extends FreeJsxHtmlElementProps, WithHeightAndWidth {
  disablePictureInPicture: boolean;
  onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  playsInline: boolean;
  poster: string;
}

// ===== ===== ===== ===== =====
// FREEJSX_TAG_NAME_MAP
// ===== ===== ===== ===== =====

interface FreeJsxElementTagNameMap {
  a: FreeJsxAnchorProps;
  abbr: FreeJsxHtmlElementProps;
  address: FreeJsxHtmlElementProps;
  area: FreeJsxAreaElement;
  article: FreeJsxHtmlElementProps;
  aside: FreeJsxHtmlElementProps;
  audio: FreeJsxHtmlElementProps;
  b: FreeJsxHtmlElementProps;
  base: FreeJsxBaseProps;
  bdi: FreeJsxHtmlElementProps;
  bdo: FreeJsxHtmlElementProps;
  blockquote: FreeJsxQuoteProps;
  body: FreeJsxBodyProps;
  br: FreeJsxHtmlElementProps;
  button: FreeJsxButtonProps;
  canvas: FreeJsxCanvasProps;
  caption: FreeJsxHtmlElementProps;
  cite: FreeJsxHtmlElementProps;
  code: FreeJsxHtmlElementProps;
  col: FreeJsxHtmlElementProps;
  colgroup: FreeJsxHtmlElementProps;
  data: FreeJsxDataProps;
  datalist: FreeJsxHtmlElementProps;
  dd: FreeJsxHtmlElementProps;
  del: FreeJsxModProps;
  details: FreeJsxDetailsProps;
  dfn: FreeJsxHtmlElementProps;
  dialog: FreeJsxDialogProps;
  div: FreeJsxHtmlElementProps;
  dl: FreeJsxHtmlElementProps;
  dt: FreeJsxHtmlElementProps;
  em: FreeJsxHtmlElementProps;
  embed: FreeJsxEmbedProps;
  fieldset: FreeJsxFieldsetProps;
  figcaption: FreeJsxHtmlElementProps;
  figure: FreeJsxHtmlElementProps;
  footer: FreeJsxHtmlElementProps;
  form: FreeJsxFormProps;
  h1: FreeJsxHtmlElementProps;
  h2: FreeJsxHtmlElementProps;
  h3: FreeJsxHtmlElementProps;
  h4: FreeJsxHtmlElementProps;
  h5: FreeJsxHtmlElementProps;
  h6: FreeJsxHtmlElementProps;
  head: FreeJsxHtmlElementProps;
  header: FreeJsxHtmlElementProps;
  hgroup: FreeJsxHtmlElementProps;
  hr: FreeJsxHtmlElementProps;
  html: FreeJsxHtmlElementProps;
  i: FreeJsxHtmlElementProps;
  iframe: FreeJsxIframeProps;
  img: FreeJsxImageProps;
  input: FreeJsxInputProps;
  ins: FreeJsxModProps;
  kbd: FreeJsxHtmlElementProps;
  label: FreeJsxLabelProps;
  legend: FreeJsxHtmlElementProps;
  li: FreeJsxLiProps;
  link: FreeJsxLinkProps;
  main: FreeJsxHtmlElementProps;
  map: FreeJsxMapProps;
  mark: FreeJsxHtmlElementProps;
  menu: FreeJsxHtmlElementProps;
  meta: FreeJsxMetaProps;
  meter: FreeJsxMeterProps;
  nav: FreeJsxHtmlElementProps;
  noscript: FreeJsxHtmlElementProps;
  object: FreeJsxObjectElementProps;
  ol: FreeJsxOlProps;
  optgroup: FreeJsxOptgroupProps;
  option: FreeJsxOptionProps;
  output: FreeJsxOutputProps;
  p: FreeJsxHtmlElementProps;
  picture: FreeJsxHtmlElementProps;
  pre: FreeJsxHtmlElementProps;
  progress: FreeJsxProgressProps;
  q: FreeJsxQuoteProps;
  rp: FreeJsxHtmlElementProps;
  rt: FreeJsxHtmlElementProps;
  ruby: FreeJsxHtmlElementProps;
  s: FreeJsxHtmlElementProps;
  samp: FreeJsxHtmlElementProps;
  script: FreeJsxScriptProps;
  section: FreeJsxHtmlElementProps;
  select: FreeJsxSelectProps;
  slot: FreeJsxSlotProps;
  small: FreeJsxHtmlElementProps;
  source: FreeJsxSourceProps;
  span: FreeJsxHtmlElementProps;
  strong: FreeJsxHtmlElementProps;
  style: FreeJsxStyleElementProps;
  sub: FreeJsxHtmlElementProps;
  summary: FreeJsxHtmlElementProps;
  sup: FreeJsxHtmlElementProps;
  table: FreeJsxTableProps;
  tbody: FreeJsxHtmlElementProps;
  td: FreeJsxTableCellProps;
  template: FreeJsxHtmlElementProps;
  textarea: FreeJsxTextareaProps;
  tfoot: FreeJsxHtmlElementProps;
  th: FreeJsxTableCellProps;
  thead: FreeJsxHtmlElementProps;
  time: FreeJsxTimeProps;
  title: FreeJsxTitleProps;
  tr: FreeJsxHtmlElementProps;
  track: FreeJsxTrackProps;
  u: FreeJsxHtmlElementProps;
  ul: FreeJsxHtmlElementProps;
  var: FreeJsxHtmlElementProps;
  video: FreeJsxVideoProps;
  wbr: FreeJsxHtmlElementProps;
}