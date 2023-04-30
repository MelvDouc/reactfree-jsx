// ===== ===== ===== ===== =====
// JSX
// ===== ===== ===== ===== =====

declare namespace JSX {
  type IntrinsicElementsHTML = {
    [K in keyof FreeJSX.HTMLElementTagNameMap]: {
      [P in keyof FreeJSX.HTMLElementTagNameMap[K]]?: PossibleObs<FreeJSX.HTMLElementTagNameMap[K][P]>
    } & Partial<FreeJSX.FreeJsxExtra<K>>
  };

  type IntrinsicElements = IntrinsicElementsHTML;
}

// ===== ===== ===== ===== =====
// OBSERVABLE
// ===== ===== ===== ===== =====

interface Obs<T> {
  value: T;
  subscribe(subscription: (value: T) => void): VoidFunction;
  map<U>(mapFn: (value: T) => U): Obs<U>;
  notify(): void;
}

type PossibleObs<T> = T | Obs<T>;

declare namespace FreeJSX {
  // ===== ===== ===== ===== =====
  // COMPONENTS
  // ===== ===== ===== ===== =====

  type PrimitiveChild = string | number | bigint | boolean | null | undefined;
  type PrimitiveOrNodeChild = PrimitiveChild | Node;
  type ComponentChild = PrimitiveOrNodeChild | ComponentFactory | Obs<PrimitiveOrNodeChild>;
  type ComponentChildren = ComponentChild | ComponentChild[];
  type ComponentFactory<TProps extends { children?: ComponentChildren; } = any> = (props: TProps) => Node | ComponentFactory;

  // ===== ===== ===== ===== =====
  // PROPERTIES
  // ===== ===== ===== ===== =====

  type Props<T extends keyof JSX.IntrinsicElements> = Partial<JSX.IntrinsicElements[T]>;

  type FreeJsxOptionalClass = {
    className?: PossibleObs<string>;
    /**
     * An array of CSS classes to add to the element.
     */
    classNames?: string[];
    /**
     * A record of CSS classes that will be added to the element if the value is true
     * or, if it is an observable, when its value changes to `true`.
     */
    classes?: Record<string, PossibleObs<boolean>>;
  };

  type FreeJsxExtra<K extends keyof FreeJSX.HTMLElementTagNameMap> = {
    /**
     * A function to run on the element after its properties have been set.
     * @param element The element being created.
     */
    $init: (element: globalThis.HTMLElementTagNameMap[K]) => void;
    /**
     * A record of CSS classes that will be applied to the element
     * either directly or dynamically via an observable.
     */
    style: FreeJsxStyles;
  } & FreeJsxOptionalClass;

  // ===== ===== ===== ===== =====
  // STYLES
  // ===== ===== ===== ===== =====

  type CSSStyleDeclarationMethod = "getPropertyPriority" | "getPropertyValue" | "item" | "length" | "removeProperty" | "setProperty";
  type MethodFreeCSSStyleDeclaration = Omit<CSSStyleDeclaration, CSSStyleDeclarationMethod>;
  type FreeJsxStyles = {
    [K in keyof MethodFreeCSSStyleDeclaration]?: PossibleObs<MethodFreeCSSStyleDeclaration[K]>
  };

  // ===== ===== ===== ===== =====
  // COMMON PROPS
  // ===== ===== ===== ===== =====

  interface AutoComplete {
    autocomplete: string;
  }

  interface Disableable {
    disabled: boolean;
  }

  interface Href {
    href: string;
  }

  interface Named {
    name: string;
  }

  interface MinMax {
    min: number | string;
    max: number | string;
  }

  interface Rel {
    rel: string;
  }

  interface Sourced {
    src: string;
  }

  interface WithReferrerPolicy {
    referrerPolicy: string;
  }

  interface Targeter {
    target: string;
  }

  interface WithText {
    text: string;
  }

  interface Valued {
    value: string | number;
  }

  interface Dimensions {
    height: number | string;
    width: number | string;
  }

  // ===== ===== ===== ===== =====
  // PROPS INTERFACES
  // ===== ===== ===== ===== =====

  type InlineListener = ((this: Element, ev: Event) => any) | null;

  interface FreeJsxElement extends ARIAMixin, Omit<GlobalEventHandlers, "addEventListener" | "removeEventListener"> {
    id: string;
    onfullscreenchange: InlineListener;
    onfullscreenerror: InlineListener;
    scrollLeft: number;
    scrollTop: number;
    slot: string;
    [dataAttribute: `data${string}`]: string;
  }

  interface FreeJsxHTMLElement extends FreeJsxElement {
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
    spellcheck: boolean;
    tabIndex: string | number;
    title: string;
    translate: boolean;
  }

  interface Hyperlink extends FreeJsxHTMLElement, Href {
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

  interface Citable extends FreeJsxHTMLElement {
    cite: string;
  }

