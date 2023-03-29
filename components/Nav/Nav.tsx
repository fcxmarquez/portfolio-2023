import { NavWrapper } from "@/components/Nav/nav.styles";
import Hamburger from "hamburger-react";
import { useUIState, useUIStateMutations } from "@/store/UI/UIState";

export const Nav = () => {
  const { isOpen } = useUIState();
  const { toggleNavMenu } = useUIStateMutations();

  const handleToggleNavMenu = () => {
    if (!isOpen) {
      toggleNavMenu();
    }
  };

  return (
    <NavWrapper id="nav-wrapper" className="bg-black">
      <p className="font-bold text-white">Francisco Márquez</p>
      <div className="hamburger-icon bg-primary">
        <Hamburger
          distance="sm"
          color="white"
          rounded
          toggled={isOpen}
          toggle={handleToggleNavMenu}
          size={18}
        />
      </div>
    </NavWrapper>
  );
};
