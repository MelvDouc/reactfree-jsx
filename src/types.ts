// ===== ===== ===== ===== =====
// UTILS
// ===== ===== ===== ===== =====

type RecursiveArray<T> = T[] | RecursiveArray<T>[];

export type Obs<T> = import("$src/deps.ts").Observable<T>;
export type OptionalObs<T> = T | Obs<T>;

// ===== ===== ===== ===== =====
// NODES
// ===== ===== ===== ===== =====

/**
 * A primitive value that is the child of an element.
 * It will be omitted if it's false or nullish; otherwise it'll be converted to a text node.
 */
type Primitive = boolean | string | number | bigint | symbol | undefined | null;

/**
 * A value that's a node or can be converted to one
 * in order to be appended as a child of another node.
 */
type ReactFreeNode = Primitive | Node;

export type ObservableNode = Obs<ReactFreeNode | RecursiveArray<ReactFreeNode>>;
export type NonArrayNode = ReactFreeNode | ObservableNode;
export type ComponentChild = NonArrayNode | RecursiveArray<NonArrayNode>;
export type ComponentChildren = ComponentChild[];
export type ComponentParentProps = { children?: any; };
export type Component<P = {}> = (props: ComponentParentProps & P) => Node;

// ===== ===== ===== ===== =====
// PROPS
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

interface ElementProps extends ARIAProps, RFreeGlobalEventHandlers {
  autofocus: boolean;
  id: string;
  nonce: string;
  slot: string;
  scrollLeft: number;
  scrollTop: number;
  tabIndex: number;
}

interface HTMLElementProps extends ElementProps {
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
  popover: string | null;
  spellcheck: boolean;
  tabIndex: number;
  title: string;
  translate: boolean;
}

/* FORM */

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

/* Navigation */

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

/* Media */

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

/* Head */

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

/* List */

interface LiProps extends HTMLElementProps {
  value: string;
}

interface OlProps extends HTMLElementProps {
  reversed: boolean;
  start: number;
  type: string;
}

/* Table */

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

/* Others */

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

/* SVG */

