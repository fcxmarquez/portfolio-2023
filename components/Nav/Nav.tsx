import { useState } from "react";
import { NavWrapper } from "@/components/Nav/nav.styles";
import Hamburger from "hamburger-react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavWrapper className="bg-black">
      <p className="font-primary font-bold text-white">Francisco Márquez</p>
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
