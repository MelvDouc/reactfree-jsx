// ===== ===== ===== ===== =====
// UTILS
// ===== ===== ===== ===== =====

export type RecursiveArray<T> = (T | RecursiveArray<T>)[];

export type ExcludeMethods<T extends object> = {
  [K in keyof T as T[K] extends Function ? never : K]: T[K]
};

export type ExtractConstant<T extends object, K extends string> = T[Extract<keyof T, K>];

// ===== ===== ===== ===== =====
// HTML PROPS
// ===== ===== ===== ===== =====

type RFreeGlobalEventHandlers = Omit<GlobalEventHandlers, "addEventListener" | "removeEventListener">;

interface ARIAProps {
  ariaAtomic: string;
  ariaAutoComplete: string;
  ariaBusy: string;
  ariaChecked: string;
  ariaColCount: string;
  ariaColIndex: string;
  ariaColIndexText: string;
  ariaColSpan: string;
  ariaCurrent: string;
  ariaDescription: string;
  ariaExpanded: string;
  ariaHasPopup: string;
  ariaKeyShortcuts: string;
  ariaLive: string;
  ariaModal: string;
  ariaMultiline: string;
  ariaMultiSelectable: string;
  ariaOrientation: string;
  ariaPlaceholder: string;
  ariaPosInSet: string;
  ariaPressed: string;
  ariaReadOnly: string;
  ariaRequired: string;
  ariaRoleDescription: string;
  ariaRowIndex: string;
  ariaRowIndexText: string;
  ariaRowSpan: string;
  ariaSelected: string;
  ariaSetSize: string;
  ariaSort: string;
  ariaValueMax: string;
  ariaValueMin: string;
  ariaValueNow: string;
}

interface HTMLElementProps extends ARIAProps, RFreeGlobalEventHandlers {
  autofocus: boolean;
  accessKey: string;
  autocapitalize: string;
  contentEditable: string;
  dir: string;
  draggable: boolean;
  enterKeyHint: string;
  hidden: boolean;
  id: string;
  inert: boolean;
  inputMode: string;
  lang: string;
  nonce: string;
  popover: string | null;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
  spellcheck: boolean;
  tabIndex: number;
  title: string;
  translate: boolean;
}

// ===== ===== ===== ===== =====
// FORM
// ===== ===== ===== ===== =====

interface PopoverInvokerProps extends HTMLElementProps {
  disabled: boolean;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  name: string;
  popoverTargetAction: string;
  popoverTargetElement: Element | null;
  value: string;
}

interface ButtonProps extends PopoverInvokerProps {
  formTarget: string;
  role: string;
  type: "submit" | "reset" | "button";
}

interface FormProps extends HTMLElementProps {
  acceptCharset: string;
  action: string;
  autocomplete: AutoFillBase;
  encoding: string;
  enctype: string;
  method: string;
  name: string;
  noValidate: boolean;
  rel: string;
  target: string;
}

interface FieldSetProps extends HTMLElementProps {
  disabled: boolean;
  name: string;
}

interface InputProps extends PopoverInvokerProps {
  accept: string;
  align: string;
  alt: string;
  autocomplete: AutoFill;
  capture: string;
  checked: boolean;
  defaultChecked: boolean;
  defaultValue: string;
  dirName: string;
  formTarget: string;
  height: number;
  indeterminate: boolean;
  list: string;
  max: string;
  maxLength: number;
  min: string;
  minLength: number;
  multiple: boolean;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  selectionDirection: "forward" | "backward" | "none" | null;
  selectionEnd: number | null;
  selectionStart: number | null;
  size: number;
  src: string;
  step: string;
  type: string;
  width: number;
}

interface LabelProps extends HTMLElementProps {
  htmlFor: string;
}

interface MeterProps extends HTMLElementProps {
  high: number;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;
}

interface OptGroupProps extends HTMLElementProps {
  disabled: boolean;
  label: string;
}

interface OptionProps extends HTMLElementProps {
  defaultSelected: boolean;
  disabled: boolean;
  label: string;
  selected: boolean;
  value: string;
}

interface OutputProps extends HTMLElementProps {
  defaultValue: string;
  name: string;
  value: string;
}

interface ProgressProps extends HTMLElementProps {
  max: number;
  value: number;
}

interface SelectProps extends HTMLElementProps {
  autocomplete: AutoFill;
  disabled: boolean;
  length: number;
  multiple: boolean;
  name: string;
  required: boolean;
  selectedIndex: number;
  size: number;
  value: string;
}

interface TextAreaProps extends HTMLElementProps {
  autocomplete: AutoFill;
  cols: number;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  maxLength: number;
  minLength: number;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  selectionDirection: "forward" | "backward" | "none";
  selectionEnd: number;
  selectionStart: number;
  wrap: string;
  value: string;
}