export interface SVGElementProps extends ElementProps {
  "accent-height": string;
  accumulate: string;
  additive: string;
  "alignment-baseline": string;
  alphabetic: string;
  amplitude: string;
  "arabic-form": string;
  ascent: string;
  attributeName: string;
  attributeType: string;
  azimuth: string;
  baseFrequency: string;
  "baseline-shift": string;
  baseProfile: string;
  bbox: string;
  begin: string;
  bias: string;
  by: string;
  calcMode: string;
  "cap-height": string;
  class: string;
  clip: string;
  clipPathUnits: string;
  "clip-path": string;
  c: string;
  "lip-rule": string;
  color: string;
  "color-interpolation": string;
  "color-interpolation-filters": string;
  "color-rendering": string;
  crossorigin: string;
  cursor: string;
  cx: string;
  cy: string;
  d: string;
  decelerate: string;
  decoding: string;
  descent: string;
  diffuseConstant: string;
  direction: string;
  display: string;
  divisor: string;
  "dominant-baseline": string;
  dur: string;
  dx: string;
  dy: string;
  edgeMode: string;
  elevation: string;
  end: string;
  exponent: string;
  fill: string;
  "fill-opacity": string;
  "fill-rule": string;
  filter: string;
  filterUnits: string;
  "flood-color": string;
  "flood-opacity": string;
  "font-family": string;
  "font-size": string;
  "font-size-adjust": string;
  "font-stretch": string;
  "font-style": string;
  "font-variant": string;
  "font-weight": string;
  format: string;
  from: string;
  fr: string;
  fx: string;
  fy: string;
  g1: string;
  g2: string;
  "glyph-name": string;
  "glyph-orientation-horizontal": string;
  "glyph-orientation-vertical": string;
  glyphRef: string;
  gradientTransform: string;
  gradientUnits: string;
  hanging: string;
  height: string;
  href: string;
  hreflang: string;
  "horiz-adv-x": string;
  "horiz-origin-x": string;
  "horiz-origin-y": string;
  id: string;
  ideographic: string;
  "image-rendering": string;
  in: string;
  in2: string;
  intercept: string;
  k: string;
  k1: string;
  k2: string;
  k3: string;
  k4: string;
  kernelMatrix: string;
  kernelUnitLength: string;
  keyPoints: string;
  keySplines: string;
  keyTimes: string;
  lang: string;
  lengthAdjust: string;
  "letter-spacing": string;
  "lighting-color": string;
  limitingConeAngle: string;
  local: string;
  "marker-end": string;
  "marker-mid": string;
  "marker-start": string;
  markerHeight: string;
  markerUnits: string;
  markerWidth: string;
  mask: string;
  maskContentUnits: string;
  maskUnits: string;
  mathematical: string;
  max: string;
  media: string;
  method: string;
  min: string;
  mode: string;
  name: string;
  numOctaves: string;
  offset: string;
  opacity: string;
  operator: string;
  order: string;
  orient: string;
  orientation: string;
  origin: string;
  overflow: string;
  "overline-position": string;
  "overline-thickness": string;
  "panose-1": string;
  "paint-order": string;
  path: string;
  pathLength: string;
  patternContentUnits: string;
  patternTransform: string;
  patternUnits: string;
  ping: string;
  "pointer-events": string;
  points: string;
  pointsAtX: string;
  pointsAtY: string;
  pointsAtZ: string;
  preserveAlpha: string;
  preserveAspectRatio: string;
  primitiveUnits: string;
  r: string;
  radius: string;
  referrerPolicy: string;
  refX: string;
  refY: string;
  rel: string;
  "rendering-intent": string;
  repeatCount: string;
  repeatDur: string;
  requiredExtensions: string;
  requiredFeatures: string;
  restart: string;
  result: string;
  rotate: string;
  rx: string;
  ry: string;
  scale: string;
  seed: string;
  "shape-rendering": string;
  side: string;
  slope: string;
  spacing: string;
  specularConstant: string;
  specularExponent: string;
  speed: string;
  spreadMethod: string;
  startOffset: string;
  stdDeviation: string;
  stemh: string;
  stemv: string;
  stitchTiles: string;
  "stop-color": string;
  "stop-opacity": string;
  "strikethrough-position": string;
  "strikethrough-thickness": string;
  string: string;
  stroke: string;
  "stroke-dasharray": string;
  "stroke-dashoffset": string;
  "stroke-linecap": string;
  "stroke-linejoin": string;
  "stroke-miterlimit": string;
  "stroke-opacity": string;
  "stroke-width": string;
  style: string;
  surfaceScale: string;
  systemLanguage: string;
  tabindex: string;
  tableValues: string;
  target: string;
  targetX: string;
  targetY: string;
  "text-anchor": string;
  "text-decoration": string;
  "text-rendering": string;
  textLength: string;
  to: string;
  transform: string;
  "transform-origin": string;
  type: string;
  u1: string;
  u2: string;
  "underline-position": string;
  "underline-thickness": string;
  unicode: string;
  "unicode-bidi": string;
  "unicode-range": string;
  "units-per-em": string;
  "v-alphabetic": string;
  "v-hanging": string;
  "v-ideographic": string;
  "v-mathematical": string;
  values: string;
  "vector-effect": string;
  version: string;
  "vert-adv-y": string;
  "vert-origin-x": string;
  "vert-origin-y": string;
  viewBox: string;
  visibility: string;
  width: string;
  widths: string;
  "word-spacing": string;
  "writing-mode": string;
  x: string;
  "x-height": string;
  x1: string;
  x2: string;
  xChannelSelector: string;
  "xlink:actuate": string;
  "xlink:arcrole": string;
  "xlink:href Deprecated": string;
  "xlink:role": string;
  "xlink:show": string;
  "xlink:title": string;
  "xlink:type": string;
  "xml:lang": string;
  "xml:space": string;
  xmlns: string;
  y: string;
  y1: string;
  y2: string;
  yChannelSelector: string;
  z: string;
  zoomAndPan: string;
}

/* Tag name map */

type HTMLPropsTagNameMap = {
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
};

type SVGPropsTagNameMap = {
  [K in keyof SVGElementTagNameMap]: SVGElementProps;
};

export type ElementPropsTagNameMap = HTMLPropsTagNameMap & SVGPropsTagNameMap;

/* Intrinsic */

export type TagName = keyof ElementPropsTagNameMap;

export type TagNameToElement<T extends TagName> =
  T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T]
  : T extends keyof SVGElementTagNameMap ? SVGElementTagNameMap[T]
  : Element;

export type ElementSpecificProps<T extends TagName> = {
  [K in keyof ElementPropsTagNameMap[T]]?: OptionalObs<ElementPropsTagNameMap[T][K]>
};

export type ClassRecord = Record<string, OptionalObs<boolean>>;

