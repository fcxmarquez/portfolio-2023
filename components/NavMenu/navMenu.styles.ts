import styled from "styled-components";
import { systemDesign } from "@/styles/vars";

export const NavMenuWrapper = styled.section`
  display: block;
  position: fixed;
  height: 100vh;
  width: 17rem;
  top: 0;
  right: 0;
  transform: translateX(17rem);
  overflow-y: auto;
  backface-visibility: hidden;
  z-index: 1000;

  //if body has the class "nav-menu-open" then transform the nav menu to 0
  &.active {
    transform: translateX(0);
  }

  @media (min-width: ${systemDesign.breakpoints.tablet}) {
    width: 23rem;
    transform: translateX(23rem);
  }
`;
