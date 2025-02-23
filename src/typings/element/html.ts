import type { OptionalObs } from "$src/props/obs.js";
import type { ElementProps } from "$src/typings/element.js";

type AreaShape = "rect" | "circle" | "poly" | "default";
type AutoCapitalize = "" | "off" | "none" | "on" | "sentences" | "words" | "characters";
type Dir = "" | "auto" | "ltr" | "rtl";
type EnterKeyHint = "" | "enter" | "done" | "go" | "next" | "previous" | "search" | "send";
type ButtonType = "submit" | "reset" | "button";
type Preload = "none" | "metadata" | "auto" | "";
type ImgDecoding = "async" | "sync" | "auto";
type ImgLoading = "eager" | "lazy";
type FetchPriority = "auto" | "high" | "low";
type SelectionDirection = "forward" | "backward" | "none";

interface HTMLElementProps<T extends HTMLElement = HTMLElement> extends ElementProps<T> {
  accessKey?: OptionalObs<string>;
  autocapitalize?: OptionalObs<AutoCapitalize>;
  contentEditable?: OptionalObs<string>;
  dir?: OptionalObs<Dir>;
  enterKeyHint?: OptionalObs<EnterKeyHint>;
  hidden?: OptionalObs<boolean>;
  inert?: OptionalObs<boolean>;
  inputMode?: OptionalObs<string>;
  lang?: OptionalObs<string>;
  popover?: OptionalObs<string | null>;
  spellcheck?: OptionalObs<boolean>;
  title?: OptionalObs<string>;
  translate?: OptionalObs<boolean>;
}

/* FORM */

interface PopoverInvokerProps<T extends HTMLElement> extends HTMLElementProps<T> {
  disabled?: OptionalObs<boolean>;
  formAction?: OptionalObs<string>;
  formEnctype?: OptionalObs<string>;
  formMethod?: OptionalObs<string>;
  formNoValidate?: OptionalObs<boolean>;
  name?: OptionalObs<string>;
  popoverTargetAction?: OptionalObs<string>;
  popoverTargetElement?: OptionalObs<Element | null>;
  value?: OptionalObs<string>;
}

interface ButtonProps extends PopoverInvokerProps<HTMLButtonElement> {
  formTarget?: OptionalObs<string>;
  type?: OptionalObs<ButtonType>;
}

interface FormProps extends HTMLElementProps<HTMLFormElement> {
  acceptCharset?: OptionalObs<string>;
  action?: OptionalObs<string>;
  autocomplete?: OptionalObs<AutoFillBase>;
  encoding?: OptionalObs<string>;
  enctype?: OptionalObs<string>;
  method?: OptionalObs<string>;
  name?: OptionalObs<string>;
  noValidate?: OptionalObs<boolean>;
  rel?: OptionalObs<string>;
  target?: OptionalObs<string>;
}

interface FieldSetProps extends HTMLElementProps<HTMLFieldSetElement> {
  disabled?: OptionalObs<boolean>;
  name?: OptionalObs<string>;
}

interface InputProps extends PopoverInvokerProps<HTMLInputElement> {
  accept?: OptionalObs<string>;
  align?: OptionalObs<string>;
  alt?: OptionalObs<string>;
  autocomplete?: OptionalObs<AutoFill>;
  capture?: OptionalObs<string>;
  checked?: OptionalObs<boolean>;
  defaultChecked?: OptionalObs<boolean>;
  defaultValue?: OptionalObs<string>;
  dirName?: OptionalObs<string>;
  formTarget?: OptionalObs<string>;
  height?: OptionalObs<number>;
  indeterminate?: OptionalObs<boolean>;
  list?: OptionalObs<string>;
  max?: OptionalObs<number | string>;
  maxLength?: OptionalObs<number>;
  min?: OptionalObs<number | string>;
  minLength?: OptionalObs<number>;
  multiple?: OptionalObs<boolean>;
  pattern?: OptionalObs<string>;
  placeholder?: OptionalObs<string>;
  readOnly?: OptionalObs<boolean>;
  required?: OptionalObs<boolean>;
  selectionDirection?: OptionalObs<SelectionDirection | null>;
  selectionEnd?: OptionalObs<number | null>;
  selectionStart?: OptionalObs<number | null>;
  size?: OptionalObs<number>;
  src?: OptionalObs<string>;
  step?: OptionalObs<string>;
  type?: OptionalObs<string>;
  width?: OptionalObs<number>;
}