export type StyleAttribute = "accentColor" | "alignContent" | "alignItems" | "alignSelf" | "alignmentBaseline" | "all" | "animation" | "animationComposition" | "animationDelay" | "animationDirection" | "animationDuration" | "animationFillMode" | "animationIterationCount" | "animationName" | "animationPlayState" | "animationTimingFunction" | "appearance" | "aspectRatio" | "backdropFilter" | "backfaceVisibility" | "background" | "backgroundAttachment" | "backgroundBlendMode" | "backgroundClip" | "backgroundColor" | "backgroundImage" | "backgroundOrigin" | "backgroundPosition" | "backgroundPositionX" | "backgroundPositionY" | "backgroundRepeat" | "backgroundSize" | "baselineShift" | "baselineSource" | "blockSize" | "border" | "borderBlock" | "borderBlockColor" | "borderBlockEnd" | "borderBlockEndColor" | "borderBlockEndStyle" | "borderBlockEndWidth" | "borderBlockStart" | "borderBlockStartColor" | "borderBlockStartStyle" | "borderBlockStartWidth" | "borderBlockStyle" | "borderBlockWidth" | "borderBottom" | "borderBottomColor" | "borderBottomLeftRadius" | "borderBottomRightRadius" | "borderBottomStyle" | "borderBottomWidth" | "borderCollapse" | "borderColor" | "borderEndEndRadius" | "borderEndStartRadius" | "borderImage" | "borderImageOutset" | "borderImageRepeat" | "borderImageSlice" | "borderImageSource" | "borderImageWidth" | "borderInline" | "borderInlineColor" | "borderInlineEnd" | "borderInlineEndColor" | "borderInlineEndStyle" | "borderInlineEndWidth" | "borderInlineStart" | "borderInlineStartColor" | "borderInlineStartStyle" | "borderInlineStartWidth" | "borderInlineStyle" | "borderInlineWidth" | "borderLeft" | "borderLeftColor" | "borderLeftStyle" | "borderLeftWidth" | "borderRadius" | "borderRight" | "borderRightColor" | "borderRightStyle" | "borderRightWidth" | "borderSpacing" | "borderStartEndRadius" | "borderStartStartRadius" | "borderStyle" | "borderTop" | "borderTopColor" | "borderTopLeftRadius" | "borderTopRightRadius" | "borderTopStyle" | "borderTopWidth" | "borderWidth" | "bottom" | "boxShadow" | "boxSizing" | "breakAfter" | "breakBefore" | "breakInside" | "captionSide" | "caretColor" | "clear" | "clipPath" | "clipRule" | "color" | "colorInterpolation" | "colorInterpolationFilters" | "colorScheme" | "columnCount" | "columnFill" | "columnGap" | "columnRule" | "columnRuleColor" | "columnRuleStyle" | "columnRuleWidth" | "columnSpan" | "columnWidth" | "columns" | "contain" | "containIntrinsicBlockSize" | "containIntrinsicHeight" | "containIntrinsicInlineSize" | "containIntrinsicSize" | "containIntrinsicWidth" | "container" | "containerName" | "containerType" | "content" | "counterIncrement" | "counterReset" | "counterSet" | "cssFloat" | "cssText" | "cursor" | "cx" | "cy" | "d" | "direction" | "display" | "dominantBaseline" | "emptyCells" | "fill" | "fillOpacity" | "fillRule" | "filter" | "flex" | "flexBasis" | "flexDirection" | "flexFlow" | "flexGrow" | "flexShrink" | "flexWrap" | "float" | "floodColor" | "floodOpacity" | "font" | "fontFamily" | "fontFeatureSettings" | "fontKerning" | "fontOpticalSizing" | "fontPalette" | "fontSize" | "fontSizeAdjust" | "fontStretch" | "fontStyle" | "fontSynthesis" | "fontSynthesisSmallCaps" | "fontSynthesisStyle" | "fontSynthesisWeight" | "fontVariant" | "fontVariantAlternates" | "fontVariantCaps" | "fontVariantEastAsian" | "fontVariantLigatures" | "fontVariantNumeric" | "fontVariantPosition" | "fontVariationSettings" | "fontWeight" | "forcedColorAdjust" | "gap" | "grid" | "gridArea" | "gridAutoColumns" | "gridAutoFlow" | "gridAutoRows" | "gridColumn" | "gridColumnEnd" | "gridColumnStart" | "gridRow" | "gridRowEnd" | "gridRowStart" | "gridTemplate" | "gridTemplateAreas" | "gridTemplateColumns" | "gridTemplateRows" | "height" | "hyphenateCharacter" | "hyphens" | "imageRendering" | "inlineSize" | "inset" | "insetBlock" | "insetBlockEnd" | "insetBlockStart" | "insetInline" | "insetInlineEnd" | "insetInlineStart" | "isolation" | "justifyContent" | "justifyItems" | "justifySelf" | "left" | "letterSpacing" | "lightingColor" | "lineBreak" | "lineHeight" | "listStyle" | "listStyleImage" | "listStylePosition" | "listStyleType" | "margin" | "marginBlock" | "marginBlockEnd" | "marginBlockStart" | "marginBottom" | "marginInline" | "marginInlineEnd" | "marginInlineStart" | "marginLeft" | "marginRight" | "marginTop" | "marker" | "markerEnd" | "markerMid" | "markerStart" | "mask" | "maskClip" | "maskComposite" | "maskImage" | "maskMode" | "maskOrigin" | "maskPosition" | "maskRepeat" | "maskSize" | "maskType" | "mathDepth" | "mathStyle" | "maxBlockSize" | "maxHeight" | "maxInlineSize" | "maxWidth" | "minBlockSize" | "minHeight" | "minInlineSize" | "minWidth" | "mixBlendMode" | "objectFit" | "objectPosition" | "offset" | "offsetAnchor" | "offsetDistance" | "offsetPath" | "offsetPosition" | "offsetRotate" | "opacity" | "order" | "orphans" | "outline" | "outlineColor" | "outlineOffset" | "outlineStyle" | "outlineWidth" | "overflow" | "overflowAnchor" | "overflowClipMargin" | "overflowWrap" | "overflowX" | "overflowY" | "overscrollBehavior" | "overscrollBehaviorBlock" | "overscrollBehaviorInline" | "overscrollBehaviorX" | "overscrollBehaviorY" | "padding" | "paddingBlock" | "paddingBlockEnd" | "paddingBlockStart" | "paddingBottom" | "paddingInline" | "paddingInlineEnd" | "paddingInlineStart" | "paddingLeft" | "paddingRight" | "paddingTop" | "page" | "pageBreakAfter" | "pageBreakBefore" | "pageBreakInside" | "paintOrder" | "perspective" | "perspectiveOrigin" | "placeContent" | "placeItems" | "placeSelf" | "pointerEvents" | "position" | "printColorAdjust" | "quotes" | "r" | "resize" | "right" | "rotate" | "rowGap" | "rubyPosition" | "rx" | "ry" | "scale" | "scrollBehavior" | "scrollMargin" | "scrollMarginBlock" | "scrollMarginBlockEnd" | "scrollMarginBlockStart" | "scrollMarginBottom" | "scrollMarginInline" | "scrollMarginInlineEnd" | "scrollMarginInlineStart" | "scrollMarginLeft" | "scrollMarginRight" | "scrollMarginTop" | "scrollPadding" | "scrollPaddingBlock" | "scrollPaddingBlockEnd" | "scrollPaddingBlockStart" | "scrollPaddingBottom" | "scrollPaddingInline" | "scrollPaddingInlineEnd" | "scrollPaddingInlineStart" | "scrollPaddingLeft" | "scrollPaddingRight" | "scrollPaddingTop" | "scrollSnapAlign" | "scrollSnapStop" | "scrollSnapType" | "scrollbarColor" | "scrollbarGutter" | "scrollbarWidth" | "shapeImageThreshold" | "shapeMargin" | "shapeOutside" | "shapeRendering" | "stopColor" | "stopOpacity" | "stroke" | "strokeDasharray" | "strokeDashoffset" | "strokeLinecap" | "strokeLinejoin" | "strokeMiterlimit" | "strokeOpacity" | "strokeWidth" | "tabSize" | "tableLayout" | "textAlign" | "textAlignLast" | "textAnchor" | "textCombineUpright" | "textDecoration" | "textDecorationColor" | "textDecorationLine" | "textDecorationSkipInk" | "textDecorationStyle" | "textDecorationThickness" | "textEmphasis" | "textEmphasisColor" | "textEmphasisPosition" | "textEmphasisStyle" | "textIndent" | "textOrientation" | "textOverflow" | "textRendering" | "textShadow" | "textTransform" | "textUnderlineOffset" | "textUnderlinePosition" | "textWrap" | "top" | "touchAction" | "transform" | "transformBox" | "transformOrigin" | "transformStyle" | "transition" | "transitionDelay" | "transitionDuration" | "transitionProperty" | "transitionTimingFunction" | "translate" | "unicodeBidi" | "userSelect" | "vectorEffect" | "verticalAlign" | "visibility" | "webkitTextStroke" | "webkitTextStrokeColor" | "webkitTextStrokeWidth" | "whiteSpace" | "widows" | "width" | "willChange" | "wordBreak" | "wordSpacing" | "writingMode" | "x" | "y" | "zIndex";

export type StyleRecord = {
  [K in StyleAttribute]?: OptionalObs<string>;
};

export type IntrinsicElement<T extends TagName> =
  & ElementSpecificProps<T>
  & ComponentParentProps
  & {
    className?: string | ClassRecord;
    style?: StyleRecord;
    is?: string;
    $init?: (element: TagNameToElement<T>) => unknown;
    [key: `data-${string}`]: OptionalObs<string>;
  };