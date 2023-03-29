import styled from "styled-components";
import { headerCSS } from "../Nav/nav.styles";
import { systemDesign } from "@/styles/vars";

export const HeaderContainer = styled.header`
  .banner {
    position: relative;
    overflow: hidden;
    padding-top: ${headerCSS.heightMobile};
    box-sizing: content-box;
  }

  @media (min-width: ${systemDesign.breakpoints.tablet}) {
    .banner {
      height: 18.75rem;
    }
  }

  @media (min-width: ${systemDesign.breakpoints.desktop}) {
    .banner {
      padding-top: 0;
    }
  }

  @media (min-width: ${systemDesign.breakpoints.largeDesktop}) {
    .banner {
      height: 20rem;
    }
  }
`;
