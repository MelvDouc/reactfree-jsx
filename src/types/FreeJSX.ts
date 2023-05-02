import {
  Alt,
  AutoComplete,
  Dimensions,
  Disableable,
  Href,
  Media,
  MinMax,
  Named,
  Rel,
  Required,
  Sourced,
  Targeter,
  Typed,
  Valued,
  WithReferrerPolicy
} from "@/types/common-props.js";
import { PossibleObs } from "@/types/Obs.js";
import { ExtraProps } from "@/types/extra-props.js";

export type { ExtraProps };

// ===== ===== ===== ===== =====
// INHERITED
// ===== ===== ===== ===== =====

type InlineListener = ((this: Element, ev: Event) => any) | null;

interface _ElemPropsNoSlot extends ARIAMixin, Omit<GlobalEventHandlers, "addEventListener" | "removeEventListener"> {
  id: string;
  onfullscreenchange: InlineListener;
  onfullscreenerror: InlineListener;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
  [dataAttribute: `data${string}`]: string;
}

interface _HTMLPropsNoTabIndex {
  autocapitalize: string;
  contentEditable: "true" | "false" | "inherit";
  dir: "ltr" | "rtl" | "auto" | string;
  draggable: boolean;
  enterKeyHint: "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
  hidden: boolean;
  inert: boolean;
  inputMode: "none" | "email" | "decimal" | "numeric" | "search" | "tel" | "text" | "url" | string;
  lang: string;
  spellcheck: boolean;
  title: string;
  translate: boolean;
}

export interface ElemProps extends _ElemPropsNoSlot {
  slot: string;
}

export interface HTMLProps extends ElemProps, _HTMLPropsNoTabIndex {
  tabIndex: string | number;
}

