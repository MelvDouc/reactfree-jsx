import elementSetters, {
  createAttributeSetter,
  eventListenerProperty,
  type ImgDecoding,
  type InferPropsTable
} from "$src/core/props/setters/element-setters.js";

function propertySetter<V>(key: string) {
  return (element: HTMLElement, value: V) => {
    (element as any)[key] = value;
  };
}

const autocomplete = propertySetter<AutoFillBase>("autocomplete");
const disabled = propertySetter<boolean>("disabled");
const href = propertySetter<string>("href");
const name = propertySetter<string>("name");
const open = propertySetter<boolean>("open");
const src = propertySetter<string>("src");
const type = propertySetter<string>("type");
const value = propertySetter<string>("value");

const htmlElementSetters = {
  ...elementSetters,
  accessKey: propertySetter<string>("accessKey"),
  autocapitalize: propertySetter<Autocapitalize>("autocapitalize"),
  autocorrect: createAttributeSetter<Autocorrect>("autocorrect"),
  contentEditable: propertySetter<ContentEditable>("contentEditable"),
  dir: propertySetter<Dir>("dir"),
  draggable: propertySetter<boolean>("draggable"),
  enterKeyHint: propertySetter<EnterKeyHint>("enterKeyHint"),
  hidden: propertySetter<boolean>("hidden"),
  inert: propertySetter<boolean>("inert"),
  inputMode: propertySetter<string>("inputMode"),
  itemId: createAttributeSetter("itemid"),
  itemProp: createAttributeSetter("itemprop"),
  itemRef: createAttributeSetter("itemref"),
  itemScope: createAttributeSetter("itemscope"),
  itemType: createAttributeSetter("itemtype"),
  lang: propertySetter<string>("lang"),
  part: createAttributeSetter("part"),
  popover: propertySetter<string | null>("popover"),
  spellcheck: propertySetter<boolean>("spellcheck"),
  title: propertySetter("title"),
  translate: propertySetter<boolean>("translate"),
  writingSuggestions: propertySetter<string>("writingSuggestions")
};

const popoverInvokerSetters = {
  ...htmlElementSetters,
  disabled,
  formAction: propertySetter<string>("formAction"),
  formEnctype: propertySetter<string>("formEnctype"),
  formMethod: propertySetter<string>("formMethod"),
  formNoValidate: propertySetter<boolean>("formNoValidate"),
  popoverTargetAction: propertySetter<string>("popoverTargetAction"),
  popoverTargetElement: propertySetter<Element | null>("popoverTargetElement"),
  value
};

const buttonSetters = {
  ...popoverInvokerSetters,
  formTarget: propertySetter<string>("formTarget"),
  type: propertySetter<ButtonType>("type")
};

const formSetters = {
  ...htmlElementSetters,
  acceptCharset: propertySetter<string>("acceptCharset"),
  action: propertySetter<string>("action"),
  autocomplete,
  encoding: propertySetter<string>("encoding"),
  enctype: propertySetter<string>("enctype"),
  method: propertySetter<string>("method"),
  name,
  noValidate: propertySetter<boolean>("noValidate"),
  rel: propertySetter<string>("rel"),
  target: propertySetter<string>("target")
};

const fieldsetSetters = {
  ...htmlElementSetters,
  disabled,
  name
};

