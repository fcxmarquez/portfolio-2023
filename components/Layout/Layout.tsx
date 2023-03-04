import React, { ReactNode } from "react";
import { Header } from "@/components/Header/Header";
import { LayoutWrapper } from "./layout.styles";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
    </LayoutWrapper>
  );
};
