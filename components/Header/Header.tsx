import React from "react";
import { Nav } from "@/components/Nav/Nav";
import { HeaderContainer } from "./header.styles";
import banner from "@/public/img/banner.jpg";
import Image from "next/image";

export const Header = () => {
  return (
    <HeaderContainer>
      <Nav />
      <div className="banner flex h-48 w-full bg-green-light" id="banner-wrapper">
        <Image src={banner} alt="Banner" className="absolute" />
      </div>
    </HeaderContainer>
  );
};
