import applyChildren from "@/apply-props/apply-children.js";
import applyClasses from "@/apply-props/apply-classes.js";
import applyProps from "@/apply-props/apply-props.js";
import applyStyle from "@/apply-props/apply-style.js";
import { ComponentChild, ComponentFactory, FreeJSX } from "@/types/index.js";

export function h<T extends TagName, Props = h_Props<T>, Returned = h_ReturnType<T>>(
  tagName: T,
  props: Props,
  ...children: ComponentChild[]
): Returned {
  if (tagName === Fragment)
    return Fragment(children) as Returned;

  props ??= {} as Props;

  if (typeof tagName !== "function")
    // @ts-ignore
    return createElement(tagName as keyof FreeJSX.HTMLPropsTagNameMap, props, children) as Returned;

  if (!(tagName.prototype instanceof HTMLElement))
    return (<ComponentFactory>tagName)({ ...props, children }) as Returned;

  const element: HTMLElement = Reflect.construct(tagName, [props]);
  applyChildren(element, children);
  return element as Returned;
}

export function Fragment(children: ComponentChild[]): DocumentFragment {
  const fragment = document.createDocumentFragment();
  applyChildren(fragment, children);
  return fragment;
}

function createElement<T extends keyof FreeJSX.HTMLPropsTagNameMap>(
  tagName: T,
  { $init, style, classes, className, classNames, extraAttributes, ...others }: FreeJSX.Props<T>,
  children: ComponentChild[]
) {
  const element = document.createElement(tagName);

  applyClasses(element, className, classNames, classes);
  style && applyStyle(element, style);
  // @ts-ignore
  applyProps(element, others);
  extraAttributes && Object.keys(extraAttributes).forEach((key) => element.setAttribute(key, extraAttributes[key]));
  applyChildren(element, children);
  $init && $init(element);
  return element;

}

type TagName = (typeof Fragment) | string | ComponentFactory;
type h_Props<T extends TagName> =
  T extends (typeof Fragment) ? null
  : T extends ComponentFactory ? Parameters<T>[0]
  : T extends keyof FreeJSX.IntrinsicElementsHTML ? FreeJSX.Props<T>
  : string;
type h_ReturnType<T extends TagName> =
  T extends (typeof Fragment) ? DocumentFragment
  : T extends ComponentFactory ? ReturnType<T>
  : T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T]
  : string;