import type { OptionalObs } from "$src/props/obs.js";
import type { ElementProps } from "$src/typings/element.js";

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
type FeIn = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint";
type Units = "userSpaceOnUse" | "objectBoundingBox";

interface SVGElementProps<T extends SVGElement> extends ElementProps<T> {
  color?: OptionalObs<string>;
  decelerate?: OptionalObs<string>;
  display?: OptionalObs<string>;
  filter?: OptionalObs<string>;
  xmlns?: OptionalObs<string>;
}

interface SVGAnimationProps<T extends SVGAnimateElement> extends SVGElementProps<T> {
  begin?: OptionalObs<string>;
  dur?: OptionalObs<string>;
  end?: OptionalObs<string>;
  keyPoints?: OptionalObs<string>;
  onbegin?: OptionalObs<((this: SVGAnimateElement, ev: Event) => unknown) | null>;
  onend?: OptionalObs<((this: SVGAnimateElement, ev: Event) => unknown) | null>;
  onrepeat?: OptionalObs<((this: SVGAnimateElement, ev: Event) => unknown) | null>;
  repeatCount?: OptionalObs<string>;
  repeatDur?: OptionalObs<string>;
  requiredExtensions?: OptionalObs<string>;
  restart?: OptionalObs<"always" | "whenNotActive" | "never">;
  systemLanguage?: OptionalObs<string>;
  to?: OptionalObs<number | string>;
}

interface SVGGradientElementProps<T extends SVGGradientElement> extends SVGElementProps<T> {
  gradientTransform?: OptionalObs<string>;
  gradientUnits?: OptionalObs<Units>;
  spreadMethod?: OptionalObs<"pad" | "reflect" | "repeat">;
}

interface SVGTextElementProps<T extends SVGElement> extends SVGElementProps<T> {
  lengthAdjust?: OptionalObs<"spacing" | "spacingAndGlyphs">;
  textLength?: OptionalObs<string>;
  stroke?: OptionalObs<string>;
}

interface Delta {
  dx?: OptionalObs<number | string>;
  dy?: OptionalObs<number | string>;
}

interface Point {
  x?: OptionalObs<string>;
  y?: OptionalObs<string>;
}

interface Sized extends Point {
  height?: OptionalObs<number | string>;
  width?: OptionalObs<number | string>;
}

interface AnimateProps extends SVGAnimationProps<SVGAnimateElement> {
  accumulate?: OptionalObs<AccumulateProp>;
  additive?: OptionalObs<AdditiveProp>;
  attributeName?: OptionalObs<string>;
  by?: OptionalObs<number | string>;
  calcMode?: OptionalObs<CalcMode>;
  from?: OptionalObs<number | string>;
  fill?: OptionalObs<AnimateFill>;
  keySplines?: OptionalObs<string>;
  keyTimes?: OptionalObs<string>;
  values?: OptionalObs<string>;
}

interface AnimateMotionProps extends SVGAnimationProps<SVGAnimateMotionElement> {
  accumulate?: OptionalObs<AccumulateProp>;
  additive?: OptionalObs<AdditiveProp>;
  by?: OptionalObs<number | string>;
  calcMode?: OptionalObs<CalcMode>;
  from?: OptionalObs<number | string>;
  fill?: OptionalObs<AnimateFill>;
  keySplines?: OptionalObs<string>;
  keyTimes?: OptionalObs<string>;
  path?: OptionalObs<string>;
  rotate?: OptionalObs<number | string>;
  values?: OptionalObs<string>;
}

interface AnimateTransformProps extends AnimateProps {
  type?: OptionalObs<"translate" | "scale" | "rotate" | "skewX" | "skewY">;
}

interface CircleProps extends SVGElementProps<SVGCircleElement> {
  cx?: OptionalObs<string>;
  cy?: OptionalObs<string>;
  fill?: OptionalObs<string>;
  mask?: OptionalObs<string>;
  pathLength?: OptionalObs<number>;
  r?: OptionalObs<string>;
  stroke?: OptionalObs<string>;
}

interface ClipPathProps extends SVGElementProps<SVGClipPathElement> {
  clipPathUnits?: OptionalObs<Units>;
  mask?: OptionalObs<string>;
}

interface DefsProps extends SVGElementProps<SVGDefsElement> { }

interface EllipseProps extends SVGElementProps<SVGEllipseElement> {
  cx?: OptionalObs<string>;
  cy?: OptionalObs<string>;
  fill?: OptionalObs<string>;
  mask?: OptionalObs<string>;
  pathLength?: OptionalObs<number>;
  rx?: OptionalObs<number | string>;
  ry?: OptionalObs<number | string>;
  stroke?: OptionalObs<string>;
}

