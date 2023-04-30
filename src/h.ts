import {
  applyChildren,
  applyClasses,
  applyProps,
  applyStyles
} from "./apply-props.js";

export function h<TKey extends keyof HTMLElementTagNameMap, TTagName extends TKey | FreeJSX.ComponentFactory | typeof Fragment>(
  tagName: TTagName,
  props: FreeJSX.Props<TKey> | null,
  ...children: FreeJSX.ComponentChild[]
): Node | FreeJSX.ComponentFactory {
  props ??= {};

  if (tagName === Fragment)
    return Fragment(children);

  if (typeof tagName === "function") {
    if (!(tagName.prototype instanceof HTMLElement))
      return (<FreeJSX.ComponentFactory>tagName)({ ...props, children });

    const element = Reflect.construct(tagName, [props]);
    applyChildren(element, children);
    return element;
  }

  const element = document.createElement<TKey>(tagName as TKey);
  const { $init } = props;
  delete props.$init;

  applyClasses(element, props);
  applyStyles(element, props);
  applyProps<TKey>(element, props);
  applyChildren(element, children);
  $init && $init(element);
  return element;
}

export function Fragment(children: FreeJSX.ComponentChild[]): DocumentFragment {
  const fragment = document.createDocumentFragment();
  applyChildren(fragment, children);
  return fragment;
}