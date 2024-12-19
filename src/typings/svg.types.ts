type AccumulateProp = "sum" | "none";
type AdditiveProp = "sum" | "replace";
type AlignementBaseline =
  | "auto"
  | "baseline"
  | "before-edge"
  | "text-before-edge"
  | "middle"
  | "central"
  | "after-edge"
  | "text-after-edge"
  | "ideographic"
  | "alphabetic"
  | "hanging"
  | "mathematical"
  | "top"
  | "center"
  | "bottom";

type AnimateFill = "freeze" | "remove";
type CalcMode = "discrete" | "linear" | "paced" | "spline";
type CrossOrigin = "anonymous" | "use-credentials" | "";
type Direction = "ltr" | "rtl";
type EdgeMode = "duplicate" | "wrap" | "none";
type FeIn = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint" | string;
type Units = "userSpaceOnUse" | "objectBoundingBox";

interface SVGElementProps {
  color: string;
  decelerate: string;
  display: string;
  filter: string;
  xmlns: string;
}

interface SVGAnimationElementProps extends SVGElementProps {
  begin: string;
  dur: string;
  end: string;
  keyPoints: string;
  onbegin: ((this: SVGAnimationElement, ev: Event) => any) | null;
  onend: ((this: SVGAnimationElement, ev: Event) => any) | null;
  onrepeat: ((this: SVGAnimationElement, ev: Event) => any) | null;
  repeatCount: string;
  repeatDur: string;
  requiredExtensions: string;
  restart: "always" | "whenNotActive" | "never";
  systemLanguage: string;
  to: number | string;
}

interface SVGGradientElementProps extends SVGElementProps {
  gradientTransform: string;
  gradientUnits: Units;
  spreadMethod: "pad" | "reflect" | "repeat";
}

interface SVGTextElementProps extends SVGElementProps {
  lengthAdjust: "spacing" | "spacingAndGlyphs";
  textLength: string;
  stroke: string;
}

interface Delta {
  dx: number | string;
  dy: number | string;
}

interface Point {
  x: string;
  y: string;
}

interface Sized extends Point {
  height: number | string;
  width: number | string;
}

interface AnimateProps extends SVGAnimationElementProps {
  accumulate: AccumulateProp;
  additive: AdditiveProp;
  attributeName: string;
  by: number | string;
  calcMode: CalcMode;
  from: number | string;
  fill: AnimateFill;
  keySplines: string;
  keyTimes: string;
  values: string;
}

interface AnimateMotionProps extends SVGAnimationElementProps {
  accumulate: AccumulateProp;
  additive: AdditiveProp;
  by: number | string;
  calcMode: CalcMode;
  from: number | string;
  fill: AnimateFill;
  keySplines: string;
  keyTimes: string;
  path: string;
  rotate: number | string;
  values: string;
}

interface AnimateTransformProps extends AnimateProps {
  type: "translate" | "scale" | "rotate" | "skewX" | "skewY";
}

interface CircleProps extends SVGElementProps {
  cx: string;
  cy: string;
  fill: string;
  mask: string;
  pathLength: number;
  r: string;
  stroke: string;
}

interface ClipPathProps extends SVGElementProps {
  clipPathUnits: Units;
  mask: string;
}

interface DefsProps extends SVGElementProps { }

interface EllipseProps extends SVGElementProps {
  cx: string;
  cy: string;
  fill: string;
  mask: string;
  pathLength: number;
  rx: number | string;
  ry: number | string;
  stroke: string;
}

interface FeBlendProps extends SVGElementProps, Sized {
  in: FeIn;
  in2: FeIn;
  mode: string;
  result: string;
}

interface FeColorMatrixProps extends SVGElementProps, Sized {
  in: FeIn;
  type: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
  result: string;
  values: string;
}

interface FeComponentTransferProps extends SVGElementProps, Sized {
  in: FeIn;
  in2: FeIn;
  result: string;
}

interface FeCompositeProps extends SVGElementProps, Sized {
  in: FeIn;
  k1: number;
  k2: number;
  k3: number;
  k4: number;
  operator: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic";
  result: string;
}

interface FeConvolveMatrixProps extends SVGElementProps, Point {
  bias: number;
  divisor: number;
  edgeMode: EdgeMode;
  in: FeIn;
  kernelMatrix: string;
  order: string;
  preserveAlpha: boolean;
  result: string;
  targetX: number;
  targetY: number;
}