interface FeBlendProps extends SVGElementProps<SVGFEBlendElement>, Sized {
  in?: OptionalObs<FeIn>;
  in2?: OptionalObs<FeIn>;
  mode?: OptionalObs<string>;
  result?: OptionalObs<string>;
}

interface FeColorMatrixProps extends SVGElementProps<SVGFEColorMatrixElement>, Sized {
  in?: OptionalObs<FeIn>;
  type?: OptionalObs<"matrix" | "saturate" | "hueRotate" | "luminanceToAlpha">;
  result?: OptionalObs<string>;
  values?: OptionalObs<string>;
}

interface FeComponentTransferProps extends SVGElementProps<SVGFEComponentTransferElement>, Sized {
  in?: OptionalObs<FeIn>;
  in2?: OptionalObs<FeIn>;
  result?: OptionalObs<string>;
}

interface FeCompositeProps extends SVGElementProps<SVGFECompositeElement>, Sized {
  in?: OptionalObs<FeIn>;
  k1?: OptionalObs<number>;
  k2?: OptionalObs<number>;
  k3?: OptionalObs<number>;
  k4?: OptionalObs<number>;
  operator?: OptionalObs<"over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic">;
  result?: OptionalObs<string>;
}

interface FeConvolveMatrixProps extends SVGElementProps<SVGFEConvolveMatrixElement>, Point {
  bias?: OptionalObs<number>;
  divisor?: OptionalObs<number>;
  edgeMode?: OptionalObs<EdgeMode>;
  in?: OptionalObs<FeIn>;
  kernelMatrix?: OptionalObs<string>;
  order?: OptionalObs<string>;
  preserveAlpha?: OptionalObs<boolean>;
  result?: OptionalObs<string>;
  targetX?: OptionalObs<number>;
  targetY?: OptionalObs<number>;
}

interface FeDiffuseLightingProps extends SVGElementProps<SVGFEDiffuseLightingElement>, Sized {
  diffuseConstant?: OptionalObs<number>;
  in?: OptionalObs<FeIn>;
  result?: OptionalObs<string>;
  surfaceScale?: OptionalObs<number>;
}

interface FeDisplacementMapProps extends SVGElementProps<SVGFEDisplacementMapElement>, Sized {
  in?: OptionalObs<FeIn>;
  in2?: OptionalObs<FeIn>;
  result?: OptionalObs<string>;
  scale?: OptionalObs<number>;
  xChannelSelector?: OptionalObs<"R" | "G" | "B" | "A">;
  yChannelSelector?: OptionalObs<"R" | "G" | "B" | "A">;
}

interface FeDistantLightProps extends SVGElementProps<SVGFEDistantLightElement> {
  azimuth?: OptionalObs<number>;
  elevation?: OptionalObs<number>;
}

interface FeDropShadowProps extends SVGElementProps<SVGFEDropShadowElement>, Sized, Delta {
  in?: OptionalObs<FeIn>;
  result?: OptionalObs<string>;
}

interface FeFloodProps extends SVGElementProps<SVGFEFloodElement>, Sized {
  result?: OptionalObs<string>;
}

interface FeFuncProps<T extends SVGElement> extends SVGElementProps<T>, Point {
  amplitude?: OptionalObs<number>;
  exponent?: OptionalObs<number>;
  intercept?: OptionalObs<number>;
  offset?: OptionalObs<number>;
  slope?: OptionalObs<number>;
  tableValues?: OptionalObs<string>;
  type?: OptionalObs<"identity" | "table" | "discrete" | "linear" | "gamma">;
}

interface FeGaussianBlurProps extends SVGElementProps<SVGFEGaussianBlurElement>, Sized {
  edgeMode?: OptionalObs<EdgeMode>;
  in?: OptionalObs<FeIn>;
  result?: OptionalObs<string>;
  stdDeviation?: OptionalObs<string>;
}

interface FeImageProps extends SVGElementProps<SVGFEImageElement>, Sized {
  crossorigin?: OptionalObs<CrossOrigin>;
  preserveAspectRatio?: OptionalObs<string>;
  result?: OptionalObs<string>;
}

interface FeMergeProps extends SVGElementProps<SVGFEMergeElement>, Sized {
  in?: OptionalObs<FeIn>;
  result?: OptionalObs<string>;
}

interface FeMergeNodeProps extends SVGElementProps<SVGFEMergeNodeElement>, Point {
  in?: OptionalObs<FeIn>;
}

interface FeMorphologyProps extends SVGElementProps<SVGFEMorphologyElement>, Sized {
  in?: OptionalObs<FeIn>;
  radius?: OptionalObs<string>;
  result?: OptionalObs<string>;
}

