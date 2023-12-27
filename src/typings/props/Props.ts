type CommonEventListeners = Omit<GlobalEventHandlers, "addEventListener" | "removeEventListener">;

export interface CommonProps extends CommonEventListeners {
  autofocus: boolean;
  accessKey: string;
  autocapitalize: string;
  contentEditable: string;
  dir: string;
  draggable: boolean;
  enterKeyHint: string;
  hidden: boolean;
  id: string;
  inert: boolean;
  inputMode: string;
  lang: string;
  nonce?: string;
  popover: string | null;
  scrollTop: number;
  scrollLeft: number;
  slot: string;
  spellcheck: boolean;
  tabIndex: number;
  title: string;
  translate: boolean;
}