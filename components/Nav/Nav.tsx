import { NavWrapper } from "@/components/Nav/nav.styles";
import Hamburger from "hamburger-react";
import { useUIState, useUIStateMutations } from "@/store/UI/UIState";
import Link from "next/link";

export const Nav = ({ onlyNav = false }: { onlyNav?: boolean }) => {
  const { isOpen } = useUIState();
  const { toggleNavMenu } = useUIStateMutations();

  const handleToggleNavMenu = () => {
    if (!isOpen) {
      toggleNavMenu();
    }
  };

  return (
    <NavWrapper id="nav-wrapper" className="bg-black" onlyNav={onlyNav}>
      <Link href={"/"}>
        <p className="font-bold text-white">Francisco Márquez</p>
      </Link>
      {onlyNav ? null : (
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
      )}
    </NavWrapper>
  );
};
