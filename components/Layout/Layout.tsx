import { ReactNode, useEffect } from "react";
import { Header } from "@/components/Header/Header";
import { LayoutWrapper } from "./layout.styles";
import { NavMenu } from "../NavMenu/NavMenu";
import { useUIState, useUIStateMutations } from "@/store/UI/UIState";

export const Layout = ({
  children,
  onlyNav = false,
}: {
  children: ReactNode;
  onlyNav?: boolean;
}) => {
  const { isOpen } = useUIState();
  const { toggleNavMenu } = useUIStateMutations();

  useEffect(() => {
    document.getElementById("layout-wrapper")?.classList.toggle("navmenu-active", isOpen);
    document.getElementById("navbar-modal")?.classList.toggle("active", isOpen);
  }, [isOpen]);

  const handleToggleNavMenu = () => {
    if (isOpen) {
      toggleNavMenu();
    }
  };

  return (
    <>
      {onlyNav ? null : <NavMenu />}
      <LayoutWrapper id="layout-wrapper" onClick={handleToggleNavMenu} onlyNav={onlyNav}>
        <Header onlyNav={onlyNav} />
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};
