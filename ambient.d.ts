// ===== ===== ===== ===== =====
// JSX
// ===== ===== ===== ===== =====

declare namespace JSX {
  type IntrinsicElementsHTML = {
    [K in keyof FreeJsxElementTagNameMap]: {
      [P in keyof FreeJsxElementTagNameMap[K]]?: PossibleObs<FreeJsxElementTagNameMap[K][P]>
    } & Partial<ExtraProps<K>>
  };

  type IntrinsicElements = IntrinsicElementsHTML;
}

// ===== ===== ===== ===== =====
// OBSERVABLE
// ===== ===== ===== ===== =====

interface Obs<T> {
  value: T;
  subscribe(subscription: (value: T) => void): VoidFunction;
  map<U>(mapFn: (value: T) => U): Obs<U>;
  notify(): void;
}

type PossibleObs<T> = T | Obs<T>;

// ===== ===== ===== ===== =====
// COMPONENTS
// ===== ===== ===== ===== =====

type PrimitiveChild = string | number | bigint | boolean | null | undefined;
type PrimitiveOrNodeChild = PrimitiveChild | Node;
type ComponentChild = PrimitiveOrNodeChild | ComponentFactory | Obs<PrimitiveOrNodeChild>;
type ComponentChildren = ComponentChild | ComponentChild[];
type ComponentFactory = (props: { children?: ComponentChildren; }) => Node | ComponentFactory;

// ===== ===== ===== ===== =====
// PROPERTIES
// ===== ===== ===== ===== =====

type Props<T extends keyof JSX.IntrinsicElements> = Partial<JSX.IntrinsicElements[T]>;

type OptionalClassProps = {
  className?: PossibleObs<string>;
  /**
   * An array of CSS classes to add to the element.
   */
  classNames?: string[];
  /**
   * A record of CSS classes that will be added to the element if the value is true
   * or, if it is an observable, when its value changes to `true`.
   */
  classes?: Record<string, PossibleObs<boolean>>;
};

type ExtraProps<K extends keyof FreeJsxElementTagNameMap> = {
  /**
   * A function to run on the element after its properties have been set.
   * @param element The element being created.
   */
  $init: (element: HTMLElementTagNameMap[K]) => void;
  /**
   * A record of CSS classes that will be applied to the element
   * either directly or dynamically via an observable.
   */
  style: FreeJsxStyles;
} & OptionalClassProps;

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

interface AutoComplete {
  autocomplete: string;
}

interface Disableable {
  disabled: boolean;
}

interface Href {
  href: string;
}

interface Named {
  name: string;
}

interface MinMax {
  min: number | string;
  max: number | string;
}

interface Rel {
  rel: string;
}

interface Sourced {
  src: string;
}

interface WithReferrerPolicy {
  referrerPolicy: string;
}

interface Targeter {
  target: string;
}

interface WithText {
  text: string;
}

interface TypedElement {
  type: string;
}

interface Valued {
  value: string | number;
}

interface Dimensions {
  height: number | string;
  width: number | string;
}

// ===== ===== ===== ===== =====
// PROPS INTERFACES
// ===== ===== ===== ===== =====

type InlineListener = ((this: Element, ev: Event) => any) | null;

interface ElementProps extends ARIAMixin, Omit<GlobalEventHandlers, "addEventListener" | "removeEventListener"> {
  id: string;
  onfullscreenchange: InlineListener;
  onfullscreenerror: InlineListener;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
  [dataAttribute: `data${string}`]: string;
}

interface HtmlElementProps extends ElementProps {
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
  spellcheck: boolean;
  tabIndex: string | number;
  title: string;
  translate: boolean;
}

