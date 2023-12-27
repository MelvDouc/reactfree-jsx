import type {
  ButtonProps,
  FieldSetProps,
  FormProps,
  InputProps,
  LabelProps,
  OptGroupProps,
  OptionProps,
  ProgressProps,
  SelectProps,
  TextAreaProps
} from "@/typings/props/Form.js";
import type { LiProps, OlProps } from "@/typings/props/List.js";
import type {
  AudioProps,
  SourceProps,
  TrackProps,
  VideoProps
} from "@/typings/props/Media.js";
import type { AnchorProps, AreaProps } from "@/typings/props/Navigables.js";
import type { CommonProps } from "@/typings/props/Props.js";
import type { TableCellProps, TableColProps, TableProps } from "@/typings/props/Table.js";
import type {
  BaseProps,
  CanvasProps,
  DataProps,
  DetailsProps,
  DialogProps,
  EmbedProps,
  IFrameProps,
  ImageProps,
  LinkProps,
  MapProps,
  MetaProps,
  MeterProps,
  ModProps,
  ObjectProps,
  OutputProps,
  QuoteProps,
  ScriptProps,
  SlotProps,
  StyleProps,
  TimeProps
} from "@/typings/props/others.js";

interface PropsTagNameMap {
  a: AnchorProps;
  abbr: CommonProps;
  address: CommonProps;
  area: AreaProps;
  article: CommonProps;
  aside: CommonProps;
  audio: AudioProps;
  b: CommonProps;
  base: BaseProps;
  bdi: CommonProps;
  bdo: CommonProps;
  blockquote: QuoteProps;
  body: CommonProps;
  br: CommonProps;
  button: ButtonProps;
  canvas: CanvasProps;
  caption: CommonProps;
  cite: CommonProps;
  code: CommonProps;
  col: TableColProps;
  colgroup: TableColProps;
  data: DataProps;
  datalist: CommonProps;
  del: ModProps;
  details: DetailsProps;
  dialog: DialogProps;
  dd: CommonProps;
  dfn: CommonProps;
  div: CommonProps;
  dl: CommonProps;
  dt: CommonProps;
  em: CommonProps;
  embed: EmbedProps;
  fieldset: FieldSetProps;
  figcaption: CommonProps;
  figure: CommonProps;
  footer: CommonProps;
  form: FormProps;
  head: CommonProps;
  header: CommonProps;
  h1: CommonProps;
  h2: CommonProps;
  h3: CommonProps;
  h4: CommonProps;
  h5: CommonProps;
  h6: CommonProps;
  html: CommonProps;
  hr: CommonProps;
  hgroup: CommonProps;
  i: CommonProps;
  iframe: IFrameProps;
  img: ImageProps;
  input: InputProps;
  ins: ModProps;
  kbd: CommonProps;
  label: LabelProps;
  legend: CommonProps;
  li: LiProps;
  link: LinkProps;
  main: CommonProps;
  map: MapProps;
  mark: CommonProps;
  menu: CommonProps;
  meta: MetaProps;
  meter: MeterProps;
  nav: CommonProps;
  noscript: CommonProps;
  object: ObjectProps;
  ol: OlProps;
  optgroup: OptGroupProps;
  option: OptionProps;
  output: OutputProps;
  p: CommonProps;
  picture: CommonProps;
  pre: CommonProps;
  progress: ProgressProps;
  q: QuoteProps;
  rp: CommonProps;
  rt: CommonProps;
  ruby: CommonProps;
  s: CommonProps;
  samp: CommonProps;
  script: ScriptProps;
  search: CommonProps;
  section: CommonProps;
  select: SelectProps;
  slot: SlotProps;
  small: CommonProps;
  source: SourceProps;
  span: CommonProps;
  strong: CommonProps;
  style: StyleProps;
  sub: CommonProps;
  summary: CommonProps;
  sup: CommonProps;
  table: TableProps;
  tbody: CommonProps;
  td: TableCellProps;
  template: CommonProps;
  textarea: TextAreaProps;
  tfoot: CommonProps;
  th: TableCellProps;
  thead: CommonProps;
  time: TimeProps;
  title: CommonProps;
  tr: CommonProps;
  track: TrackProps;
  u: CommonProps;
  ul: CommonProps;
  var: CommonProps;
  video: VideoProps;
  wbr: CommonProps;
}

export type { PropsTagNameMap };