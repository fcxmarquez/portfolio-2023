import styled from "styled-components";
import { systemDesign } from "@/styles/vars";
import { navMenuVars } from "@/components/NavMenu/navMenu.styles";

export const LayoutWrapper = styled.div`
  .about {
    p {
      font-size: 1.25rem;
      font-weight: 700;
    }

    p:first-of-type {
      margin-bottom: 1.5rem;
    }
  }

  @media (min-width: ${systemDesign.breakpoints.desktop}) {
    padding-right: ${navMenuVars.navMenuDesktopWidth};
  }

  @media (min-width: ${systemDesign.breakpoints.largeDesktop}) {
    padding-right: ${navMenuVars.navMenuLargeDesktopWidth};

    .about {
      p {
        font-size: 1.5rem;
      }
    }
  }
`;
