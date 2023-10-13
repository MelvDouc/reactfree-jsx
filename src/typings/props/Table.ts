import { CommonProps } from "@/typings/props/Props.js";

export interface TableProps extends CommonProps {
  caption: HTMLTableCaptionElement | null;
  frame: string;
}

export interface TableCellProps extends CommonProps {
  abbr: string;
  colSpan: number;
  headers: string;
  rowSpan: number;
  scope: string;
}

export interface TableColProps extends CommonProps {
  span: number;
}