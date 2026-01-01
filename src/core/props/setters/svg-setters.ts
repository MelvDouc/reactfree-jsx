import elementSetters, {
  addOrRemoveAttribute,
  createAttributeSetter as attributeSetter,
  eventListenerProperty,
  type ImgDecoding,
  type InferPropsTable
} from "$src/core/props/setters/element-setters.js";

const alignmentBaseline = attributeSetter<AlignementBaseline>("alignment-baseline");
const fill = attributeSetter("fill");
const inSetter = attributeSetter<FeIn>("in");
const mask = attributeSetter("mask");
const pathLength = attributeSetter<number>("pathLength");
const preserveAspectRatio = attributeSetter("preserveAspectRatio");
const result = attributeSetter("result");
const stroke = attributeSetter("stroke");
const viewBox = attributeSetter("viewBox");

const svgElementSetters = {
  ...elementSetters,
  color: attributeSetter("color"),
  decelerate: attributeSetter("decelerate"),
  display: attributeSetter("display"),
  filter: attributeSetter("filter"),
  xmlns: attributeSetter("xmlns")
} as const;

const svgAnimationSetters = {
  ...svgElementSetters,
  begin: attributeSetter("begin"),
  end: attributeSetter("end"),
  dur: attributeSetter("dur"),
  keyPoints: attributeSetter("keyPoints"),
  "on:begin": eventListenerProperty<Event>("begin"),
  "on:end": eventListenerProperty<Event>("end"),
  "on:repeat": eventListenerProperty<Event>("repeat"),
  repeatCount: attributeSetter("repeatCount"),
  repeatDur: attributeSetter("repeatDur"),
  requiredExtensions: attributeSetter("requiredExtensions"),
  restart: attributeSetter<Restart>("restart"),
  systemLanguage: attributeSetter("systemLanguage"),
  to: attributeSetter("to")
} as const;

const svgGradientSetters = {
  ...svgElementSetters,
  gradientTransform: attributeSetter("gradientTransform"),
  gradientUnits: attributeSetter<Units>("gradientUnits"),
  spreadMethod: attributeSetter<SpreadMethod>("spreadMethod")
} as const;

const svgTextSetters = {
  ...svgElementSetters,
  lengthAdjust: attributeSetter<LengthAdjust>("lengthAdjust"),
  textLength: attributeSetter("textLength"),
  stroke
} as const;

const deltaSetters = {
  dx: attributeSetter<string | number>("dx"),
  dy: attributeSetter<string | number>("dy")
};

const pointSetters = {
  x: attributeSetter<string | number>("x"),
  y: attributeSetter<string | number>("y")
};

const sizedSetters = {
  height: attributeSetter<string | number>("height"),
  width: attributeSetter<string | number>("width")
};

const animateSetters = {
  ...svgAnimationSetters,
  accumulate: attributeSetter<Accumulate>("accumulate"),
  additive: attributeSetter<Additive>("additive"),
  attributeName: attributeSetter("attributeName"),
  by: attributeSetter<string | number>("by"),
  calcMode: attributeSetter<CalcMode>("calcMode"),
  fill: attributeSetter<AnimateFill>("fill"),
  from: attributeSetter("from"),
  keySplines: attributeSetter("keySplines"),
  keyTimes: attributeSetter("keyTimes"),
  values: attributeSetter("values")
};

const animateMotionSetters = {
  ...svgAnimationSetters,
  accumulate: attributeSetter<Accumulate>("accumulate"),
  additive: attributeSetter<Additive>("additive"),
  attributeName: attributeSetter("attributeName"),
  by: attributeSetter<string | number>("by"),
  calcMode: attributeSetter<CalcMode>("calcMode"),
  fill: attributeSetter<AnimateFill>("fill"),
  from: attributeSetter("from"),
  keySplines: attributeSetter("keySplines"),
  keyTimes: attributeSetter("keyTimes"),
  path: attributeSetter("path"),
  rotate: attributeSetter<string | number>("rotate"),
  values: attributeSetter("values")
};

const animateTransformSetters = {
  ...svgAnimationSetters,
  type: attributeSetter<AnimateTransformType>("type")
};

const circleSetters = {
  ...svgElementSetters,
  cx: attributeSetter<string | number>("cx"),
  cy: attributeSetter<string | number>("cy"),
  fill,
  mask,
  pathLength,
  r: attributeSetter<string | number>("r"),
  stroke
};

const clipPathSetters = {
  ...svgElementSetters,
  clipPathUnits: attributeSetter<Units>("clipPathUnits"),
  mask
};