interface FeOffsetProps extends SVGElementProps<SVGFEOffsetElement>, Sized, Delta {
  in?: OptionalObs<FeIn>;
  operator?: OptionalObs<"erode" | "dilate">;
  result?: OptionalObs<string>;
}

interface FePointLightProps extends SVGElementProps<SVGFEPointLightElement> {
  x?: OptionalObs<number>;
  y?: OptionalObs<number>;
  z?: OptionalObs<number>;
}

interface FeSpecularLightingProps extends SVGElementProps<SVGFESpecularLightingElement>, Sized {
  in?: OptionalObs<FeIn>;
  result?: OptionalObs<string>;
  specularConstant?: OptionalObs<number>;
  specularExponent?: OptionalObs<number>;
  surfaceScale?: OptionalObs<number>;
}

interface FeSpotLightProps extends SVGElementProps<SVGFESpotLightElement> {
  limitingConeAngle?: OptionalObs<number>;
  pointsAtX?: OptionalObs<number>;
  pointsAtY?: OptionalObs<number>;
  pointsAtZ?: OptionalObs<number>;
  specularExponent?: OptionalObs<number>;
  x?: OptionalObs<number>;
  y?: OptionalObs<number>;
  z?: OptionalObs<number>;
}

interface FeTileProps extends SVGElementProps<SVGFETileElement>, Sized {
  in?: OptionalObs<FeIn>;
  result?: OptionalObs<string>;
}

interface FeTurbulenceProps extends SVGElementProps<SVGFETurbulenceElement>, Sized {
  baseFrequency?: OptionalObs<string>;
  numOctaves?: OptionalObs<number>;
  seed?: OptionalObs<number>;
  result?: OptionalObs<string>;
  stitchTiles?: OptionalObs<"noStitch" | "stitch">;
  type?: OptionalObs<"fractalNoise" | "turbulence">;
}

interface FilterProps extends SVGElementProps<SVGFilterElement>, Sized {
  filterUnits?: OptionalObs<Units>;
  primitiveUnits?: OptionalObs<Units>;
}

interface ForeignObjectProps extends SVGElementProps<SVGForeignObjectElement>, Sized {
}

interface GProps extends SVGElementProps<SVGGElement> {
  mask?: OptionalObs<string>;
}

interface ImageProps extends SVGElementProps<SVGImageElement>, Sized {
  crossorigin?: OptionalObs<CrossOrigin>;
  decoding?: OptionalObs<"sync" | "async" | "auto">;
  mask?: OptionalObs<string>;
  preserveAspectRatio?: OptionalObs<string>;
}

interface LinearGradientProps extends SVGGradientElementProps<SVGLinearGradientElement> {
  x1?: OptionalObs<number | string>;
  x2?: OptionalObs<number | string>;
  y1?: OptionalObs<number | string>;
  y2?: OptionalObs<number | string>;
}

interface LineProps extends SVGElementProps<SVGLineElement> {
  mask?: OptionalObs<string>;
  pathLength?: OptionalObs<number>;
  stroke?: OptionalObs<string>;
  x1?: OptionalObs<number | string>;
  x2?: OptionalObs<number | string>;
  y1?: OptionalObs<number | string>;
  y2?: OptionalObs<number | string>;
}

interface MarkerProps extends SVGElementProps<SVGMarkerElement>, Point {
  mask?: OptionalObs<string>;
  markerHeight?: OptionalObs<number | string>;
  markerUnits?: OptionalObs<"userSpaceOnUse" | "strokeWidth">;
  markerWidth?: OptionalObs<number | string>;
  orient?: OptionalObs<string>;
  preserveAspectRatio?: OptionalObs<string>;
  refX?: OptionalObs<number | string>;
  refY?: OptionalObs<number | string>;
  viewBox?: OptionalObs<string>;
}

interface MaskProps extends SVGElementProps<SVGMaskElement>, Sized {
  mask?: OptionalObs<string>;
  maskContentUnits?: OptionalObs<Units>;
  maskUnits?: OptionalObs<Units>;
}

interface PathProps extends SVGElementProps<SVGPathElement> {
  d?: OptionalObs<string>;
  fill?: OptionalObs<string>;
  mask?: OptionalObs<string>;
  pathLength?: OptionalObs<number>;
  stroke?: OptionalObs<string>;
}

interface PatternProps extends SVGElementProps<SVGPatternElement>, Sized {
  mask?: OptionalObs<string>;
  patternContentUnits?: OptionalObs<Units>;
  patternTransform?: OptionalObs<string>;
  patternUnits?: OptionalObs<Units>;
  preserveAspectRatio?: OptionalObs<string>;
  viewBox?: OptionalObs<string>;
}

