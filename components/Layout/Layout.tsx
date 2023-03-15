import React, { ReactNode } from "react";
import { Header } from "@/components/Header/Header";
import { LayoutWrapper } from "./layout.styles";
import { NavMenu } from "../NavMenu/NavMenu";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavMenu />
      <LayoutWrapper id="layout-wrapper">
        <Header />
        <main>{children}</main>
      </LayoutWrapper>
    </>
  );
};
