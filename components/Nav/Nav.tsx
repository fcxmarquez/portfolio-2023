import React from "react";
import { NavWrapper } from "@/components/Nav/nav.styles";

export const Nav = () => {
  return (
    <NavWrapper className="bg-black">
      <p className="font-primary font-bold text-white">Francisco Márquez</p>
      <span className="hamburger bg-primary">
        <div />
        <div />
        <div />
      </span>
    </NavWrapper>
  );
};
