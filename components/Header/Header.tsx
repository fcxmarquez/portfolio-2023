import React from "react";
import { Nav } from "@/components/Nav/Nav";
import { HeaderContainer } from "./header.styles";
import banner from "@/public/img/banner.jpg";
import Image from "next/image";

export const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
      <div className="banner bg-green-light flex w-full h-48">
        <Image src={banner} alt="Banner" className="absolute" />
      </div>
    </HeaderContainer>
  );
};