const ellipseSetters = {
  ...svgElementSetters,
  cx: attributeSetter<string | number>("cx"),
  cy: attributeSetter<string | number>("cy"),
  fill,
  mask,
  pathLength,
  rx: attributeSetter<string | number>("rx"),
  ry: attributeSetter<string | number>("ry"),
  stroke
};

const feBlendSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  in: inSetter,
  in2: attributeSetter<FeIn>("in2"),
  mode: attributeSetter("mode"),
  result
};

const feColorMatrixSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  in: inSetter,
  result,
  type: attributeSetter<FeColorMatrixType>("type"),
  values: attributeSetter("values")
};

const feComponentTransferSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  in: inSetter,
  in2: attributeSetter<FeIn>("in2"),
  result
};

const feCompositeSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  in: inSetter,
  k1: attributeSetter<number>("k1"),
  k2: attributeSetter<number>("k2"),
  k3: attributeSetter<number>("k3"),
  k4: attributeSetter<number>("k4"),
  operator: attributeSetter<FeCompositeOperator>("operator"),
  result
};

const feConvolveMatrixSetters = {
  ...svgElementSetters,
  ...pointSetters,
  bias: attributeSetter<number>("bias"),
  divisor: attributeSetter<number>("divisor"),
  edgeMode: attributeSetter<EdgeMode>("edgeMode"),
  in: inSetter,
  kernelMatrix: attributeSetter("kernelMatrix"),
  order: attributeSetter("order"),
  preserveAlpha: (e: SVGFEConvolveMatrixElement, v: boolean) => addOrRemoveAttribute(e, "preserveAlpha", v),
  result,
  targetX: attributeSetter<number>("targetX"),
  targetY: attributeSetter<number>("targetY")
};

const feDiffuseLightingSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  diffuseConstant: attributeSetter<number>("diffuseConstant"),
  in: inSetter,
  result,
  surfaceScale: attributeSetter<number>("surfaceScale")
};

const feDisplacementMapSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  in: inSetter,
  in2: attributeSetter<FeIn>("in2"),
  result,
  scale: attributeSetter<number>("scale"),
  xChannelSelector: attributeSetter<ChannelSelector>("xChannelSelector"),
  yChannelSelector: attributeSetter<ChannelSelector>("yChannelSelector")
};

const feDistantLightSetters = {
  ...svgElementSetters,
  azimuth: attributeSetter<number>("azimuth"),
  elevation: attributeSetter<number>("elevation")
};

const feDropShadowSetters = {
  ...svgElementSetters,
  ...deltaSetters,
  ...sizedSetters,
  in: inSetter,
  result
};

const feFloodSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  result
};

const feFuncSetters = {
  ...svgElementSetters,
  ...pointSetters,
  amplitude: attributeSetter<number>("amplitude"),
  exponent: attributeSetter<number>("exponent"),
  intercept: attributeSetter<number>("intercept"),
  offset: attributeSetter<number>("offset"),
  slope: attributeSetter<number>("slope"),
  tableValues: attributeSetter("tableValues"),
  type: attributeSetter<FeFuncType>("type")
};

const feGaussianBlurSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  edgeMode: attributeSetter<EdgeMode>("edgeMode"),
  in: inSetter,
  result,
  stdDeviation: attributeSetter<string | number>("stdDeviation")
};

const feImageSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  crossOrigin: attributeSetter<CrossOrigin>("crossOrigin"),
  href: attributeSetter("href"),
  preserveAspectRatio,
  result
};

const feMergeSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  in: inSetter,
  result
};

const feMergeNodeSetters = {
  ...svgElementSetters,
  ...pointSetters,
  in: inSetter
};

const feMorphologySetters = {
  ...svgElementSetters,
  ...sizedSetters,
  in: inSetter,
  radius: attributeSetter<string | number>("radius"),
  result
};

const feOffsetSetters = {
  ...svgElementSetters,
  ...deltaSetters,
  ...sizedSetters,
  in: inSetter,
  operator: attributeSetter<FeOffsetOperator>("operator"),
  result
};

const fePointLightSetters = {
  ...svgElementSetters,
  x: attributeSetter<number>("x"),
  y: attributeSetter<number>("y"),
  z: attributeSetter<number>("z")
};

const feSpecularLightingSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  in: inSetter,
  result,
  specularConstant: attributeSetter<number>("specularConstant"),
  specularExponent: attributeSetter<number>("specularExponent"),
  surfaceScale: attributeSetter<number>("surfaceScale")
};