// ===== ===== ===== ===== =====
// NAVIGATION
// ===== ===== ===== ===== =====

interface NavigableProps extends HTMLElementProps {
  download: string;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  password: string;
  pathname: string;
  ping: string;
  port: string;
  protocol: string;
  referrerPolicy: string;
  rel: string;
  search: string;
  username: string;
  target: string;
}

interface AnchorProps extends NavigableProps {
  hreflang: string;
  type: string;
}

interface AreaProps extends NavigableProps {
  alt: string;
  coords: string;
  shape: "rect" | "circle" | "poly" | "default" | string;
}

interface MapProps extends HTMLElementProps {
  name: string;
}

// ===== ===== ===== ===== =====
// MEDIA
// ===== ===== ===== ===== =====

interface MediaProps extends HTMLElementProps {
  autoplay: boolean;
  controls: boolean;
  crossOrigin: string | null;
  currentTime: number;
  defaultMuted: boolean;
  defaultPlaybackRate: number;
  disableRemotePlayback: boolean;
  loop: boolean;
  muted: boolean;
  onencrypted: ((this: HTMLMediaElement, ev: MediaEncryptedEvent) => any) | null;
  onwaitingforkey: ((this: HTMLMediaElement, ev: Event) => any) | null;
  playbackRate: number;
  preload: "none" | "metadata" | "auto" | "";
  preservesPitch: boolean;
  src: string;
  srcObject: MediaProvider | null;
  volume: number;
}

interface AudioProps extends MediaProps { }

interface EmbedProps extends HTMLElementProps {
  height: number;
  src: string;
  type: string;
  width: number;
}

interface SourceProps extends HTMLElementProps {
  height: number;
  media: string;
  sizes: string;
  src: string;
  srcset: string;
  type: string;
  width: number;
}

interface TracksProps extends HTMLElementProps {
  default: boolean;
  kind: string;
  label: string;
  src: string;
  srclang: string;
}

interface VideoProps extends MediaProps {
  disablePictureInPicture: boolean;
  height: number;
  onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  playsInline: boolean;
  poster: string;
  width: number;
}

// ===== ===== ===== ===== =====
// HEAD
// ===== ===== ===== ===== =====

interface BaseProps extends HTMLElementProps {
  href: string;
  target: string;
}

