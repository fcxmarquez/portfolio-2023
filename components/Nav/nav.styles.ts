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

  p {
    font-size: 1rem;
  }

  span {
    height: 100%;
    display: flex;
    width: 2.75rem;
    gap: 2px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
      border-radius: 5px;
      width: 30%;
      height: 2px;
      background-color: white;
    }
  }

  @media (min-width: ${systemDesign.breakpoints.tablet}) {
    span {
      width: 4rem;

      div {
        height: 3px;
      }
    }
  }

  @media (min-width: ${systemDesign.breakpoints.desktop}) {
    span {
      display: none;
    }
  }
`;
