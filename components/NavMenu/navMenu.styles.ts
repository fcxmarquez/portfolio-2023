import styled from "styled-components";
import { systemDesign } from "@/styles/vars";

export const navMenuVars = {
  navMenuDesktopWidth: "21rem",
  navMenuLargeDesktopWidth: "28rem",
};

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

  &.active {
    transform: translateX(0);
  }

  .header,
  .footer {
    padding: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .header {
    span {
      display: flex;
      position: relative;
      width: 6rem;
      aspect-ratio: 1/1;
      margin-bottom: 1.5rem;
    }

    img {
      border-radius: 50%;
    }

    h1 {
      margin-bottom: 1rem;
      font-weight: 700;
    }

    p {
      color: #d2f2e9;
      font-style: italic;
      font-weight: 400;
      text-align: center;
    }
  }

  .sections {
    ul {
      li {
        height: 3.5rem;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      li.active {
        background-color: white;
      }

      li.active a {
        color: "#206370";
      }
    }
  }

  @media (min-width: ${systemDesign.breakpoints.tablet}) {
    width: 23rem;
    transform: translateX(23rem);

    .header {
      span {
        width: 8rem;
      }
    }
  }

  @media (min-width: ${systemDesign.breakpoints.desktop}) {
    width: ${navMenuVars.navMenuDesktopWidth};
    transform: translateX(0);

    h1 {
      font-size: 1.75rem;
    }

    .header {
      span {
        width: 8.625rem;
      }
    }
  }

  @media (min-width: ${systemDesign.breakpoints.largeDesktop}) {
    width: ${navMenuVars.navMenuLargeDesktopWidth};

    h1 {
      font-size: 2rem;
    }

    .header,
    .footer {
      padding: 4rem;
    }

    .header {
      span {
        width: 10rem;
      }
    }
  }
`;
