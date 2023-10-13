type RecursiveArray<T> = (T | RecursiveArray<T>)[];
type ComponentChildren = RecursiveArray<unknown>;

type TagName = keyof HTMLElementTagNameMap;
type Component = <T extends HTMLElement>(props: Record<string, unknown> & { children?: ComponentChildren; }) => T;

type HTMLPropKey<E extends HTMLElement, K extends keyof E> =
  K extends HTMLReadonlyKeys ? never
  : E[K] extends Function ? never
  : K;

type HTMLElementProps<E extends HTMLElement> = {
  [K in keyof E as HTMLPropKey<E, K>]?: E[K]
};

type HTMLReadonlyKeys =
  | "ATTRIBUTE_NODE"
  | "CDATA_SECTION_NODE"
  | "COMMENT_NODE"
  | "DOCUMENT_FRAGMENT_NODE"
  | "DOCUMENT_NODE"
  | "DOCUMENT_POSITION_CONTAINED_BY"
  | "DOCUMENT_POSITION_CONTAINS"
  | "DOCUMENT_POSITION_DISCONNECTED"
  | "DOCUMENT_POSITION_FOLLOWING"
  | "DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC"
  | "DOCUMENT_POSITION_PRECEDING"
  | "DOCUMENT_TYPE_NODE"
  | "ELEMENT_NODE"
  | "ENTITY_NODE"
  | "ENTITY_REFERENCE_NODE"
  | "NOTATION_NODE"
  | "PROCESSING_INSTRUCTION_NODE"
  | "TEXT_NODE"
  | "accessKeyLabel"
  | "assignedSlot"
  | "attributeStyleMap"
  | "attributes"
  | "baseURI"
  | "childElementCount"
  | "childNodes"
  | "children"
  | "classList"
  | "clientHeight"
  | "clientLeft"
  | "clientTop"
  | "clientWidth"
  | "dataset"
  | "firstChild"
  | "firstElementChild"
  | "innerHTML"
  | "innerText"
  | "isConnected"
  | "isContentEditable"
  | "lastChild"
  | "lastElementChild"
  | "localName"
  | "namespaceURI"
  | "nextElementSibling"
  | "nextSibling"
  | "nodeName"
  | "nodeType"
  | "nodeValue"
  | "offsetHeight"
  | "offsetLeft"
  | "offsetParent"
  | "offsetTop"
  | "offsetWidth"
  | "outerHTML"
  | "outerText"
  | "ownerDocument"
  | "parentElement"
  | "parentNode"
  | "part"
  | "prefix"
  | "previousElementSibling"
  | "previousSibling"
  | "scrollHeight"
  | "scrollLeft"
  | "scrollTop"
  | "scrollWidth"
  | "shadowRoot"
  | "style"
  | "tagName"
  | "textContent";

declare global {
  namespace JSX {
    type IntrinsicElements = {
      [K in keyof HTMLElementTagNameMap]:
      & HTMLElementProps<HTMLElementTagNameMap[K]>
      & {
        $init?: (element: HTMLElementTagNameMap[K]) => void;
      }
    };
  }
}

export {
  RecursiveArray,
  ComponentChildren,
  Component,
  TagName,
  HTMLElementProps
};