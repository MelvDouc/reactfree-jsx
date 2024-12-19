type RFreeGlobalEventHandlers = Omit<GlobalEventHandlers, "addEventListener" | "removeEventListener">;

interface ARIAProps {
  ariaAtomic: string;
  ariaAutoComplete: string;
  ariaBusy: string;
  ariaChecked: string;
  ariaColCount: string;
  ariaColIndex: string;
  ariaColIndexText: string;
  ariaColSpan: string;
  ariaCurrent: string;
  ariaDescription: string;
  ariaExpanded: string;
  ariaHasPopup: string;
  ariaKeyShortcuts: string;
  ariaLive: string;
  ariaModal: string;
  ariaMultiline: string;
  ariaMultiSelectable: string;
  ariaOrientation: string;
  ariaPlaceholder: string;
  ariaPosInSet: string;
  ariaPressed: string;
  ariaReadOnly: string;
  ariaRequired: string;
  ariaRoleDescription: string;
  ariaRowIndex: string;
  ariaRowIndexText: string;
  ariaRowSpan: string;
  ariaSelected: string;
  ariaSetSize: string;
  ariaSort: string;
  ariaValueMax: string;
  ariaValueMin: string;
  ariaValueNow: string;
}

export interface ElementProps extends ARIAProps, RFreeGlobalEventHandlers {
  autofocus: boolean;
  id: string;
  nonce: string;
  role: string | null;
  slot: string;
  scrollLeft: number;
  scrollTop: number;
  tabIndex: number;
}