export interface Hyperlink extends Href, Targeter, WithReferrerPolicy {
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

export interface AnchorProps extends HTMLProps, Hyperlink, Named, Rel, Typed {
  download: string;
  hreflang: string;
}

export interface AreaProps extends HTMLProps, Alt, Hyperlink {
  coords: string;
  download: string;
  shape: string;
}

export interface BBaseProps extends HTMLProps, Href { }

export interface BodyProps extends ElemProps {
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

export interface ButtonProps extends HTMLProps, Named, Disableable, Typed, Valued {
  autofocus: boolean;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
}

export interface CanvasProps extends HTMLProps, Dimensions { }

export interface CitableProps extends HTMLProps {
  cite: string;
}

export interface DDataProps extends HTMLProps, Valued { }

export interface DetailsProps extends HTMLProps {
  open: boolean;
}

export interface DialogProps extends ElemProps, _HTMLPropsNoTabIndex { }
export interface EmbedProps extends HTMLProps, Dimensions, Sourced, Typed { }
export interface FieldSetProps extends HTMLProps, Named, Disableable { }

export interface FormProps extends HTMLProps, AutoComplete, Named, Targeter {
  acceptCharset: string;
  action: string;
  encoding: string;
  enctype: string;
  method: "get" | "post" | "dialog" | string;
  noValidate: boolean;
}

export interface IFrameProps extends HTMLProps, Named, Dimensions, Sourced, WithReferrerPolicy {
  allow: string;
  allowfullscreen: boolean;
  scrolling: string;
  srcdoc: string;
}

export interface ImageProps extends HTMLProps, Alt, Dimensions, Sourced, WithReferrerPolicy {
  crossOrigin: string | null;
  decoding: "async" | "sync" | "auto";
  isMap: boolean;
  loading: "eager" | "lazy";
  sizes: string;
}

export interface InputProps extends
  HTMLProps,
  Alt,
  AutoComplete,
  Dimensions,
  Disableable,
  MinMax,
  Named,
  Required,
  Sourced,
  Valued<true> {
  accept: string;
  capture: string;
  checked: boolean;
  defaultChecked: boolean;
  dirName: string;
  files: FileList | null;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
  indeterminate: boolean;
  readonly list: string;
  maxLength: number;
  minLength: number;
  multiple: boolean;
  pattern: string;
  placeholder: string;
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

export interface LabelProps extends HTMLProps {
  htmlFor: string;
}

export interface LiProps extends HTMLProps, Valued { }

export interface LinkProps extends HTMLProps, Disableable, Href, Media, Rel, Targeter, Typed, WithReferrerPolicy {
  as: string;
  crossOrigin: string | null;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
}

export interface MapProps extends HTMLProps, Named { }

export interface MetaProps extends HTMLProps, Named, Media {
  content: string;
  httpEquiv: string;
}

export interface MeterProps extends HTMLProps, MinMax, Valued {
  high: number;
  low: number;
  optimum: number;
}

export interface OlProps extends HTMLProps, Typed {
  reversed: boolean;
  start: number;
}

export interface OObjectProps extends HTMLProps, Named, Dimensions, Typed {
  data: string;
  standby: string;
  useMap: string;
}

export interface OptGroupProps extends HTMLProps, Disableable {
  label: string;
}

export interface OptionProps extends HTMLProps, Disableable, Valued {
  defaultSelected: boolean;
  label: string;
  selected: boolean;
}

export interface OutputProps extends HTMLProps, Named, Valued<true> { }

export interface ProgressProps extends HTMLProps {
  max: number;
  value: number;
}

export interface ScriptProps extends HTMLProps, Sourced, Typed, WithReferrerPolicy {
  async: boolean;
  crossOrigin: string;
  defer: boolean;
  integrity: string;
  noModule: boolean;
  text: string;
}

export interface SelectProps extends HTMLProps, AutoComplete, Disableable, Named, Required, Valued {
  multiple: boolean;
  selectedIndex: number;
  size: number;
}

export interface SlotProps extends ElemProps, _HTMLPropsNoTabIndex, Named { }
export interface StyleProps extends ElemProps, Disableable, Media { }

export interface SSourceProps extends HTMLProps, Dimensions, Media, Sourced, Typed {
  sizes: string;
  srcset: string;
}

export interface TableCellProps extends HTMLProps {
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

export interface TextareaProps extends HTMLProps, AutoComplete, Disableable, Named, Required, Valued<true> {
  cols: number;
  dirName: string;
  maxLength: number;
  minLength: number;
  placeholder: string;
  readOnly: boolean;
  rows: number;
  selectionDirection: "forward" | "backward" | "none" | string;
  selectionEnd: number;
  selectionStart: number;
  wrap: string;
};

export interface TimeProps extends HTMLProps {
  dateTime: string;
}

export interface TrackProps extends HTMLProps, Sourced {
  default: boolean;
  kind: string;
  label: string;
  srclang: string;
}

export interface VideoProps extends HTMLProps, Dimensions {
  disablePictureInPicture: boolean;
  onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  playsInline: boolean;
  poster: string;
}

// ===== ===== ===== ===== =====
// TAG NAME MAP
// ===== ===== ===== ===== =====

export interface HTMLPropsTagNameMap {
  a: AnchorProps;
  abbr: HTMLProps;
  address: HTMLProps;
  area: AreaProps;
  article: HTMLProps;
  aside: HTMLProps;
  audio: HTMLProps;
  b: HTMLProps;
  base: BBaseProps;
  bdi: HTMLProps;
  bdo: HTMLProps;
  blockquote: CitableProps;
  body: BodyProps;
  br: HTMLProps;
  button: ButtonProps;
  canvas: CanvasProps;
  caption: HTMLProps;
  cite: HTMLProps;
  code: HTMLProps;
  col: HTMLProps;
  colgroup: HTMLProps;
  data: DDataProps;
  datalist: HTMLProps;
  dd: HTMLProps;
  del: CitableProps;
  details: DetailsProps;
  dfn: HTMLProps;
  dialog: DialogProps;
  div: HTMLProps;
  dl: HTMLProps;
  dt: HTMLProps;
  em: HTMLProps;
  embed: EmbedProps;
  fieldset: FieldSetProps;
  figcaption: HTMLProps;
  figure: HTMLProps;
  footer: HTMLProps;
  form: FormProps;
  h1: HTMLProps;
  h2: HTMLProps;
  h3: HTMLProps;
  h4: HTMLProps;
  h5: HTMLProps;
  h6: HTMLProps;
  head: HTMLProps;
  header: HTMLProps;
  hgroup: HTMLProps;
  hr: HTMLProps;
  html: HTMLProps;
  i: HTMLProps;
  iframe: IFrameProps;
  img: ImageProps;
  input: InputProps;
  ins: CitableProps;
  kbd: HTMLProps;
  label: LabelProps;
  legend: HTMLProps;
  li: LiProps;
  link: LinkProps;
  main: HTMLProps;
  map: MapProps;
  mark: HTMLProps;
  menu: HTMLProps;
  meta: MetaProps;
  meter: MeterProps;
  nav: HTMLProps;
  noscript: HTMLProps;
  object: OObjectProps;
  ol: OlProps;
  optgroup: OptGroupProps;
  option: OptionProps;
  output: OutputProps;
  p: HTMLProps;
  picture: HTMLProps;
  pre: HTMLProps;
  progress: ProgressProps;
  q: CitableProps;
  rp: HTMLProps;
  rt: HTMLProps;
  ruby: HTMLProps;
  s: HTMLProps;
  samp: HTMLProps;
  script: ScriptProps;
  section: HTMLProps;
  select: SelectProps;
  slot: SlotProps;
  small: HTMLProps;
  source: SSourceProps;
  span: HTMLProps;
  strong: HTMLProps;
  style: StyleProps;
  sub: HTMLProps;
  summary: HTMLProps;
  sup: HTMLProps;
  table: HTMLProps;
  tbody: HTMLProps;
  td: TableCellProps;
  template: HTMLProps;
  textarea: TextareaProps;
  tfoot: HTMLProps;
  th: TableCellProps;
  thead: HTMLProps;
  time: TimeProps;
  title: HTMLProps;
  tr: HTMLProps;
  track: TrackProps;
  u: HTMLProps;
  ul: HTMLProps;
  var: HTMLProps;
  video: VideoProps;
  wbr: HTMLProps;
}

// ===== ===== ===== ===== =====
// INTRINSIC ELEMENTS
// ===== ===== ===== ===== =====

export type Props<T extends keyof IntrinsicElementsHTML> = Partial<IntrinsicElementsHTML[T]>;

export type IntrinsicElementsHTML = {
  [K in keyof HTMLPropsTagNameMap]: {
    [P in keyof HTMLPropsTagNameMap[K]]?: PossibleObs<HTMLPropsTagNameMap[K][P]>
  } & Partial<ExtraProps<K>>
};