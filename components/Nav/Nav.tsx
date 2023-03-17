import { useState, useEffect } from "react";
import { NavWrapper } from "@/components/Nav/nav.styles";
import Hamburger from "hamburger-react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.getElementById("layout-wrapper")?.classList.toggle("navmenu-active", isOpen);
    document.getElementById("navbar-modal")?.classList.toggle("active", isOpen);
  }, [isOpen]);

  return (
    <NavWrapper id="nav-wrapper" className="bg-black">
      <p className="font-bold text-white">Francisco Márquez</p>
      <div className="hamburger-icon bg-primary">
        <Hamburger
          distance="sm"
          color="white"
          rounded
          toggled={isOpen}
          toggle={setIsOpen}
          size={18}
        />
      </div>
    </NavWrapper>
  );
};