const inputSetters = {
  ...popoverInvokerSetters,
  accept: propertySetter<string>("accept"),
  alt: propertySetter<string>("alt"),
  autocomplete,
  capture: propertySetter<string>("capture"),
  checked: propertySetter<boolean>("checked"),
  defaultChecked: propertySetter<boolean>("defaultChecked"),
  defaultValue: (e: HTMLInputElement, v: string | number) => e.defaultValue = String(v),
  dirName: propertySetter<string>("dirName"),
  formTarget: propertySetter<string>("formTarget"),
  height: propertySetter<number>("height"),
  indeterminate: propertySetter<boolean>("indeterminate"),
  list: createAttributeSetter("list"),
  max: (e: HTMLInputElement, v: string | number) => e.max = String(v),
  maxLength: propertySetter<number>("maxLength"),
  multiple: propertySetter<boolean>("multiple"),
  name,
  pattern: propertySetter<string>("pattern"),
  placeholder: propertySetter<string>("placeholder"),
  readOnly: propertySetter<boolean>("readOnly"),
  required: propertySetter<boolean>("required"),
  selectionDirection: propertySetter<SelectionDirection | null>("selectionDirection"),
  selectionEnd: propertySetter<number | null>("selectionEnd"),
  selectionStart: propertySetter<number | null>("selectionStart"),
  size: propertySetter<number>("size"),
  step: propertySetter<string>("step"),
  type,
  width: propertySetter<number>("width")
};

const labelSetters = {
  ...htmlElementSetters,
  htmlFor: propertySetter<string>("htmlFor")
};

const meterSetters = {
  ...htmlElementSetters,
  high: propertySetter<number>("high"),
  low: propertySetter<number>("low"),
  max: propertySetter<number>("max"),
  min: propertySetter<number>("min"),
  optimum: propertySetter<number>("optimum"),
  value
};

const optGroupSetters = {
  ...htmlElementSetters,
  disabled,
  label: propertySetter<string>("label")
};

const optionSetters = {
  ...htmlElementSetters,
  defaultSelected: propertySetter<boolean>("defaultSelected"),
  disabled,
  label: propertySetter<string>("label"),
  selected: propertySetter<boolean>("selected"),
  value
};

const outputSetters = {
  ...htmlElementSetters,
  defaultValue: propertySetter<string>("defaultValue"),
  name,
  value
};

const progressSetters = {
  ...htmlElementSetters,
  max: propertySetter<number>("max"),
  value: propertySetter<number>("value")
};

const selectSetters = {
  ...htmlElementSetters,
  autocomplete: propertySetter<AutoFill>("autocomplete"),
  disabled,
  length: propertySetter<number>("length"),
  multiple: propertySetter<boolean>("multiple"),
  name,
  required: propertySetter<boolean>("required"),
  size: propertySetter<number>("size"),
  value
};

const textareaSetters = {
  ...htmlElementSetters,
  autocomplete: propertySetter<AutoFill>("autocomplete"),
  cols: propertySetter<number>("cols"),
  defaultValue: propertySetter<string>("defaultValue"),
  dirName: propertySetter<string>("dirName"),
  disabled,
  maxLength: propertySetter<number>("maxLength"),
  minLength: propertySetter<number>("minLength"),
  name,
  placeholder: propertySetter<string>("placeholder"),
  readOnly: propertySetter<boolean>("readOnly"),
  required: propertySetter<boolean>("required"),
  rows: propertySetter<number>("rows"),
  selectionDirection: propertySetter<SelectionDirection>("selectionDirection"),
  selectionEnd: propertySetter<number>("selectionEnd"),
  selectionStart: propertySetter<number>("selectionStart"),
  wrap: propertySetter<string>("wrap"),
  value
};

const navigableSetters = {
  ...htmlElementSetters,
  download: propertySetter<string>("download"),
  hash: propertySetter<string>("hash"),
  host: propertySetter<string>("host"),
  hostname: propertySetter<string>("hostname"),
  href,
  password: propertySetter<string>("password"),
  pathname: propertySetter<string>("pathname"),
  ping: propertySetter<string>("ping"),
  port: propertySetter<string>("port"),
  protocol: propertySetter<string>("protocol"),
  referrerPolicy: propertySetter<string>("referrerPolicy"),
  rel: propertySetter<string>("rel"),
  search: propertySetter<string>("search"),
  target: propertySetter<string>("target"),
  username: propertySetter<string>("username")
};

const anchorSetters = {
  ...navigableSetters,
  hreflang: propertySetter<string>("hreflang"),
  type
};