interface LinkProps extends HTMLElementProps {
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

interface MetaProps extends HTMLElementProps {
  content: string;
  httpEquiv: string;
  media: string;
  name: string;
}

interface ScriptProps extends HTMLElementProps {
  async: boolean;
  crossOrigin: string | null;
  defer: boolean;
  href: string;
  integrity: string;
  noModule: boolean;
  referrerPolicy: string;
  src: string;
  type: string;
}

interface StyleProps extends HTMLElementProps {
  disabled: boolean;
  media: string;
  title: string;
}

// ===== ===== ===== ===== =====
// LIST
// ===== ===== ===== ===== =====

interface LiProps extends HTMLElementProps {
  value: string;
}

interface OlProps extends HTMLElementProps {
  reversed: boolean;
  start: number;
  type: string;
}

// ===== ===== ===== ===== =====
// TABLE
// ===== ===== ===== ===== =====

interface TableProps extends HTMLElementProps {
  caption: HTMLTableCaptionElement | null;
  frame: string;
}

interface TableCellProps extends HTMLElementProps {
  abbr: string;
  colSpan: number;
  headers: string;
  rowSpan: number;
  scope: string;
}

interface TableColProps extends HTMLElementProps {
  span: number;
}

// ===== ===== ===== ===== =====
// OTHERS
// ===== ===== ===== ===== =====

interface CanvasProps extends HTMLElementProps {
  height: number;
  width: number;
}

interface DataProps extends HTMLElementProps {
  value: string;
}

interface DetailsProps extends HTMLElementProps {
  open: boolean;
}

interface DialogProps extends HTMLElementProps {
  open: boolean;
  returnValue: string;
}

interface IFrameProps extends HTMLElementProps {
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

interface ImgProps extends HTMLElementProps {
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

interface ModProps extends HTMLElementProps {
  cite: string;
  dateTime: string;
}

interface ObjectProps extends HTMLElementProps {
  data: string;
  height: string;
  name: string;
  standby: string;
  type: string;
  useMap: string;
  vspace: number;
  width: string;
}

interface QuoteProps extends HTMLElementProps {
  cite: string;
}

interface SlotProps extends HTMLElementProps {
  name: string;
}

interface TimeProps extends HTMLElementProps {
  dateTime: string;
}

// ===== ===== ===== ===== =====
// TAG NAME MAP
// ===== ===== ===== ===== =====

export interface HTMLPropsTagNameMap {
  a: AnchorProps;
  abbr: HTMLElementProps;
  address: HTMLElementProps;
  area: AreaProps;
  article: HTMLElementProps;
  aside: HTMLElementProps;
  audio: AudioProps;
  b: HTMLElementProps;
  base: BaseProps;
  bdi: HTMLElementProps;
  bdo: HTMLElementProps;
  blockquote: QuoteProps;
  body: HTMLElementProps;
  br: HTMLElementProps;
  button: ButtonProps;
  canvas: CanvasProps;
  caption: HTMLElementProps;
  cite: HTMLElementProps;
  code: HTMLElementProps;
  col: TableColProps;
  colgroup: TableColProps;
  data: DataProps;
  datalist: HTMLElementProps;
  del: ModProps;
  details: DetailsProps;
  dialog: DialogProps;
  dd: HTMLElementProps;
  dfn: HTMLElementProps;
  div: HTMLElementProps;
  dl: HTMLElementProps;
  dt: HTMLElementProps;
  em: HTMLElementProps;
  embed: EmbedProps;
  fieldset: FieldSetProps;
  figcaption: HTMLElementProps;
  figure: HTMLElementProps;
  footer: HTMLElementProps;
  form: FormProps;
  head: HTMLElementProps;
  header: HTMLElementProps;
  h1: HTMLElementProps;
  h2: HTMLElementProps;
  h3: HTMLElementProps;
  h4: HTMLElementProps;
  h5: HTMLElementProps;
  h6: HTMLElementProps;
  html: HTMLElementProps;
  hr: HTMLElementProps;
  hgroup: HTMLElementProps;
  i: HTMLElementProps;
  iframe: IFrameProps;
  img: ImgProps;
  input: InputProps;
  ins: ModProps;
  kbd: HTMLElementProps;
  label: LabelProps;
  legend: HTMLElementProps;
  li: LiProps;
  link: LinkProps;
  main: HTMLElementProps;
  map: MapProps;
  mark: HTMLElementProps;
  menu: HTMLElementProps;
  meta: MetaProps;
  meter: MeterProps;
  nav: HTMLElementProps;
  noscript: HTMLElementProps;
  object: ObjectProps;
  ol: OlProps;
  optgroup: OptGroupProps;
  option: OptionProps;
  output: OutputProps;
  p: HTMLElementProps;
  picture: HTMLElementProps;
  pre: HTMLElementProps;
  progress: ProgressProps;
  q: QuoteProps;
  rp: HTMLElementProps;
  rt: HTMLElementProps;
  ruby: HTMLElementProps;
  s: HTMLElementProps;
  samp: HTMLElementProps;
  script: ScriptProps;
  search: HTMLElementProps;
  section: HTMLElementProps;
  select: SelectProps;
  slot: SlotProps;
  small: HTMLElementProps;
  source: SourceProps;
  span: HTMLElementProps;
  strong: HTMLElementProps;
  style: StyleProps;
  sub: HTMLElementProps;
  summary: HTMLElementProps;
  sup: HTMLElementProps;
  table: TableProps;
  tbody: HTMLElementProps;
  td: TableCellProps;
  template: HTMLElementProps;
  textarea: TextAreaProps;
  tfoot: HTMLElementProps;
  th: TableCellProps;
  thead: HTMLElementProps;
  time: TimeProps;
  title: HTMLElementProps;
  tr: HTMLElementProps;
  track: TracksProps;
  u: HTMLElementProps;
  ul: HTMLElementProps;
  var: HTMLElementProps;
  video: VideoProps;
  wbr: HTMLElementProps;
}

// ===== ===== ===== ===== =====
// INTRINSIC ELEMENT
// ===== ===== ===== ===== =====

export type OptionalObs<T> = T | import("$src/Obs.js").Obs<T>;

export type ElementSpecificProps<T extends keyof HTMLElementTagNameMap> = {
  [K in keyof HTMLPropsTagNameMap[T]]?: OptionalObs<HTMLPropsTagNameMap[T][K]>
};

export type ClassRecord = Record<string, OptionalObs<boolean>>;

export type StyleRecord = {
  [K in keyof ExcludeMethods<CSSStyleDeclaration>]?: OptionalObs<string>;
};

export type IntrinsicElement<T extends keyof HTMLElementTagNameMap> =
  & ElementSpecificProps<T>
  & {
    className?: string | ClassRecord;
    style?: StyleRecord;
    is?: string;
    $init?: (element: HTMLElementTagNameMap[T]) => unknown;
    [key: `data-${string}`]: OptionalObs<string>;
  };

// ===== ===== ===== ===== =====
// COMPONENT
// ===== ===== ===== ===== =====

type Primitive = boolean | string | number | bigint | symbol | undefined | null;
export type ComponentChildren = RecursiveArray<Primitive | Node>;
export type Component = <T extends HTMLElement>(props: Record<string, unknown> & { children?: ComponentChildren; }) => T;