interface FeDiffuseLightingProps extends SVGElementProps, Sized {
  diffuseConstant: number;
  in: FeIn;
  result: string;
  surfaceScale: number;
}

interface FeDisplacementMapProps extends SVGElementProps, Sized {
  in: FeIn;
  in2: FeIn;
  result: string;
  scale: number;
  xChannelSelector: "R" | "G" | "B" | "A";
  yChannelSelector: "R" | "G" | "B" | "A";
}

interface FeDistantLightProps extends SVGElementProps {
  azimuth: number;
  elevation: number;
}

interface FeDropShadowProps extends SVGElementProps, Sized, Delta {
  in: FeIn;
  result: string;
}

interface FeFloodProps extends SVGElementProps, Sized {
  result: string;
}

interface FeFuncProps extends SVGElementProps, Point {
  amplitude: number;
  exponent: number;
  intercept: number;
  offset: number;
  slope: number;
  tableValues: string;
  type: "identity" | "table" | "discrete" | "linear" | "gamma";
}

interface FeGaussianBlurProps extends SVGElementProps, Sized {
  edgeMode: EdgeMode;
  in: FeIn;
  result: string;
  stdDeviation: string;
}

interface FeImageProps extends SVGElementProps, Sized {
  crossorigin: CrossOrigin;
  preserveAspectRatio: string;
  result: string;
}

interface FeMergeProps extends SVGElementProps, Sized {
  in: FeIn;
  result: string;
}

interface FeMergeNodeProps extends SVGElementProps, Point {
  in: FeIn;
}

interface FeMorphologyProps extends SVGElementProps, Sized {
  in: FeIn;
  radius: string;
  result: string;
}

interface FeOffsetProps extends SVGElementProps, Sized, Delta {
  in: FeIn;
  operator: "erode" | "dilate";
  result: string;
}

interface FePointLightProps extends SVGElementProps {
  x: number;
  y: number;
  z: number;
}

interface FeSpecularLightingProps extends SVGElementProps, Sized {
  in: FeIn;
  result: string;
  specularConstant: number;
  specularExponent: number;
  surfaceScale: number;
}

interface FeSpotLightProps extends SVGElementProps {
  limitingConeAngle: number;
  pointsAtX: number;
  pointsAtY: number;
  pointsAtZ: number;
  specularExponent: number;
  x: number;
  y: number;
  z: number;
}

interface FeTileProps extends SVGElementProps, Sized {
  in: FeIn;
  result: string;
}

interface FeTurbulenceProps extends SVGElementProps, Sized {
  baseFrequency: string;
  numOctaves: number;
  seed: number;
  result: string;
  stitchTiles: "noStitch" | "stitch";
  type: "fractalNoise" | "turbulence";
}

interface FilterProps extends SVGElementProps, Sized {
  filterUnits: Units;
  primitiveUnits: Units;
}

interface ForeignObjectProps extends SVGElementProps, Sized {
}

interface GProps extends SVGElementProps {
  mask: string;
}

interface ImageProps extends SVGElementProps, Sized {
  crossorigin: CrossOrigin;
  decoding: "sync" | "async" | "auto";
  mask: string;
  preserveAspectRatio: string;
}

interface LinearGradientProps extends SVGGradientElementProps {
  x1: number | string;
  x2: number | string;
  y1: number | string;
  y2: number | string;
}

interface LineProps extends SVGElementProps {
  mask: string;
  pathLength: number;
  stroke: string;
  x1: number | string;
  x2: number | string;
  y1: number | string;
  y2: number | string;
}

interface MarkerProps extends SVGElementProps, Point {
  mask: string;
  markerHeight: number | string;
  markerUnits: "userSpaceOnUse" | "strokeWidth";
  markerWidth: number | string;
  orient: string;
  preserveAspectRatio: string;
  refX: number | string;
  refY: number | string;
  viewBox: string;
}

interface MaskProps extends SVGElementProps, Sized {
  mask: string;
  maskContentUnits: Units;
  maskUnits: Units;
}

interface PathProps extends SVGElementProps {
  d: string;
  fill: string;
  mask: string;
  pathLength: number;
  stroke: string;
}

interface PatternProps extends SVGElementProps, Sized {
  mask: string;
  patternContentUnits: Units;
  patternTransform: string;
  patternUnits: Units;
  preserveAspectRatio: string;
  viewBox: string;
}