interface LabelProps extends HTMLElementProps<HTMLLabelElement> {
  htmlFor?: OptionalObs<string>;
}

interface MeterProps extends HTMLElementProps<HTMLMeterElement> {
  high?: OptionalObs<number>;
  low?: OptionalObs<number>;
  max?: OptionalObs<number>;
  min?: OptionalObs<number>;
  optimum?: OptionalObs<number>;
  value?: OptionalObs<number>;
}

interface OptGroupProps extends HTMLElementProps<HTMLOptGroupElement> {
  disabled?: OptionalObs<boolean>;
  label?: OptionalObs<string>;
}

interface OptionProps extends HTMLElementProps<HTMLOptionElement> {
  defaultSelected?: OptionalObs<boolean>;
  disabled?: OptionalObs<boolean>;
  label?: OptionalObs<string>;
  selected?: OptionalObs<boolean>;
  value?: OptionalObs<string>;
}

interface OutputProps extends HTMLElementProps<HTMLOutputElement> {
  defaultValue?: OptionalObs<string>;
  name?: OptionalObs<string>;
  value?: OptionalObs<string>;
}

interface ProgressProps extends HTMLElementProps<HTMLProgressElement> {
  max?: OptionalObs<number>;
  value?: OptionalObs<number>;
}

interface SelectProps extends HTMLElementProps<HTMLSelectElement> {
  autocomplete?: OptionalObs<AutoFill>;
  disabled?: OptionalObs<boolean>;
  length?: OptionalObs<number>;
  multiple?: OptionalObs<boolean>;
  name?: OptionalObs<string>;
  required?: OptionalObs<boolean>;
  selectedIndex?: OptionalObs<number>;
  size?: OptionalObs<number>;
  value?: OptionalObs<string>;
}

interface TextAreaProps extends HTMLElementProps<HTMLTextAreaElement> {
  autocomplete?: OptionalObs<AutoFill>;
  cols?: OptionalObs<number>;
  defaultValue?: OptionalObs<string>;
  dirName?: OptionalObs<string>;
  disabled?: OptionalObs<boolean>;
  maxLength?: OptionalObs<number>;
  minLength?: OptionalObs<number>;
  name?: OptionalObs<string>;
  placeholder?: OptionalObs<string>;
  readOnly?: OptionalObs<boolean>;
  required?: OptionalObs<boolean>;
  rows?: OptionalObs<number>;
  selectionDirection?: OptionalObs<SelectionDirection>;
  selectionEnd?: OptionalObs<number>;
  selectionStart?: OptionalObs<number>;
  wrap?: OptionalObs<string>;
  value?: OptionalObs<string>;
}

/* Navigation */

interface NavigableProps<T extends HTMLElement> extends HTMLElementProps<T> {
  download?: OptionalObs<string>;
  hash?: OptionalObs<string>;
  host?: OptionalObs<string>;
  hostname?: OptionalObs<string>;
  href?: OptionalObs<string>;
  password?: OptionalObs<string>;
  pathname?: OptionalObs<string>;
  ping?: OptionalObs<string>;
  port?: OptionalObs<string>;
  protocol?: OptionalObs<string>;
  referrerPolicy?: OptionalObs<string>;
  rel?: OptionalObs<string>;
  search?: OptionalObs<string>;
  username?: OptionalObs<string>;
  target?: OptionalObs<string>;
}

interface AnchorProps extends NavigableProps<HTMLAnchorElement> {
  hreflang?: OptionalObs<string>;
  type?: OptionalObs<string>;
}

interface AreaProps extends NavigableProps<HTMLAreaElement> {
  alt?: OptionalObs<string>;
  coords?: OptionalObs<string>;
  shape?: OptionalObs<AreaShape>;
}

interface MapProps extends HTMLElementProps<HTMLMapElement> {
  name?: OptionalObs<string>;
}

/* Media */

