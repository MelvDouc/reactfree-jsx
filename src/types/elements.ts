import {
  alt,
  autocomplete,
  cite,
  dimensions,
  disabled,
  download,
  href,
  name,
  open,
  referrerPolicy,
  rel,
  src,
  target,
  text,
  type,
  value
} from "./common-interfaces";

export interface FreeJsxElementTagNameMap {
  "a": html_anchor;
  "abbr": html_element;
  "address": html_element;
  "area": html_area;
  "article": html_element;
  "aside": html_element;
  "audio": html_audio;
  "b": html_element;
  "base": html_base;
  "bdi": html_element;
  "bdo": html_element;
  "blockquote": html_quote;
  "body": html_body;
  "br": html_br;
  "button": html_button;
  "canvas": html_canvas;
  "caption": html_table_caption;
  "cite": html_element;
  "code": html_element;
  "col": html_table_col;
  "colgroup": html_table_col;
  "data": html_data;
  "datalist": html_data_list;
  "dd": html_element;
  "del": html_mod;
  "details": html_details;
  "dfn": html_element;
  "dialog": html_dialog;
  "div": html_div;
  "dl": html_d_list;
  "dt": html_element;
  "em": html_element;
  "embed": html_embed;
  "fieldset": html_fieldset;
  "figcaption": html_element;
  "figure": html_element;
  "footer": html_element;
  "form": html_form;
  "h1": html_heading;
  "h2": html_heading;
  "h3": html_heading;
  "h4": html_heading;
  "h5": html_heading;
  "h6": html_heading;
  "head": html_head;
  "header": html_element;
  "hgroup": html_element;
  "hr": html_hr;
  "html": html_html_element;
  "i": html_element;
  "iframe": html_iframe;
  "img": html_image;
  "input": html_input;
  "ins": html_mod;
  "kbd": html_element;
  "label": html_label;
  "legend": html_legend;
  "li": html_li;
  "link": html_link;
  "main": html_element;
  "map": html_map;
  "mark": html_element;
  "menu": html_menu;
  "meta": html_meta;
  "meter": html_meter;
  "nav": html_element;
  "noscript": html_element;
  "object": html_object;
  "ol": html_ol_list;
  "optgroup": html_optgroup;
  "option": html_option;
  "output": html_output;
  "p": html_paragraph;
  "picture": html_picture;
  "pre": html_pre;
  "progress": html_progress;
  "q": html_quote;
  "rp": html_element;
  "rt": html_element;
  "ruby": html_element;
  "s": html_element;
  "samp": html_element;
  "script": html_script;
  "section": html_element;
  "select": html_select;
  "slot": html_slot;
  "small": html_element;
  "source": html_source;
  "span": html_span;
  "strong": html_element;
  "style": html_style;
  "sub": html_element;
  "summary": html_element;
  "sup": html_element;
  "table": html_table;
  "tbody": html_table_section;
  "td": html_table_cell;
  "template": html_template;
  "textarea": html_textarea;
  "tfoot": html_table_section;
  "th": html_table_cell;
  "thead": html_table_section;
  "time": html_time;
  "title": html_title;
  "tr": html_table_row;
  "track": html_track;
  "u": html_element;
  "ul": html_ul_list;
  "var": html_element;
  "video": html_video;
  "wbr": html_element;
}

type OmitEventListenerTogglers<T> = Omit<T, "addEventListener" | "removeEventListener">;
type window_event_handlers = OmitEventListenerTogglers<WindowEventHandlers>;

interface _node {
  nodeValue: string | null;
  textContent: string | null;
}

interface _element extends _node, ARIAMixin {
  className: string;
  id: string;
  innerHTML: string;
  onfullscreenchange: ((this: Element, ev: Event) => any) | null;
  onfullscreenerror: ((this: Element, ev: Event) => any) | null;
  outerHTML: string;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
}

interface html_element extends _element, OmitEventListenerTogglers<GlobalEventHandlers> {
  accessKey: string;
  autocapitalize: string;
  contentEditable: string;
  dir: string;
  draggable: boolean;
  enterKeyHint: string;
  hidden: boolean;
  inert: boolean;
  inputMode: string;
  innerText: string;
  lang: string;
  outerText: string;
  spellcheck: boolean;
  title: string;
  translate: boolean;
}

