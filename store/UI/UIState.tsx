import { ReactNode, useReducer, createContext, useMemo, useContext } from "react";
import { UIState, UIStateAction, actionHandler } from "./UIState.interface";

const UIStateContext = createContext<unknown | undefined>({});

const initialState = {
  isOpen: false,
} as UIState;

export const UIStateProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UIStateReducer, initialState);
  const value = useMemo(() => [state, dispatch], [state]);

  return <UIStateContext.Provider value={value}>{children}</UIStateContext.Provider>;
};

const UIStateReducer = (state: UIState, action: UIStateAction) => {
  const actionHandler: actionHandler = {
    TOGGLE_NAV_MENU: () => {
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    },
  };

  return actionHandler[action.type] ? actionHandler[action.type]() : state;
};

export const useUIState = () => {
  const context = useContext(UIStateContext);
  if (context === undefined) {
    throw new Error("useUIState must be used within a UIStateProvider");
  }

  // get directly the isOpen value from the context
  const [state] = context as [UIState];
  const { isOpen } = state;
  console.log("isOpen: ", isOpen);

  return { isOpen };
};

export const useUIStateMutations = () => {
  const [, dispatch] = useContext(UIStateContext) as [
    UIState,
    React.Dispatch<UIStateAction>
  ];

  const toggleNavMenu = () => {
    console.log("executing toggleNavMenu");
    dispatch({ type: "TOGGLE_NAV_MENU" });
  };

  return { toggleNavMenu };
};
