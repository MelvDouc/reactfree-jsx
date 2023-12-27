import type { CommonProps } from "@/typings/props/Props.js";

interface PopoverInvokerProps extends CommonProps {
  disabled: boolean;
  formAction: string;
  formEnctype: string;
  formMethod: string;
  formNoValidate: boolean;
  name: string;
  popoverTargetAction: string;
  popoverTargetElement: Element | null;
  value: string;
}

export interface ButtonProps extends PopoverInvokerProps {
  formTarget: string;
  type: "submit" | "reset" | "button";
}

export interface FormProps extends CommonProps {
  acceptCharset: string;
  action: string;
  autocomplete: AutoFillBase;
  encoding: string;
  enctype: string;
  method: string;
  name: string;
  noValidate: boolean;
  rel: string;
  target: string;
}

export interface FieldSetProps extends CommonProps {
  disabled: boolean;
  name: string;
}

export interface InputProps extends PopoverInvokerProps {
  accept: string;
  align: string;
  alt: string;
  autocomplete: AutoFill;
  capture: string;
  checked: boolean;
  defaultChecked: boolean;
  defaultValue: string;
  dirName: string;
  files: FileList | null;
  formTarget: string;
  height: number;
  indeterminate: boolean;
  list: string;
  max: string;
  maxLength: number;
  min: string;
  minLength: number;
  multiple: boolean;
  pattern: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  selectionDirection: "forward" | "backward" | "none" | null;
  selectionEnd: number | null;
  selectionStart: number | null;
  size: number;
  src: string;
  step: string;
  type: string;
  width: number;
}

export interface LabelProps extends CommonProps {
  htmlFor: string;
}

export interface OptGroupProps extends CommonProps {
  disabled: boolean;
  label: string;
}

export interface OptionProps extends CommonProps {
  defaultSelected: boolean;
  disabled: boolean;
  label: string;
  selected: boolean;
  value: string;
}

export interface ProgressProps extends CommonProps {
  max: number;
  value: number;
}

export interface SelectProps extends CommonProps {
  autocomplete: AutoFill;
  disabled: boolean;
  length: number;
  multiple: boolean;
  name: string;
  required: boolean;
  selectedIndex: number;
  size: number;
  value: string;
}

export interface TextAreaProps extends CommonProps {
  autocomplete: AutoFill;
  cols: number;
  defaultValue: string;
  dirName: string;
  disabled: boolean;
  maxLength: number;
  minLength: number;
  name: string;
  placeholder: string;
  readOnly: boolean;
  required: boolean;
  rows: number;
  selectionDirection: "forward" | "backward" | "none";
  selectionEnd: number;
  selectionStart: number;
  wrap: string;
  value: string;
}