interface PolygonProps extends SVGElementProps<SVGPolygonElement> {
  fill?: OptionalObs<string>;
  mask?: OptionalObs<string>;
  pathLength?: OptionalObs<number>;
  points?: OptionalObs<string>;
  stroke?: OptionalObs<string>;
}

interface PolylineProps extends SVGElementProps<SVGPolylineElement> {
  fill?: OptionalObs<string>;
  mask?: OptionalObs<string>;
  pathLength?: OptionalObs<number>;
  points?: OptionalObs<string>;
  stroke?: OptionalObs<string>;
}

interface RadialGradientProps extends SVGGradientElementProps<SVGRadialGradientElement> {
  cx?: OptionalObs<string>;
  cy?: OptionalObs<string>;
  fr?: OptionalObs<string>;
  fx?: OptionalObs<number | string>;
  fy?: OptionalObs<number | string>;
  href?: OptionalObs<string>;
  r?: OptionalObs<string>;
}

interface RectProps extends SVGElementProps<SVGRectElement>, Sized {
  fill?: OptionalObs<string>;
  mask?: OptionalObs<string>;
  pathLength?: OptionalObs<number>;
  rx?: OptionalObs<number | string>;
  ry?: OptionalObs<number | string>;
  stroke?: OptionalObs<string>;
}

interface SvgProps extends SVGElementProps<SVGSVGElement>, Sized {
  fill?: OptionalObs<AnimateFill>;
  mask?: OptionalObs<string>;
  preserveAspectRatio?: OptionalObs<string>;
  viewBox?: OptionalObs<string>;
}

interface SetProps extends SVGAnimationProps<SVGSetElement> {
  attributeName?: OptionalObs<string>;
}

interface StopProps extends SVGElementProps<SVGStopElement> {
  offset?: OptionalObs<number | string>;
}

interface SymbolProps extends SVGElementProps<SVGSymbolElement> {
  mask?: OptionalObs<string>;
  preserveAspectRatio?: OptionalObs<string>;
  refX?: OptionalObs<number | string>;
  refY?: OptionalObs<number | string>;
  viewBox?: OptionalObs<string>;
}

interface TextProps extends SVGTextElementProps<SVGTextElement>, Delta, Point {
  "alignment-baseline"?: OptionalObs<AlignementBaseline>;
  direction?: OptionalObs<Direction>;
  fill?: OptionalObs<string>;
  mask?: OptionalObs<string>;
}

interface TextPathProps extends SVGTextElementProps<SVGTextPathElement> {
  "alignment-baseline"?: OptionalObs<AlignementBaseline>;
  "baseline-shift"?: OptionalObs<string>;
  direction?: OptionalObs<Direction>;
  fill?: OptionalObs<string>;
  path?: OptionalObs<string>;
  side?: OptionalObs<"left" | "right">;
  spacing?: OptionalObs<"auto" | "exact">;
  startOffset?: OptionalObs<number | string>;
}

interface TspanProps extends SVGTextElementProps<SVGTSpanElement>, Delta, Point {
  "alignment-baseline"?: OptionalObs<AlignementBaseline>;
  "baseline-shift"?: OptionalObs<string>;
  direction?: OptionalObs<Direction>;
  fill?: OptionalObs<string>;
}

interface UseProps extends SVGElementProps<SVGUseElement>, Sized {
  mask?: OptionalObs<string>;
}

interface ViewProps extends SVGElementProps<SVGViewElement> {
  preserveAspectRatio?: OptionalObs<string>;
  viewBox?: OptionalObs<string>;
}

export interface SVGPropsTagNameMap {
  animate: AnimateProps;
  animateMotion: AnimateMotionProps;
  animateTransform: AnimateTransformProps;
  circle: CircleProps;
  clipPath: ClipPathProps;
  defs: DefsProps;
  desc: SVGElementProps<SVGDescElement>;
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
  feFuncA: FeFuncProps<SVGFEFuncAElement>;
  feFuncB: FeFuncProps<SVGFEFuncBElement>;
  feFuncG: FeFuncProps<SVGFEFuncGElement>;
  feFuncR: FeFuncProps<SVGFEFuncRElement>;
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
  metadata: SVGElementProps<SVGMetadataElement>;
  mpath: SVGElementProps<SVGMPathElement>;
  path: PathProps;
  pattern: PatternProps;
  polygon: PolygonProps;
  polyline: PolylineProps;
  radialGradient: RadialGradientProps;
  rect: RectProps;
  svg: SvgProps;
  set: SetProps;
  stop: StopProps;
  switch: SVGElementProps<SVGSwitchElement>;
  symbol: SymbolProps;
  text: TextProps;
  textPath: TextPathProps;
  tspan: TspanProps;
  use: UseProps;
  view: ViewProps;
}