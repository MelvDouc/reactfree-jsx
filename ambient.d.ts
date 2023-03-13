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

interface WithMinMax {
  min: number | string;
  max: number | string;
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

interface ElementProps extends ARIAMixin {
  className: string;
  id: string;
  onfullscreenchange: ((this: Element, ev: Event) => any) | null;
  onfullscreenerror: ((this: Element, ev: Event) => any) | null;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
  [dataAttribute: `data${string}`]: string;
}

interface HtmlElementProps extends ElementProps, OmitEventListenerTogglers<GlobalEventHandlers> {
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

interface Citable extends HtmlElementProps {
  cite: string;
}

interface AnchorProps extends
  HtmlElementProps,
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

interface AreaProps extends
  HtmlElementProps,
  HyperlinkUtils,
  WithAlt,
  WithDownload,
  WithReferrerPolicy,
  WithTarget {
  coords: string;
  ping: string;
  shape: string;
}

interface BodyProps extends HtmlElementProps, OmitEventListenerTogglers<WindowEventHandlers> {
  vLink: string;
}

interface ButtonProps extends HtmlElementProps, Disableable, WithName, WithType, WithValue {
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
}

interface DialogProps extends HtmlElementProps, Openable {
  returnValue: string;
}

interface EmbedProps extends HtmlElementProps, WithHeightAndWidth, WithName, WithSrc, WithType { }

interface FormProps extends HtmlElementProps, WithAutoComplete, WithName, WithTarget {
  acceptCharset: string;
  action: string;
  encoding: string;
  enctype: string;
  method: string;
  noValidate: boolean;
}

interface IframeProps extends
  HtmlElementProps,
  WithHeightAndWidth,
  WithSrc,
  WithName,
  WithReferrerPolicy {
  allow: string;
  allowFullscreen: boolean;
  scrolling: string;
  srcdoc: string;
}

interface ImageProps extends
  HtmlElementProps,
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

interface InputProps extends
  HtmlElementProps,
  Disableable,
  WithAlt,
  WithAutoComplete,
  WithHeightAndWidth,
  WithMinMax,
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
  indeterminate: boolean;
  maxLength: number;
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
}

interface LabelProps extends HtmlElementProps {
  htmlFor: string;
}

interface LinkProps extends
  HtmlElementProps,
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

interface MetaElementProps extends HtmlElementProps, WithName {
  content: string;
  httpEquiv: string;
  media: string;
}

interface MeterProps extends HtmlElementProps, WithMinMax, WithValue {
  high: number;
  low: number;
  optimum: number;
}

interface ObjectElementProps extends HtmlElementProps, WithHeightAndWidth, WithName, WithType {
  data: string;
  standby: string;
  useMap: string;
}

interface OlProps extends HtmlElementProps, WithType {
  reversed: boolean;
  start: number;
}

interface OptionProps extends HtmlElementProps, Disableable, WithValue, WithText {
  defaultSelected: boolean;
  label: string;
  selected: boolean;
}

interface OutputProps extends HtmlElementProps, WithName, WithValue {
  defaultValue: string;
}

interface ProgressProps extends HtmlElementProps {
  max: number;
  value: number;
}

interface ScriptProps extends HtmlElementProps, WithReferrerPolicy, WithSrc, WithText, WithType {
  async: boolean;
  crossOrigin: string;
  defer: boolean;
  integrity: string;
  noModule: boolean;
}

interface SelectProps extends
  HtmlElementProps,
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

interface SourceProps extends HtmlElementProps, WithHeightAndWidth, WithSrc, WithType {
  media: string;
  sizes: string;
  srcset: string;
}

interface StyleElementProps extends HtmlElementProps, Disableable {
  media: string;
}

interface TextareaProps extends
  HtmlElementProps,
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

interface TrackProps extends HtmlElementProps, WithSrc {
  default: boolean;
  kind: string;
  label: string;
  srclang: string;
}

interface TableProps extends HtmlElementProps {
  caption: HTMLTableCaptionElement | null;
  cellPadding: string;
  cellSpacing: string;
  tFoot: HTMLTableSectionElement | null;
  tHead: HTMLTableSectionElement | null;
  width: string;
}

interface TableCellProps extends HtmlElementProps {
  abbr: string;
  colSpan: number;
  headers: string;
  height: string;
  noWrap: boolean;
  rowSpan: number;
  scope: string;
}

interface VideoProps extends HtmlElementProps, WithHeightAndWidth {
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
  a: AnchorProps;
  abbr: HtmlElementProps;
  address: HtmlElementProps;
  area: AreaProps;
  article: HtmlElementProps;
  aside: HtmlElementProps;
  audio: HtmlElementProps;
  b: HtmlElementProps;
  base: HtmlElementProps & WithHref;
  bdi: HtmlElementProps;
  bdo: HtmlElementProps;
  blockquote: Citable;
  body: BodyProps;
  br: HtmlElementProps;
  button: ButtonProps;
  canvas: HtmlElementProps & WithHeightAndWidth;
  caption: HtmlElementProps;
  cite: HtmlElementProps;
  code: HtmlElementProps;
  col: HtmlElementProps;
  colgroup: HtmlElementProps;
  data: HtmlElementProps & WithValue;
  datalist: HtmlElementProps;
  dd: HtmlElementProps;
  del: Citable;
  details: HtmlElementProps & Openable;
  dfn: HtmlElementProps;
  dialog: DialogProps;
  div: HtmlElementProps;
  dl: HtmlElementProps;
  dt: HtmlElementProps;
  em: HtmlElementProps;
  embed: EmbedProps;
  fieldset: HtmlElementProps & Disableable & WithName;
  figcaption: HtmlElementProps;
  figure: HtmlElementProps;
  footer: HtmlElementProps;
  form: FormProps;
  h1: HtmlElementProps;
  h2: HtmlElementProps;
  h3: HtmlElementProps;
  h4: HtmlElementProps;
  h5: HtmlElementProps;
  h6: HtmlElementProps;
  head: HtmlElementProps;
  header: HtmlElementProps;
  hgroup: HtmlElementProps;
  hr: HtmlElementProps;
  html: HtmlElementProps;
  i: HtmlElementProps;
  iframe: IframeProps;
  img: ImageProps;
  input: InputProps;
  ins: Citable;
  kbd: HtmlElementProps;
  label: LabelProps;
  legend: HtmlElementProps;
  li: HtmlElementProps & WithValue;
  link: LinkProps;
  main: HtmlElementProps;
  map: HtmlElementProps & WithName;
  mark: HtmlElementProps;
  menu: HtmlElementProps;
  meta: MetaElementProps;
  meter: MeterProps;
  nav: HtmlElementProps;
  noscript: HtmlElementProps;
  object: ObjectElementProps;
  ol: OlProps;
  optgroup: HtmlElementProps & Disableable & { label: string; };
  option: OptionProps;
  output: OutputProps;
  p: HtmlElementProps;
  picture: HtmlElementProps;
  pre: HtmlElementProps;
  progress: ProgressProps;
  q: Citable;
  rp: HtmlElementProps;
  rt: HtmlElementProps;
  ruby: HtmlElementProps;
  s: HtmlElementProps;
  samp: HtmlElementProps;
  script: ScriptProps;
  section: HtmlElementProps;
  select: SelectProps;
  slot: Omit<HtmlElementProps, "slot"> & WithName;
  small: HtmlElementProps;
  source: SourceProps;
  span: HtmlElementProps;
  strong: HtmlElementProps;
  style: StyleElementProps;
  sub: HtmlElementProps;
  summary: HtmlElementProps;
  sup: HtmlElementProps;
  table: TableProps;
  tbody: HtmlElementProps;
  td: TableCellProps;
  template: HtmlElementProps;
  textarea: TextareaProps;
  tfoot: HtmlElementProps;
  th: TableCellProps;
  thead: HtmlElementProps;
  time: HtmlElementProps & { dateTime: string; };
  title: HtmlElementProps & WithText;
  tr: HtmlElementProps;
  track: TrackProps;
  u: HtmlElementProps;
  ul: HtmlElementProps;
  var: HtmlElementProps;
  video: VideoProps;
  wbr: HtmlElementProps;
}