const feSpotLightSetters = {
  ...svgElementSetters,
  limitingConeAngle: attributeSetter<number>("limitingConeAngle"),
  pointsAtX: attributeSetter<number>("pointsAtX"),
  pointsAtY: attributeSetter<number>("pointsAtY"),
  pointsAtZ: attributeSetter<number>("pointsAtZ"),
  specularExponent: attributeSetter<number>("specularExponent"),
  x: attributeSetter<number>("x"),
  y: attributeSetter<number>("y"),
  z: attributeSetter<number>("z")
};

const feTileSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  in: inSetter,
  result
};

const feTurbulenceSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  baseFrequency: attributeSetter<string | number>("baseFrequency"),
  numOctaves: attributeSetter<number>("numOctaves"),
  result,
  seed: attributeSetter<number>("seed"),
  stitchTiles: attributeSetter<StitchTiles>("stitchTiles"),
  type: attributeSetter<FeTurbulenceType>("type")
};

const filterSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  filterUnits: attributeSetter<Units>("filterUnits"),
  primitiveUnits: attributeSetter<Units>("primitiveUnits")
};

const foreignObjectSetters = {
  ...svgElementSetters, ...sizedSetters
};

const gSetters = {
  ...svgElementSetters,
  mask
};

const imageSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  crossOrigin: attributeSetter<CrossOrigin>("crossorigin"),
  decoding: attributeSetter<ImgDecoding>("decoding"),
  mask,
  preserveAspectRatio
};

const linearGradientSetters = {
  ...svgGradientSetters,
  x1: attributeSetter<string | number>("x1"),
  x2: attributeSetter<string | number>("x2"),
  y1: attributeSetter<string | number>("y1"),
  y2: attributeSetter<string | number>("y2")
};

const lineSetters = {
  ...svgElementSetters,
  mask,
  pathLength,
  stroke,
  x1: attributeSetter<string | number>("x1"),
  x2: attributeSetter<string | number>("x2"),
  y1: attributeSetter<string | number>("y1"),
  y2: attributeSetter<string | number>("y2")
};

const markerSetters = {
  ...svgElementSetters,
  ...pointSetters,
  mask,
  markerHeight: attributeSetter<string | number>("markerHeight"),
  markerUnits: attributeSetter<MarkerUnits>("markerUnits"),
  markerWidth: attributeSetter<string | number>("markerWidth"),
  orient: attributeSetter("orient"),
  preserveAspectRatio,
  refX: attributeSetter<string | number>("refX"),
  refY: attributeSetter<string | number>("refY"),
  viewBox
};

const maskSetters = {
  ...svgElementSetters,
  mask,
  maskContentUnits: attributeSetter<Units>("maskContentUnits"),
  maskUnits: attributeSetter<Units>("maskUnits")
};

const pathSetters = {
  ...svgElementSetters,
  d: attributeSetter("d"),
  fill,
  mask,
  pathLength,
  stroke
};

const patternSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  patternContentUnits: attributeSetter<Units>("patternContentUnits"),
  patternTransform: attributeSetter("patternTransform"),
  patternUnits: attributeSetter<Units>("patternUnits"),
  preserveAspectRatio,
  viewBox
};

const polygonSetters = {
  ...svgElementSetters,
  fill,
  mask,
  pathLength,
  points: attributeSetter("points"),
  stroke
};

const polylineSetters = {
  ...svgElementSetters, ...polygonSetters
};

const radialGradientSetters = {
  ...svgGradientSetters,
  cx: attributeSetter<string | number>("cx"),
  cy: attributeSetter<string | number>("cy"),
  fr: attributeSetter<string>("fr"),
  fx: attributeSetter<string | number>("fx"),
  fy: attributeSetter<string | number>("fy"),
  r: attributeSetter<string>("r")
};

const rectSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  fill,
  mask,
  pathLength,
  rx: attributeSetter<string | number>("rx"),
  ry: attributeSetter<string | number>("ry"),
  stroke
};

const svgSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  fill,
  mask,
  preserveAspectRatio,
  viewBox
};

const setSetters = {
  ...svgElementSetters,
  attributeName: attributeSetter("attributeName")
};

const stopSetters = {
  ...svgElementSetters,
  offset: attributeSetter<string | number>("offset")
};

const symbolSetters = {
  ...svgElementSetters,
  mask,
  preserveAspectRatio,
  refX: attributeSetter<string | number>("refX"),
  refY: attributeSetter<string | number>("refY"),
  viewBox
};

const textSetters = {
  ...svgTextSetters,
  ...deltaSetters,
  ...pointSetters,
  alignmentBaseline,
  direction: attributeSetter<Direction>("direction"),
  fill,
  mask
};

