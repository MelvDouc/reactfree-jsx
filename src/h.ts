import {
  applyChildren,
  applyClasses,
  applyProps,
  applyStyles
} from "./apply-props.js";

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
  const { $init } = props;
  delete props.$init;

  applyClasses(element, props);
  applyStyles(element, props);
  applyProps(element, props);
  applyChildren(element, children);
  $init && $init(element);
  return element as unknown as ReturnType<typeof h<TagName>>;
}

export function Fragment(children: FreeJSX.ComponentChild[]): DocumentFragment {
  const fragment = document.createDocumentFragment();
  applyChildren(fragment, children);
  return fragment;
}