interface MediaProps<T extends HTMLMediaElement> extends HTMLElementProps<T> {
  autoplay?: OptionalObs<boolean>;
  controls?: OptionalObs<boolean>;
  crossOrigin?: OptionalObs<string | null>;
  currentTime?: OptionalObs<number>;
  defaultMuted?: OptionalObs<boolean>;
  defaultPlaybackRate?: OptionalObs<number>;
  disableRemotePlayback?: OptionalObs<boolean>;
  loop?: OptionalObs<boolean>;
  muted?: OptionalObs<boolean>;
  onencrypted?: OptionalObs<HTMLMediaElement["onencrypted"]>;
  onwaitingforkey?: OptionalObs<HTMLMediaElement["onwaitingforkey"]>;
  playbackRate?: OptionalObs<number>;
  preload?: OptionalObs<Preload>;
  preservesPitch?: OptionalObs<boolean>;
  src?: OptionalObs<string>;
  srcObject?: OptionalObs<MediaProvider | null>;
  volume?: OptionalObs<number>;
}

interface AudioProps extends MediaProps<HTMLAudioElement> { }

interface EmbedProps extends HTMLElementProps<HTMLEmbedElement> {
  height?: OptionalObs<number>;
  src?: OptionalObs<string>;
  type?: OptionalObs<string>;
  width?: OptionalObs<number>;
}

interface SourceProps extends HTMLElementProps<HTMLSourceElement> {
  height?: OptionalObs<number>;
  media?: OptionalObs<string>;
  sizes?: OptionalObs<string>;
  src?: OptionalObs<string>;
  srcset?: OptionalObs<string>;
  type?: OptionalObs<string>;
  width?: OptionalObs<number>;
}

interface TrackProps extends HTMLElementProps<HTMLTrackElement> {
  default?: OptionalObs<boolean>;
  kind?: OptionalObs<string>;
  label?: OptionalObs<string>;
  src?: OptionalObs<string>;
  srclang?: OptionalObs<string>;
}

interface VideoProps extends MediaProps<HTMLVideoElement> {
  disablePictureInPicture?: OptionalObs<boolean>;
  height?: OptionalObs<number>;
  onenterpictureinpicture?: OptionalObs<HTMLVideoElement["onenterpictureinpicture"]>;
  onleavepictureinpicture?: OptionalObs<HTMLVideoElement["onleavepictureinpicture"]>;
  playsInline?: OptionalObs<boolean>;
  poster?: OptionalObs<string>;
  width?: OptionalObs<number>;
}

/* Head */

interface BaseProps extends HTMLElementProps<HTMLBaseElement> {
  href?: OptionalObs<string>;
  target?: OptionalObs<string>;
}

interface LinkProps extends HTMLElementProps<HTMLLinkElement> {
  as?: OptionalObs<string>;
  crossOrigin?: OptionalObs<string | null>;
  disabled?: OptionalObs<boolean>;
  href?: OptionalObs<string>;
  hreflang?: OptionalObs<string>;
  imageSizes?: OptionalObs<string>;
  imageSrcset?: OptionalObs<string>;
  integrity?: OptionalObs<string>;
  media?: OptionalObs<string>;
  referrerPolicy?: OptionalObs<string>;
  rel?: OptionalObs<string>;
  rev?: OptionalObs<string>;
  target?: OptionalObs<string>;
  type?: OptionalObs<string>;
}

interface MetaProps extends HTMLElementProps<HTMLMetaElement> {
  content?: OptionalObs<string>;
  httpEquiv?: OptionalObs<string>;
  media?: OptionalObs<string>;
  name?: OptionalObs<string>;
}

interface ScriptProps extends HTMLElementProps<HTMLScriptElement> {
  async?: OptionalObs<boolean>;
  crossOrigin?: OptionalObs<string | null>;
  defer?: OptionalObs<boolean>;
  href?: OptionalObs<string>;
  integrity?: OptionalObs<string>;
  noModule?: OptionalObs<boolean>;
  referrerPolicy?: OptionalObs<string>;
  src?: OptionalObs<string>;
  type?: OptionalObs<string>;
}

interface StyleProps extends HTMLElementProps<HTMLStyleElement> {
  disabled?: OptionalObs<boolean>;
  media?: OptionalObs<string>;
  title?: OptionalObs<string>;
}

