import { Obs } from "./Obs.js";

type PrimitiveChild = string | number | bigint | boolean | null | undefined;
type PrimitiveOrNodeChild = PrimitiveChild | Node;
export type ComponentChild = PrimitiveOrNodeChild | ComponentFactory | Obs<PrimitiveChild | Element>;
export type ComponentChildren = ComponentChild | ComponentChild[];
export type ComponentFactory<TProps extends { children?: ComponentChildren; } = any> = (props: TProps) => Node | ComponentFactory;