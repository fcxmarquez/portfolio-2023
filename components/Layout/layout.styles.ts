import styled from "styled-components";
import { systemDesign } from "@/styles/vars";
import { navMenuVars } from "@/components/NavMenu/navMenu.styles";

export const LayoutWrapper = styled.div`
  h2 {
    font-size: 2.5rem;
  }

  .about {
    p {
      font-size: 1.25rem;
      font-weight: 700;
    }

    p:first-of-type {
      margin-bottom: 2rem;
    }
  }

  @media (min-width: ${systemDesign.breakpoints.tablet}) {
    h2 {
      font-size: 3rem;
    }
  }

  @media (min-width: ${systemDesign.breakpoints.desktop}) {
    padding-right: ${navMenuVars.navMenuDesktopWidth};
    h2 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: ${systemDesign.breakpoints.largeDesktop}) {
    padding-right: ${navMenuVars.navMenuLargeDesktopWidth};
  }
`;