const areaSetters = {
  ...navigableSetters,
  alt: propertySetter<string>("alt"),
  coords: propertySetter<string>("coords"),
  shape: propertySetter<string>("shape")
};

const mapSetters = {
  ...htmlElementSetters, name
};

const mediaSetters = {
  ...htmlElementSetters,
  autoplay: propertySetter<boolean>("autoplay"),
  controls: propertySetter<boolean>("controls"),
  crossOrigin: propertySetter<string | null>("crossOrigin"),
  currentTime: propertySetter<number>("currentTime"),
  defaultMuted: propertySetter<boolean>("defaultMuted"),
  defaultPlaybackRate: propertySetter<number>("defaultPlaybackRate"),
  disableRemotePlayback: propertySetter<boolean>("disableRemotePlayback"),
  loop: propertySetter<boolean>("loop"),
  muted: propertySetter<boolean>("muted"),
  "on:encrypted": eventListenerProperty<MediaEncryptedEvent>("encrypted"),
  "on:waitingforkey": eventListenerProperty<Event>("waitingforkey"),
  playbackRate: propertySetter<number>("playbackRate"),
  preload: propertySetter<Preload>("preload"),
  preservesPitch: propertySetter<boolean>("preservesPitch"),
  src,
  srcObject: propertySetter<MediaProvider | null>("srcObject"),
  volume: propertySetter<number>("volume")
};

const embedSetters = {
  ...htmlElementSetters,
  height: (e: HTMLEmbedElement, v: string | number) => e.height = v.toString(),
  src,
  type,
  width: (e: HTMLEmbedElement, v: string | number) => e.width = v.toString()
};

const sourceSetters = {
  ...htmlElementSetters,
  height: propertySetter<number>("height"),
  media: propertySetter<string>("media"),
  sizes: propertySetter<string>("sizes"),
  src,
  srcset: propertySetter<string>("srcset"),
  type,
  width: propertySetter<number>("width")
};

const trackSetters = {
  ...htmlElementSetters,
  default: propertySetter<boolean>("default"),
  kind: propertySetter<string>("kind"),
  label: propertySetter<string>("label"),
  src,
  srclang: propertySetter<string>("srclang"),
};

const videoSetters = {
  ...mediaSetters,
  disablePictureInPicture: propertySetter<boolean>("disablePictureInPicture"),
  height: propertySetter<number>("height"),
  "on:enterpictureinpicture": eventListenerProperty<PictureInPictureEvent>("enterpictureinpicture"),
  "on:leavepictureinpicture": eventListenerProperty<PictureInPictureEvent>("leavepictureinpicture"),
  playsInline: propertySetter<boolean>("playsInline"),
  poster: propertySetter<string>("poster"),
  width: propertySetter<number>("width")
};

const baseSetters = {
  ...htmlElementSetters,
  href,
  target: propertySetter<string>("target")
};

const linkSetters = {
  ...htmlElementSetters,
  as: propertySetter<string>("as"),
  crossOrigin: propertySetter<string>("crossOrigin"),
  disabled,
  href,
  hreflang: propertySetter<string>("hreflang"),
  imageSizes: propertySetter<string>("imageSizes"),
  imageSrcset: propertySetter<string>("imageSrcset"),
  integrity: propertySetter<string>("integrity"),
  media: propertySetter<string>("media"),
  referrerPolicy: propertySetter<string>("referrerPolicy"),
  rel: propertySetter<string>("rel"),
  type
};

const metaSetters = {
  ...htmlElementSetters,
  content: propertySetter<string>("content"),
  httpEquiv: propertySetter<string>("httpEquiv"),
  media: propertySetter<string>("media"),
  name
};

const scriptSetters = {
  ...htmlElementSetters,
  async: propertySetter<boolean>("async"),
  crossOrigin: propertySetter<string | null>("crossOrigin"),
  defer: propertySetter<boolean>("defer"),
  href: createAttributeSetter("href"),
  integrity: propertySetter<string>("integrity"),
  noModule: propertySetter<boolean>("noModule"),
  referrerPolicy: propertySetter<string>("referrerPolicy"),
  src,
  type
};

