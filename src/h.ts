import {
  applyChildren,
  applyClasses,
  applyProps,
  applyStyle
} from "./apply-props.js";
import { FreeJSX } from "./types/index.js";

export function h<TagName extends (keyof HTMLElementTagNameMap) | FreeJSX.ComponentFactory | (typeof Fragment)>(
  tagName: TagName,
  props: TagName extends keyof HTMLElementTagNameMap ? (FreeJSX.Props<TagName> | null)
    : TagName extends FreeJSX.ComponentFactory ? Parameters<TagName>[0]
    : any,
  ...children: FreeJSX.ComponentChild[]
): TagName extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[TagName]
  : TagName extends FreeJSX.ComponentFactory ? ReturnType<TagName>
  : Node {
  props ??= {} as typeof props;

  if (tagName === Fragment)
    return Fragment(children) as unknown as ReturnType<typeof h<TagName>>;

  if (typeof tagName === "function") {
    if (!(tagName.prototype instanceof HTMLElement))
      return (<FreeJSX.ComponentFactory>tagName)({ ...props, children }) as unknown as ReturnType<typeof h<TagName>>;

    const element = Reflect.construct(tagName, [props]);
    applyChildren(element, children);
    return element;
  }

  const element = document.createElement(tagName);
  const { $init, style, classes, className, classNames, ...others } = props as FreeJSX.Props<keyof FreeJSX.HTMLPropsTagNameMap>;
  delete props.$init;

  applyClasses(element, className, classNames, classes);
  style && applyStyle(element, style);
  // @ts-ignore
  applyProps(element, others);
  applyChildren(element, children);
  $init && $init(element as any);
  return element as unknown as ReturnType<typeof h<TagName>>;
}

export function Fragment(children: FreeJSX.ComponentChild[]): DocumentFragment {
  const fragment = document.createDocumentFragment();
  applyChildren(fragment, children);
  return fragment;
}