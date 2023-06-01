import { ReactNode, useReducer, createContext, useMemo, useContext } from "react";
import { UIState, UIStateAction, actionHandler } from "./uIState.interface";

const UIStateContext = createContext<unknown | undefined>({});

const initialState = {
  isOpen: false,
  activeSection: "",
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

    SET_ACTIVE_SECTION: () => {
      if ("payload" in action) {
        return {
          ...state,
          activeSection: action.payload,
        };
      }
      return state;
    },
  };

  return actionHandler[action.type] ? actionHandler[action.type]() : state;
};

export const useUIState = () => {
  const context = useContext(UIStateContext);
  if (context === undefined) {
    throw new Error("useUIState must be used within a UIStateProvider");
  }

  const [state] = context as [UIState];
  const { isOpen } = state;
  const { activeSection } = state;

  return { isOpen, activeSection };
};

export const useUIStateMutations = () => {
  const [, dispatch] = useContext(UIStateContext) as [
    UIState,
    React.Dispatch<UIStateAction>
  ];

  const toggleNavMenu = () => {
    dispatch({ type: "TOGGLE_NAV_MENU" });
  };

  const setActiveSection = (payload: string) => {
    dispatch({ type: "SET_ACTIVE_SECTION", payload });
  };

  return { toggleNavMenu, setActiveSection };
};