interface HyperlinkProps extends HtmlElementProps, Href {
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

interface Citable extends HtmlElementProps {
  cite: string;
}

interface AnchorProps extends HyperlinkProps, Named, Rel, Targeter, TypedElement, WithReferrerPolicy, WithText {
  download: string;
  hreflang: string;
}

interface AreaProps extends HyperlinkProps, WithReferrerPolicy, Targeter {
  alt: string;
  coords: string;
  download: string;
  shape: string;
}

interface BodyProps extends HtmlElementProps {
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

interface ButtonProps extends HtmlElementProps, Disableable, Named, TypedElement, Valued {
  autofocus: boolean;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
}

interface DialogProps extends Omit<HtmlElementProps, "tabIndex"> {
  open: boolean;
  returnValue: string;
}

interface FormProps extends HtmlElementProps, AutoComplete, Named, Targeter {
  acceptCharset: string;
  action: string;
  encoding: string;
  enctype: string;
  method: string;
  noValidate: boolean;
}

interface IframeProps extends HtmlElementProps, Dimensions, Named, Sourced, WithReferrerPolicy {
  allow: string;
  allowfullscreen: boolean;
  scrolling: string;
  srcdoc: string;
}

interface ImageProps extends HtmlElementProps, Dimensions, Sourced, WithReferrerPolicy {
  alt: string;
  crossOrigin: string | null;
  decoding: "async" | "sync" | "auto";
  isMap: boolean;
  loading: "eager" | "lazy";
  sizes: string;
}

interface InputProps extends
  HtmlElementProps,
  AutoComplete,
  Dimensions,
  Disableable,
  MinMax,
  Named,
  Sourced,
  TypedElement,
  Valued {
  alt: string;
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
  valueAsDate: Date | null;
  valueAsNumber: number;
}

interface LabelProps extends HtmlElementProps {
  htmlFor: string;
}

interface LinkProps extends HtmlElementProps, Disableable, Href, Rel, Targeter, TypedElement, WithReferrerPolicy {
  as: string;
  crossOrigin: string | null;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
}

interface MetaElementProps extends HtmlElementProps, Named {
  content: string;
  httpEquiv: string;
  media: string;
}

interface MeterProps extends HtmlElementProps, MinMax, Valued {
  high: number;
  low: number;
  optimum: number;
}

interface ObjectElementProps extends HtmlElementProps, Dimensions, Named, TypedElement {
  data: string;
  standby: string;
  useMap: string;
}

interface OlProps extends HtmlElementProps, TypedElement {
  reversed: boolean;
  start: number;
}

interface OptionProps extends HtmlElementProps, Disableable, Valued, WithText {
  defaultSelected: boolean;
  label: string;
  selected: boolean;
}

interface OutputProps extends HtmlElementProps, Named, Valued {
  defaultValue: string;
}

interface ProgressProps extends HtmlElementProps {
  max: number;
  value: number;
}

interface ScriptProps extends HtmlElementProps, WithReferrerPolicy, Sourced, WithText, TypedElement {
  async: boolean;
  crossOrigin: string;
  defer: boolean;
  integrity: string;
  noModule: boolean;
}

interface SelectProps extends HtmlElementProps, AutoComplete, Disableable, Named, Valued {
  length: number;
  multiple: boolean;
  required: boolean;
  selectedIndex: number;
  size: number;
}

interface SourceProps extends HtmlElementProps, Dimensions, Sourced, TypedElement {
  media: string;
  sizes: string;
  srcset: string;
}

interface StyleElementProps extends HtmlElementProps, Disableable {
  media: string;
}

interface TextareaProps extends HtmlElementProps, AutoComplete, Disableable, Named, Valued {
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

interface TrackProps extends HtmlElementProps, Sourced {
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

interface VideoProps extends HtmlElementProps, Dimensions {
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
  base: HtmlElementProps & Href;
  bdi: HtmlElementProps;
  bdo: HtmlElementProps;
  blockquote: Citable;
  body: BodyProps;
  br: HtmlElementProps;
  button: ButtonProps;
  canvas: HtmlElementProps & Dimensions;
  caption: HtmlElementProps;
  cite: HtmlElementProps;
  code: HtmlElementProps;
  col: HtmlElementProps;
  colgroup: HtmlElementProps;
  data: HtmlElementProps & Valued;
  datalist: HtmlElementProps;
  dd: HtmlElementProps;
  del: Citable;
  details: HtmlElementProps & { open: boolean; };
  dfn: HtmlElementProps;
  dialog: DialogProps;
  div: HtmlElementProps;
  dl: HtmlElementProps;
  dt: HtmlElementProps;
  em: HtmlElementProps;
  embed: HtmlElementProps & Dimensions & Sourced & TypedElement;
  fieldset: HtmlElementProps & Disableable & Named;
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
  li: HtmlElementProps & Valued;
  link: LinkProps;
  main: HtmlElementProps;
  map: HtmlElementProps & Named;
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
  slot: Omit<HtmlElementProps, "slot"> & Named;
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