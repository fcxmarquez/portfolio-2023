export type UIStateActionType = "TOGGLE_NAV_MENU" | "SET_ACTIVE_SECTION";

export type UIStateAction =
  | { type: "TOGGLE_NAV_MENU" }
  | { type: "SET_ACTIVE_SECTION"; payload: string };

export type UIState = {
  isOpen: boolean;
  activeSection: string;
};

export type actionHandler = {
  [key in UIStateActionType]: () => UIState;
};