  interface Anchor extends Hyperlink, Named, Rel, Targeter, WithReferrerPolicy, WithText {
    download: string;
    hreflang: string;
    type: string;
  }

  interface Area extends Hyperlink, WithReferrerPolicy, Targeter {
    alt: string;
    coords: string;
    download: string;
    shape: string;
  }

  interface Body extends FreeJsxHTMLElement {
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

  interface Button extends FreeJsxHTMLElement, Disableable, Named, Valued {
    autofocus: boolean;
    formAction: string;
    formEnctype: string;
    formMethod: string;
    formNoValidate: boolean;
    formTarget: string;
    type: string;
  }

  interface Dialog extends Omit<FreeJsxHTMLElement, "tabIndex"> {
    open: boolean;
    returnValue: string;
  }

  interface Form extends FreeJsxHTMLElement, AutoComplete, Named, Targeter {
    acceptCharset: string;
    action: string;
    encoding: string;
    enctype: string;
    method: "get" | "post" | "dialog" | string;
    noValidate: boolean;
  }

  interface Iframe extends FreeJsxHTMLElement, Dimensions, Named, Sourced, WithReferrerPolicy {
    allow: string;
    allowfullscreen: boolean;
    scrolling: string;
    srcdoc: string;
  }

  interface FreeJsxImage extends FreeJsxHTMLElement, Dimensions, Sourced, WithReferrerPolicy {
    alt: string;
    crossOrigin: string | null;
    decoding: "async" | "sync" | "auto";
    isMap: boolean;
    loading: "eager" | "lazy";
    sizes: string;
  }