interface html_hyperlink_utils extends href {
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

interface html_anchor extends html_element, html_hyperlink_utils, download, name, rel, target, type, referrerPolicy, text {
  hreflang: string;
  ping: string;
}

interface html_area extends html_element, html_hyperlink_utils, alt, download, referrerPolicy, target {
  coords: string;
  ping: string;
  shape: string;
}

interface html_audio extends html_element { }
interface html_base extends html_element, href { }
interface html_quote extends html_element, cite { }

interface html_body extends html_element, window_event_handlers {
  vLink: string;
}

interface html_br extends html_element { }

interface html_button extends html_element, disabled, name, type, value {
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  formTarget: string;
}

interface html_canvas extends html_element {
  height: number;
  width: number;
}
interface html_data extends html_element, value { }
interface html_data_list extends html_element { }
interface html_details extends html_element, open { }
interface html_dialog extends html_element, open {
  returnValue: string;
}
interface html_div extends html_element { }
interface html_d_list extends html_element { }
interface html_embed extends html_element, dimensions, name, src, type { }
interface html_fieldset extends html_element, disabled, name { }

interface html_form extends html_element, autocomplete, name, target {
  acceptCharset: string;
  action: string;
  encoding: string;
  enctype: string;
  method: string;
  noValidate: boolean;
}

interface html_heading extends html_element { }
interface html_head extends html_element { }
interface html_html_element extends html_element { }
interface html_hr extends html_element { }

interface html_iframe extends html_element, dimensions, src, name, referrerPolicy {
  allow: string;
  allowFullscreen: boolean;
  scrolling: string;
  srcdoc: string;
}

interface html_image extends html_element, alt, referrerPolicy, src {
  crossOrigin: string | null;
  decoding: "async" | "sync" | "auto";
  height: number;
  isMap: boolean;
  loading: "eager" | "lazy";
  sizes: string;
  width: number;
}

interface html_input extends html_element, alt, autocomplete, disabled, name, src, type, value {
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

interface html_label extends html_element {
  htmlFor: string;
}

interface html_legend extends html_element { }
interface html_li extends html_element, value { }

interface html_link extends html_element, disabled, href, referrerPolicy, rel, target, type {
  as: string;
  crossOrigin: string | null;
  hreflang: string;
  imageSizes: string;
  imageSrcset: string;
  integrity: string;
  media: string;
}


interface html_map extends html_element, name { }
interface html_menu extends html_element { }
interface html_meta extends html_element, name {
  content: string;
  httpEquiv: string;
  media: string;
}

interface html_meter extends html_element {
  high: number;
  low: number;
  max: number;
  min: number;
  optimum: number;
  value: number;
}

interface html_mod extends html_element, cite { }

interface html_object extends html_element, dimensions, name, type {
  data: string;
  standby: string;
  useMap: string;
}

interface html_ol_list extends html_element, type {
  reversed: boolean;
  start: number;
}

interface html_optgroup extends html_element, disabled {
  label: string;
}

interface html_option extends html_element, disabled, value, text {
  defaultSelected: boolean;
  label: string;
  selected: boolean;
}

interface html_output extends html_element, name, value {
  defaultValue: string;
}

interface html_paragraph extends html_element { }
interface html_picture extends html_element { }
interface html_pre extends html_element { }

interface html_progress extends html_element {
  max: number;
  value: number;
}

interface html_script extends html_element, referrerPolicy, src, text, type {
  async: boolean;
  crossOrigin: string;
  defer: boolean;
  integrity: string;
  noModule: boolean;
}

interface html_select extends html_element, autocomplete, disabled, name, value {
  length: number;
  multiple: boolean;
  required: boolean;
  selectedIndex: number;
  size: number;
}

interface html_slot extends html_element, name { }

interface html_source extends html_element, src, type {
  height: number;
  media: string;
  sizes: string;
  srcset: string;
  width: number;
}

interface html_span extends html_element { }

interface html_style extends html_element, disabled {
  media: string;
}

interface html_template extends html_element { }

interface html_textarea extends html_element, autocomplete, disabled, name, value {
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

interface html_time extends html_element {
  dateTime: string;
}

interface html_title extends html_element, text { }

interface html_track extends html_element, src {
  default: boolean;
  kind: string;
  label: string;
  srclang: string;
}

interface html_ul_list extends html_element { }

interface html_video extends html_element {
  disablePictureInPicture: boolean;
  height: number;
  onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
  playsInline: boolean;
  poster: string;
  width: number;
}

interface html_table extends html_element {
  caption: HTMLTableCaptionElement | null;
  cellPadding: string;
  cellSpacing: string;
  tFoot: HTMLTableSectionElement | null;
  tHead: HTMLTableSectionElement | null;
  width: string;
}

interface html_table_caption extends html_element { }

interface html_table_col extends html_element {
  span: number;
}

interface html_table_section extends html_element { }

interface html_table_cell extends html_element {
  abbr: string;
  colSpan: number;
  headers: string;
  height: string;
  noWrap: boolean;
  rowSpan: number;
  scope: string;
}

interface html_table_row extends html_element { }
