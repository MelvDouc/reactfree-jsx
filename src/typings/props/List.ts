import type { CommonProps } from "@/typings/props/Props.js";

export interface LiProps extends CommonProps {
  value: string;
}

export interface OlProps extends CommonProps {
  reversed: boolean;
  start: number;
  type: string;
}