  interface Input extends
    FreeJsxHTMLElement,
    AutoComplete,
    Dimensions,
    Disableable,
    MinMax,
    Named,
    Sourced,
    Valued {
    alt: string;
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
    indeterminate: boolean;
    list: string;
    maxLength: number;
    minLength: number;
    multiple: boolean;
    pattern: string;
    placeholder: string;
    required: boolean;
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

  interface Label extends FreeJsxHTMLElement {
    htmlFor: string;
  }

  interface Link extends FreeJsxHTMLElement, Disableable, Href, Rel, Targeter, WithReferrerPolicy {
    as: string;
    crossOrigin: string | null;
    hreflang: string;
    imageSizes: string;
    imageSrcset: string;
    integrity: string;
    media: string;
    type: string;
  }

  interface MetaElement extends FreeJsxHTMLElement, Named {
    content: string;
    httpEquiv: string;
    media: string;
  }

  interface Meter extends FreeJsxHTMLElement, MinMax, Valued {
    high: number;
    low: number;
    optimum: number;
  }

  interface ObjectElement extends FreeJsxHTMLElement, Dimensions, Named {
    data: string;
    standby: string;
    type: string;
    useMap: string;
  }

  interface Ol extends FreeJsxHTMLElement {
    reversed: boolean;
    start: number;
    type: string;
  }

  interface Option extends FreeJsxHTMLElement, Disableable, Valued, WithText {
    defaultSelected: boolean;
    label: string;
    selected: boolean;
  }

  interface Output extends FreeJsxHTMLElement, Named, Valued {
    defaultValue: string;
  }

  interface Progress extends FreeJsxHTMLElement {
    max: number;
    value: number;
  }

  interface Script extends FreeJsxHTMLElement, WithReferrerPolicy, Sourced, WithText {
    async: boolean;
    crossOrigin: string;
    defer: boolean;
    integrity: string;
    noModule: boolean;
    type: string;
  }

  interface Select extends FreeJsxHTMLElement, AutoComplete, Disableable, Named, Valued {
    length: number;
    multiple: boolean;
    required: boolean;
    selectedIndex: number;
    size: number;
  }

  interface FreeJsxSource extends FreeJsxHTMLElement, Dimensions, Sourced {
    media: string;
    sizes: string;
    srcset: string;
    type: string;
  }

  interface StyleElement extends FreeJsxHTMLElement, Disableable {
    media: string;
  }

  interface Textarea extends FreeJsxHTMLElement, AutoComplete, Disableable, Named, Valued {
    cols: number;
    defaultValue: string;
    dirName: string;
    maxLength: number;
    minLength: number;
    placeholder: string;
    readOnly: boolean;
    required: boolean;
    rows: number;
    selectionDirection: "forward" | "backward" | "none" | string;
    selectionEnd: number;
    selectionStart: number;
    wrap: string;
  }

  interface Track extends FreeJsxHTMLElement, Sourced {
    default: boolean;
    kind: string;
    label: string;
    srclang: string;
  }

  interface TableCell extends FreeJsxHTMLElement {
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

  interface Video extends FreeJsxHTMLElement, Dimensions {
    disablePictureInPicture: boolean;
    onenterpictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
    onleavepictureinpicture: ((this: HTMLVideoElement, ev: Event) => any) | null;
    playsInline: boolean;
    poster: string;
  }

  // ===== ===== ===== ===== =====
  // FREEJSX_TAG_NAME_MAP
  // ===== ===== ===== ===== =====

  interface HTMLElementTagNameMap {
    a: Anchor;
    abbr: FreeJsxHTMLElement;
    address: FreeJsxHTMLElement;
    area: Area;
    article: FreeJsxHTMLElement;
    aside: FreeJsxHTMLElement;
    audio: FreeJsxHTMLElement;
    b: FreeJsxHTMLElement;
    base: FreeJsxHTMLElement & Href;
    bdi: FreeJsxHTMLElement;
    bdo: FreeJsxHTMLElement;
    blockquote: Citable;
    body: Body;
    br: FreeJsxHTMLElement;
    button: Button;
    canvas: FreeJsxHTMLElement & Dimensions;
    caption: FreeJsxHTMLElement;
    cite: FreeJsxHTMLElement;
    code: FreeJsxHTMLElement;
    col: FreeJsxHTMLElement;
    colgroup: FreeJsxHTMLElement;
    data: FreeJsxHTMLElement & Valued;
    datalist: FreeJsxHTMLElement;
    dd: FreeJsxHTMLElement;
    del: Citable;
    details: FreeJsxHTMLElement & { open: boolean; };
    dfn: FreeJsxHTMLElement;
    dialog: Dialog;
    div: FreeJsxHTMLElement;
    dl: FreeJsxHTMLElement;
    dt: FreeJsxHTMLElement;
    em: FreeJsxHTMLElement;
    embed: FreeJsxHTMLElement & Dimensions & Sourced & {
      type: string;
    };
    fieldset: FreeJsxHTMLElement & Disableable & Named;
    figcaption: FreeJsxHTMLElement;
    figure: FreeJsxHTMLElement;
    footer: FreeJsxHTMLElement;
    form: Form;
    h1: FreeJsxHTMLElement;
    h2: FreeJsxHTMLElement;
    h3: FreeJsxHTMLElement;
    h4: FreeJsxHTMLElement;
    h5: FreeJsxHTMLElement;
    h6: FreeJsxHTMLElement;
    head: FreeJsxHTMLElement;
    header: FreeJsxHTMLElement;
    hgroup: FreeJsxHTMLElement;
    hr: FreeJsxHTMLElement;
    html: FreeJsxHTMLElement;
    i: FreeJsxHTMLElement;
    iframe: Iframe;
    img: FreeJsxImage;
    input: Input;
    ins: Citable;
    kbd: FreeJsxHTMLElement;
    label: Label;
    legend: FreeJsxHTMLElement;
    li: FreeJsxHTMLElement & Valued;
    link: Link;
    main: FreeJsxHTMLElement;
    map: FreeJsxHTMLElement & Named;
    mark: FreeJsxHTMLElement;
    menu: FreeJsxHTMLElement;
    meta: MetaElement;
    meter: Meter;
    nav: FreeJsxHTMLElement;
    noscript: FreeJsxHTMLElement;
    object: ObjectElement;
    ol: Ol;
    optgroup: FreeJsxHTMLElement & Disableable & { label: string; };
    option: Option;
    output: Output;
    p: FreeJsxHTMLElement;
    picture: FreeJsxHTMLElement;
    pre: FreeJsxHTMLElement;
    progress: Progress;
    q: Citable;
    rp: FreeJsxHTMLElement;
    rt: FreeJsxHTMLElement;
    ruby: FreeJsxHTMLElement;
    s: FreeJsxHTMLElement;
    samp: FreeJsxHTMLElement;
    script: Script;
    section: FreeJsxHTMLElement;
    select: Select;
    slot: Omit<FreeJsxHTMLElement, "slot"> & Named;
    small: FreeJsxHTMLElement;
    source: FreeJsxSource;
    span: FreeJsxHTMLElement;
    strong: FreeJsxHTMLElement;
    style: StyleElement;
    sub: FreeJsxHTMLElement;
    summary: FreeJsxHTMLElement;
    sup: FreeJsxHTMLElement;
    table: FreeJsxHTMLElement;
    tbody: FreeJsxHTMLElement;
    td: TableCell;
    template: FreeJsxHTMLElement;
    textarea: Textarea;
    tfoot: FreeJsxHTMLElement;
    th: TableCell;
    thead: FreeJsxHTMLElement;
    time: FreeJsxHTMLElement & { dateTime: string; };
    title: FreeJsxHTMLElement & WithText;
    tr: FreeJsxHTMLElement;
    track: Track;
    u: FreeJsxHTMLElement;
    ul: FreeJsxHTMLElement;
    var: FreeJsxHTMLElement;
    video: Video;
    wbr: FreeJsxHTMLElement;
  }
}