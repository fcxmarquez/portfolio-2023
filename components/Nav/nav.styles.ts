import styled from "styled-components";
import { systemDesign } from "@/styles/vars";

export const headerCSS = {
  heightMobile: "2.75rem",
};

export const NavWrapper = styled.nav`
  height: ${headerCSS.heightMobile};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1000;
  padding-left: 1rem;

  p {
    font-size: 1rem;
  }

  .hamburger-icon {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: ${systemDesign.breakpoints.tablet}) {
    .hamburger-icon {
      width: 4rem;
    }
  }

  @media (min-width: ${systemDesign.breakpoints.desktop}) {
    .hamburger-icon {
      display: none;
    }
  }
`;