const styleSetters = {
  ...htmlElementSetters,
  disabled,
  media: propertySetter<string>("media")
};

const olSetters = {
  ...htmlElementSetters,
  reversed: propertySetter<boolean>("reversed"),
  start: createAttributeSetter("start"),
  type
};

const tableSetters = {
  ...htmlElementSetters,
  caption: propertySetter<HTMLTableCaptionElement | null>("caption")
};

const tableCellSetters = {
  ...htmlElementSetters,
  abbr: propertySetter<string>("abbr"),
  colSpan: propertySetter<number>("colSpan"),
  headers: propertySetter<string>("headers"),
  rowSpan: propertySetter<number>("rowSpan"),
  scope: propertySetter<string>("scope")
};

const tableColSetters = {
  ...htmlElementSetters,
  span: propertySetter<number>("span"),
};

const canvasSetters = {
  ...htmlElementSetters,
  height: propertySetter<number>("height"),
  width: propertySetter<number>("width")
};

const dataSetters = {
  ...htmlElementSetters,
  value
};

const detailsSetters = {
  ...htmlElementSetters,
  open
};

const dialogSetters = {
  ...htmlElementSetters,
  open,
  returnValue: propertySetter<string>("returnValue")
};

const iframeSetters = {
  ...htmlElementSetters,
  allow: (e: HTMLIFrameElement, v: string) => e.allow = v,
  allowFullscreen: propertySetter<boolean>("allowFullscreen"),
  height: (e: HTMLIFrameElement, v: string | number) => e.height = v.toString(),
  width: (e: HTMLIFrameElement, v: string | number) => e.width = v.toString(),
  loading: propertySetter<string>("loading"),
  name,
  referrerPolicy: propertySetter<ReferrerPolicy>("referrerPolicy"),
  src,
  srcdoc: propertySetter<string>("srcdoc")
};

const imgSetters = {
  ...htmlElementSetters,
  alt: propertySetter<string>("alt"),
  crossOrigin: propertySetter<string | null>("crossOrigin"),
  decoding: propertySetter<ImgDecoding>("decoding"),
  fetchPriority: propertySetter<FetchPriority>("fetchPriority"),
  height: propertySetter<number>("height"),
  width: propertySetter<number>("width"),
  isMap: propertySetter<boolean>("isMap"),
  useMap: propertySetter<string>("useMap"),
  loading: propertySetter<ImgLoading>("loading"),
  sizes: propertySetter<string>("sizes"),
  src,
  srcset: propertySetter<string>("srcset")
};

const modSetters = {
  ...htmlElementSetters,
  cite: propertySetter<string>("cite"),
  dateTime: propertySetter<string>("dateTime")
};

const objectSetters = {
  ...htmlElementSetters,
  data: propertySetter<string>("data"),
  height: (e: HTMLObjectElement, v: string | number) => e.height = v.toString(),
  width: (e: HTMLObjectElement, v: string | number) => e.width = v.toString(),
  name,
  type
};

const quoteSetters = {
  ...htmlElementSetters,
  cite: propertySetter<string>("cite")
};

const slotSetters = {
  ...htmlElementSetters,
  name
};

const timeSetters = {
  ...htmlElementSetters,
  dateTime: propertySetter<string>("dateTime")
};

