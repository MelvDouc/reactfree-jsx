import Observable from "melv_observable";

export type {
  JSX
};

export type ComponentChild = ComponentChild[] | Node | string | number | boolean | undefined | null;
export type ComponentChildren = ComponentChild | ComponentChild[];
export type ComponentFactory = (props: BaseProps) => Element | ComponentFactory;

interface BaseProps {
  children?: ComponentChildren;
}

interface ElementEditableProps {
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
  ariaDisabled: string;
  ariaExpanded: string;
  ariaHasPopup: string;
  ariaHidden: string;
  ariaKeyShortcuts: string;
  ariaLabel: string;
  ariaLevel: string;
  ariaLive: string;
  ariaModal: string;
  ariaMultiline: string;
  ariaMultiSelectable: string;
  ariaOrientation: string;
  ariaPlaceholder: string;
  ariaPosInSet: string;
  ariaPressed: string;
  ariaReadOnly: string;
  ariaRelevant: string;
  ariaRequired: string;
  ariaRoleDescription: string;
  ariaRowCount: string;
  ariaRowIndex: string;
  ariaRowIndexText: string;
  ariaRowSpan: string;
  ariaSelected: string;
  ariaSetSize: string;
  ariaSort: string;
  ariaValueMax: string;
  ariaValueMin: string;
  ariaValueNow: string;
  ariaValueText: string;
  className: string;
  id: string;
  innerHTML: string;
  onbeforematch: EventListener;
  onbeforescriptexecute: EventListener;
  onblur: EventListener;
  onclick: EventListener;
  oncompositionend: EventListener;
  oncompositionstart: EventListener;
  oncompositionupdate: EventListener;
  oncontextmenu: EventListener;
  oncopy: EventListener;
  oncut: EventListener;
  ondblclick: EventListener;
  onDOMActivate: EventListener;
  onDOMMouseScroll: EventListener;
  onerror: EventListener;
  onfocus: EventListener;
  onfocusin: EventListener;
  onfocusout: EventListener;
  onfullscreenchange: EventListener;
  onfullscreenerror: EventListener;
  ongesturechange: EventListener;
  ongestureend: EventListener;
  ongesturestart: EventListener;
  ongotpointercapture: EventListener;
  onkeydown: EventListener;
  onkeypress: EventListener;
  onkeyup: EventListener;
  onlostpointercapture: EventListener;
  onmousedown: EventListener;
  onmouseenter: EventListener;
  onmouseleave: EventListener;
  onmousemove: EventListener;
  onmouseout: EventListener;
  onmouseover: EventListener;
  onmouseup: EventListener;
  onmousewheel: EventListener;
  onMozMousePixelScroll: EventListener;
  onmsContentZoom: EventListener;
  onMSGestureChange: EventListener;
  onMSGestureEnd: EventListener;
  onMSGestureHold: EventListener;
  onMSGestureStart: EventListener;
  onMSGestureTap: EventListener;
  onMSInertiaStart: EventListener;
  onMSManipulationStateChanged: EventListener;
  onpaste: EventListener;
  onpointercancel: EventListener;
  onpointerdown: EventListener;
  onpointerenter: EventListener;
  onpointerleave: EventListener;
  onpointermove: EventListener;
  onpointerout: EventListener;
  onpointerover: EventListener;
  onpointerup: EventListener;
  onscroll: EventListener;
  onsecuritypolicyviolation: EventListener;
  onshow: EventListener;
  ontouchcancel: EventListener;
  ontouchend: EventListener;
  ontouchmove: EventListener;
  ontouchstart: EventListener;
  outerHTML: string;
  nonce: string;
  part: string;
  scrollLeft: number;
  scrollTop: number;
  slot: string;
  style: Partial<CSSStyleDeclaration>;
  tabIndex: number;
}

interface HTMLElementEditableProps extends ElementEditableProps {
  accessKey: string;
  contentEditable: "true" | "false";
  dataset: DOMStringMap;
  dir: "ltr" | "rtl" | "auto";
  enterkeyhint: string;
  hidden: boolean | string;
  inert: boolean;
  innerText: string;
  inputMode: string;
  lang: string;
  onanimationcancel: EventListener;
  onanimationend: EventListener;
  onanimationiteration: EventListener;
  onanimationstart: EventListener;
  onbeforeinput: EventListener;
  onchange: EventListener;
  oninput: EventListener;
  oninvalid: EventListener;
  ontransitioncancel: EventListener;
  ontransitionend: EventListener;
  ontransitionrun: EventListener;
  ontransitionstart: EventListener;
  outerText: string;
  title: string;
}

interface SVGElementEditableProps extends ElementEditableProps {
  onabort: EventListener;
  onerror: EventListener;
  onload: EventListener;
  onresize: EventListener;
  onscroll: EventListener;
  onunload: EventListener;
}

export interface Props extends BaseProps, Partial<HTMLElementEditableProps>, Partial<SVGElementEditableProps> {
  classObj?: Record<string, boolean | { obs: Observable<any>, predicate: (value: any) => boolean; }>;
  styleObj?: Record<string, string | Observable<string>>;
  [key: string]: any;
}

declare global {
  namespace JSX {
    type IntrinsicElementsHTML = {
      [TKey in keyof HTMLElementTagNameMap]?: Props & {
        $init?: (element: HTMLElementTagNameMap[TKey]) => any;
      }
    };
    type IntrinsicElements = IntrinsicElementsHTML;
  }
}