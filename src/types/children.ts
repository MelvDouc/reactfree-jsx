import type { Observable } from "melv_observable";

export type PrimitiveChild = string | number | bigint | null | undefined;
export type PrimitiveOrNodeChild = PrimitiveChild | Node;
export type ComponentChild = PrimitiveOrNodeChild | Observable<PrimitiveChild | Element>;
export type ComponentChildren = ComponentChild | ComponentChild[];
export type ComponentFactory<TProps extends { children?: ComponentChildren; } = any> = (props: TProps) => Node | ComponentFactory;