export const HTMLElementSetterTable = {
  a: anchorSetters,
  abbr: htmlElementSetters,
  address: htmlElementSetters,
  area: areaSetters,
  article: htmlElementSetters,
  aside: htmlElementSetters,
  audio: mediaSetters,
  b: htmlElementSetters,
  base: baseSetters,
  bdi: htmlElementSetters,
  bdo: htmlElementSetters,
  blockquote: quoteSetters,
  body: htmlElementSetters,
  br: htmlElementSetters,
  button: buttonSetters,
  canvas: canvasSetters,
  caption: htmlElementSetters,
  cite: htmlElementSetters,
  code: htmlElementSetters,
  col: tableColSetters,
  colgroup: tableCellSetters,
  data: dataSetters,
  datalist: htmlElementSetters,
  details: detailsSetters,
  del: modSetters,
  dfn: htmlElementSetters,
  dialog: dialogSetters,
  div: htmlElementSetters,
  dl: htmlElementSetters,
  dd: htmlElementSetters,
  dt: htmlElementSetters,
  em: htmlElementSetters,
  embed: embedSetters,
  fieldset: fieldsetSetters,
  figcaption: htmlElementSetters,
  footer: htmlElementSetters,
  figure: htmlElementSetters,
  form: formSetters,
  head: htmlElementSetters,
  header: htmlElementSetters,
  h1: htmlElementSetters,
  h2: htmlElementSetters,
  h3: htmlElementSetters,
  h4: htmlElementSetters,
  h5: htmlElementSetters,
  h6: htmlElementSetters,
  hgroup: htmlElementSetters,
  hr: htmlElementSetters,
  html: htmlElementSetters,
  i: htmlElementSetters,
  iframe: iframeSetters,
  img: imgSetters,
  input: inputSetters,
  ins: modSetters,
  kbd: htmlElementSetters,
  label: labelSetters,
  legend: htmlElementSetters,
  li: htmlElementSetters,
  link: linkSetters,
  main: htmlElementSetters,
  map: mapSetters,
  mark: htmlElementSetters,
  menu: htmlElementSetters,
  meta: metaSetters,
  meter: meterSetters,
  nav: htmlElementSetters,
  noscript: htmlElementSetters,
  object: objectSetters,
  ol: olSetters,
  optgroup: optGroupSetters,
  option: optionSetters,
  output: outputSetters,
  p: htmlElementSetters,
  picture: htmlElementSetters,
  pre: htmlElementSetters,
  progress: progressSetters,
  q: quoteSetters,
  rp: htmlElementSetters,
  rt: htmlElementSetters,
  ruby: htmlElementSetters,
  s: htmlElementSetters,
  samp: htmlElementSetters,
  script: scriptSetters,
  search: htmlElementSetters,
  section: htmlElementSetters,
  select: selectSetters,
  slot: slotSetters,
  small: htmlElementSetters,
  source: sourceSetters,
  span: htmlElementSetters,
  strong: htmlElementSetters,
  style: styleSetters,
  sub: htmlElementSetters,
  summary: htmlElementSetters,
  sup: htmlElementSetters,
  table: tableSetters,
  tbody: htmlElementSetters,
  td: tableCellSetters,
  template: htmlElementSetters,
  textarea: textareaSetters,
  tfoot: htmlElementSetters,
  th: tableCellSetters,
  thead: htmlElementSetters,
  time: timeSetters,
  title: htmlElementSetters,
  tr: htmlElementSetters,
  track: trackSetters,
  u: htmlElementSetters,
  ul: htmlElementSetters,
  var: htmlElementSetters,
  video: videoSetters,
  wbr: htmlElementSetters
} as const;

export type HTMLElementPropMap = InferPropsTable<typeof HTMLElementSetterTable, HTMLElement>;

type Autocapitalize = "" | "off" | "none" | "on" | "sentences" | "words" | "characters" | string;
type Autocorrect = "" | "on" | "off" | string;
type ContentEditable = "true" | "false" | "plaintext-only";
type Dir = "" | "auto" | "ltr" | "rtl" | string;
type EnterKeyHint = "" | "enter" | "done" | "go" | "next" | "previous" | "search" | "send" | string;
type ButtonType = "submit" | "reset" | "button";
type SelectionDirection = "forward" | "backward" | "none";
type Preload = "none" | "metadata" | "auto" | "";
type ImgLoading = "eager" | "lazy";
type FetchPriority = "auto" | "high" | "low";