/* List */

interface LiProps extends HTMLElementProps<HTMLLIElement> {
  value?: OptionalObs<string>;
}

interface OlProps extends HTMLElementProps<HTMLOListElement> {
  reversed?: OptionalObs<boolean>;
  start?: OptionalObs<number>;
  type?: OptionalObs<string>;
}

/* Table */

interface TableProps extends HTMLElementProps<HTMLTableElement> {
  caption?: OptionalObs<HTMLTableCaptionElement | null>;
  frame?: OptionalObs<string>;
}

interface TableCellProps extends HTMLElementProps<HTMLTableCellElement> {
  abbr?: OptionalObs<string>;
  colSpan?: OptionalObs<number>;
  headers?: OptionalObs<string>;
  rowSpan?: OptionalObs<number>;
  scope?: OptionalObs<string>;
}

interface TableColProps extends HTMLElementProps<HTMLTableColElement> {
  span?: OptionalObs<number>;
}

/* Others */

interface CanvasProps extends HTMLElementProps<HTMLCanvasElement> {
  height?: OptionalObs<number>;
  width?: OptionalObs<number>;
}

interface DataProps extends HTMLElementProps<HTMLDataElement> {
  value?: OptionalObs<string>;
}

interface DetailsProps extends HTMLElementProps<HTMLDetailsElement> {
  open?: OptionalObs<boolean>;
}

interface DialogProps extends HTMLElementProps<HTMLDialogElement> {
  open?: OptionalObs<boolean>;
  returnValue?: OptionalObs<string>;
}

interface IFrameProps extends HTMLElementProps<HTMLIFrameElement> {
  allow?: OptionalObs<string>;
  allowFullscreen?: OptionalObs<boolean>;
  frameBorder?: OptionalObs<string>;
  height?: OptionalObs<string>;
  loading?: OptionalObs<string>;
  longDesc?: OptionalObs<string>;
  marginHeight?: OptionalObs<string>;
  marginWidth?: OptionalObs<string>;
  name?: OptionalObs<string>;
  referrerPolicy?: OptionalObs<ReferrerPolicy>;
  scrolling?: OptionalObs<string>;
  src?: OptionalObs<string>;
  srcdoc?: OptionalObs<string>;
  width?: OptionalObs<string>;
}

interface ImgProps extends HTMLElementProps<HTMLImageElement> {
  alt?: OptionalObs<string>;
  border?: OptionalObs<string>;
  crossOrigin?: OptionalObs<string | null>;
  decoding?: OptionalObs<ImgDecoding>;
  fetchPriority?: OptionalObs<FetchPriority>;
  height?: OptionalObs<number>;
  isMap?: OptionalObs<boolean>;
  loading?: OptionalObs<ImgLoading>;
  referrerPolicy?: OptionalObs<ReferrerPolicy>;
  sizes?: OptionalObs<string>;
  src?: OptionalObs<string>;
  srcset?: OptionalObs<string>;
  useMap?: OptionalObs<string>;
  width?: OptionalObs<number>;
}

interface ModProps extends HTMLElementProps<HTMLModElement> {
  cite?: OptionalObs<string>;
  dateTime?: OptionalObs<string>;
}

interface ObjectProps extends HTMLElementProps<HTMLObjectElement> {
  data?: OptionalObs<string>;
  height?: OptionalObs<string>;
  name?: OptionalObs<string>;
  standby?: OptionalObs<string>;
  type?: OptionalObs<string>;
  useMap?: OptionalObs<string>;
  vspace?: OptionalObs<number>;
  width?: OptionalObs<string>;
}

interface QuoteProps extends HTMLElementProps<HTMLQuoteElement> {
  cite?: OptionalObs<string>;
}

interface SlotProps extends HTMLElementProps<HTMLSlotElement> {
  name?: OptionalObs<string>;
}

interface TimeProps extends HTMLElementProps<HTMLTimeElement> {
  dateTime?: OptionalObs<string>;
}

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
  track: TrackProps;
  u: HTMLElementProps;
  ul: HTMLElementProps<HTMLUListElement>;
  var: HTMLElementProps;
  video: VideoProps;
  wbr: HTMLElementProps;
}