const textPathSetters = {
  ...svgTextSetters,
  alignmentBaseline,
  baselineShift: attributeSetter<string>("baseline-shift"),
  direction: attributeSetter<Direction>("direction"),
  fill,
  path: attributeSetter("path"),
  side: attributeSetter<TextPathSide>("side"),
  spacing: attributeSetter<TextPathSpacing>("spacing"),
  startOffset: attributeSetter<string | number>("startOffset")
};

const tspanSetters = {
  ...svgTextSetters,
  ...deltaSetters,
  ...pointSetters,
  alignmentBaseline,
  baselineShift: attributeSetter<string>("baseline-shift"),
  direction: attributeSetter<Direction>("direction"),
  fill
};

const useSetters = {
  ...svgElementSetters,
  ...sizedSetters,
  mask
};

const viewSetters = {
  ...svgElementSetters,
  preserveAspectRatio,
  viewBox
};

export const SVGElementSetterTable = {
  animate: animateSetters,
  animateMotion: animateMotionSetters,
  animateTransform: animateTransformSetters,
  circle: circleSetters,
  clipPath: clipPathSetters,
  defs: svgElementSetters,
  desc: svgElementSetters,
  ellipse: ellipseSetters,
  feBlend: feBlendSetters,
  feColorMatrix: feColorMatrixSetters,
  feComponentTransfer: feComponentTransferSetters,
  feComposite: feCompositeSetters,
  feConvolveMatrix: feConvolveMatrixSetters,
  feDiffuseLighting: feDiffuseLightingSetters,
  feDisplacementMap: feDisplacementMapSetters,
  feDistantLight: feDistantLightSetters,
  feDropShadow: feDropShadowSetters,
  feFlood: feFloodSetters,
  feGaussianBlur: feGaussianBlurSetters,
  feMerge: feMergeSetters,
  feMergeNode: feMergeNodeSetters,
  feMorphology: feMorphologySetters,
  feImage: feImageSetters,
  feFuncA: feFuncSetters,
  feFuncB: feFuncSetters,
  feFuncG: feFuncSetters,
  feFuncR: feFuncSetters,
  feOffset: feOffsetSetters,
  fePointLight: fePointLightSetters,
  feSpecularLighting: feSpecularLightingSetters,
  feSpotLight: feSpotLightSetters,
  feTile: feTileSetters,
  feTurbulence: feTurbulenceSetters,
  filter: filterSetters,
  foreignObject: foreignObjectSetters,
  g: gSetters,
  image: imageSetters,
  line: lineSetters,
  linearGradient: linearGradientSetters,
  marker: markerSetters,
  mask: maskSetters,
  metadata: svgElementSetters,
  mpath: svgElementSetters,
  path: pathSetters,
  pattern: patternSetters,
  polygon: polygonSetters,
  polyline: polylineSetters,
  radialGradient: radialGradientSetters,
  rect: rectSetters,
  svg: svgSetters,
  set: setSetters,
  stop: stopSetters,
  switch: svgElementSetters,
  symbol: symbolSetters,
  text: textSetters,
  textPath: textPathSetters,
  tspan: tspanSetters,
  use: useSetters,
  view: viewSetters
} as const;

export type SVGElementPropMap = InferPropsTable<typeof SVGElementSetterTable, SVGElement>;

type Accumulate = "sum" | "none";
type Additive = "sum" | "replace";
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
type AnimateTransformType = "translate" | "scale" | "rotate" | "skewX" | "skewY";
type CalcMode = "discrete" | "linear" | "paced" | "spline";
type ChannelSelector = "R" | "G" | "B" | "A";
type CrossOrigin = "anonymous" | "use-credentials" | "";
type Direction = "ltr" | "rtl";
type EdgeMode = "duplicate" | "wrap" | "none";
type FeColorMatrixType = "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
type FeCompositeOperator = "over" | "in" | "out" | "atop" | "xor" | "lighter" | "arithmetic";
type FeFuncType = "identity" | "table" | "discrete" | "linear" | "gamma";
type FeIn = "SourceGraphic" | "SourceAlpha" | "BackgroundImage" | "BackgroundAlpha" | "FillPaint" | "StrokePaint";
type FeOffsetOperator = "erode" | "dilate";
type FeTurbulenceType = "fractalNoise" | "turbulence";
type LengthAdjust = "spacing" | "spacingAndGlyphs";
type MarkerUnits = "userSpaceOnUse" | "strokeWidth";
type Restart = "always" | "whenNotActive" | "never";
type SpreadMethod = "pad" | "reflect" | "repeat";
type StitchTiles = "noStitch" | "stitch";
type TextPathSide = "left" | "right";
type TextPathSpacing = "auto" | "exact";
type Units = "userSpaceOnUse" | "objectBoundingBox";