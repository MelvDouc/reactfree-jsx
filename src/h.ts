import {
  applyChildren,
  applyClasses,
  applyProps,
  applyStyles
} from "./apply-props.js";

export function h<T extends keyof HTMLElementTagNameMap>(
  tagName: T | ComponentFactory | typeof Fragment,
  props: Props<T> | null,
  ...children: ComponentChild[]
): HTMLElementTagNameMap[T] | Node | ComponentFactory {
  props ??= {};

  if (tagName === Fragment)
    return Fragment(children);

  if (typeof tagName === "function") {
    if (!(tagName.prototype instanceof HTMLElement))
      return (<ComponentFactory>tagName)({ ...props, children });

    const element = Reflect.construct(tagName, [props]);
    applyChildren(element, children);
    return element as HTMLElement;
  }

  const element = document.createElement<T>(tagName);
  const { $init } = props;
  delete props.$init;

  applyClasses(element, props);
  applyStyles(element, props);
  applyProps<T>(element, props);
  applyChildren(element, children);
  $init && $init(element);
  return element;
}

export function Fragment(children: ComponentChild[]): DocumentFragment {
  const fragment = document.createDocumentFragment();
  applyChildren(fragment, children);
  return fragment;
}