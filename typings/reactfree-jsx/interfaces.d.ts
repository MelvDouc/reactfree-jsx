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