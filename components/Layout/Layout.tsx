import React, { ReactNode } from "react";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};
