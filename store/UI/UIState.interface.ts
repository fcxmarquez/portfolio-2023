export type UIStateActionType = "TOGGLE_NAV_MENU";

export type UIStateAction = {
  type: UIStateActionType;
};

export type UIState = {
  isOpen: boolean;
};

export type actionHandler = {
  [key in UIStateActionType]: () => UIState;
};