interface PolygonProps extends SVGElementProps {
  fill: string;
  mask: string;
  pathLength: number;
  points: string;
  stroke: string;
}

interface PolylineProps extends SVGElementProps {
  fill: string;
  mask: string;
  pathLength: number;
  points: string;
  stroke: string;
}

interface RadialGradientProps extends SVGGradientElementProps {
  cx: string;
  cy: string;
  fr: string;
  fx: number | string;
  fy: number | string;
  href: string;
  r: string;
}

interface RectProps extends SVGElementProps, Sized {
  fill: string;
  mask: string;
  pathLength: number;
  rx: number | string;
  ry: number | string;
  stroke: string;
}

interface SvgProps extends SVGElementProps, Sized {
  fill: AnimateFill;
  mask: string;
  preserveAspectRatio: string;
  viewBox: string;
}

interface SetProps extends SVGAnimationElementProps {
  attributeName: string;
}

interface StopProps extends SVGElementProps {
  offset: number | string;
}

interface SymbolProps extends SVGElementProps {
  mask: string;
  preserveAspectRatio: string;
  refX: number | string;
  refY: number | string;
  viewBox: string;
}

interface TextProps extends SVGTextElementProps, Delta, Point {
  "alignment-baseline": AlignementBaseline;
  direction: Direction;
  fill: string;
  mask: string;
}

interface TextPathProps extends SVGTextElementProps {
  "alignment-baseline": AlignementBaseline;
  "baseline-shift": string;
  direction: Direction;
  fill: string;
  path: string;
  side: "left" | "right";
  spacing: "auto" | "exact";
  startOffset: number | string;
}

interface TspanProps extends SVGTextElementProps, Delta, Point {
  "alignment-baseline": AlignementBaseline;
  "baseline-shift": string;
  direction: Direction;
  fill: string;
}

interface UseProps extends SVGElementProps, Sized {
  mask: string;
}

interface ViewProps extends SVGElementProps {
  preserveAspectRatio: string;
  viewBox: string;
}

export interface SVGPropsTagNameMap {
  animate: AnimateProps;
  animateMotion: AnimateMotionProps;
  animateTransform: AnimateTransformProps;
  circle: CircleProps;
  clipPath: ClipPathProps;
  defs: DefsProps;
  desc: SVGElementProps;
  ellipse: EllipseProps;
  feBlend: FeBlendProps;
  feColorMatrix: FeColorMatrixProps;
  feComponentTransfer: FeComponentTransferProps;
  feComposite: FeCompositeProps;
  feConvolveMatrix: FeConvolveMatrixProps;
  feDiffuseLighting: FeDiffuseLightingProps;
  feDisplacementMap: FeDisplacementMapProps;
  feDistantLight: FeDistantLightProps;
  feDropShadow: FeDropShadowProps;
  feFlood: FeFloodProps;
  feGaussianBlur: FeGaussianBlurProps;
  feMerge: FeMergeProps;
  feMergeNode: FeMergeNodeProps;
  feMorphology: FeMorphologyProps;
  feImage: FeImageProps;
  feFuncA: FeFuncProps;
  feFuncB: FeFuncProps;
  feFuncG: FeFuncProps;
  feFuncR: FeFuncProps;
  feOffset: FeOffsetProps;
  fePointLight: FePointLightProps;
  feSpecularLighting: FeSpecularLightingProps;
  feSpotLight: FeSpotLightProps;
  feTile: FeTileProps;
  feTurbulence: FeTurbulenceProps;
  filter: FilterProps;
  foreignObject: ForeignObjectProps;
  g: GProps;
  image: ImageProps;
  line: LineProps;
  linearGradient: LinearGradientProps;
  marker: MarkerProps;
  mask: MaskProps;
  metadata: SVGElementProps;
  mpath: SVGElementProps;
  path: PathProps;
  pattern: PatternProps;
  polygon: PolygonProps;
  polyline: PolylineProps;
  radialGradient: RadialGradientProps;
  rect: RectProps;
  svg: SvgProps;
  set: SetProps;
  stop: StopProps;
  switch: SVGElementProps;
  symbol: SymbolProps;
  text: TextProps;
  textPath: TextPathProps;
  tspan: TspanProps;
  use: UseProps;
  view: ViewProps;
}

export type SVGOnlyTagName = keyof SVGPropsTagNameMap;