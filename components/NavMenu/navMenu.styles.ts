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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      li {
        height: 3.5rem;
        color: #ffffff;
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
        aspect-ratio: 1/1;
      }
    }
  }

  @media (min-width: ${systemDesign.breakpoints.desktop}) {
    .header {
      width: 22.75rem;

      span {
        width: 8.625rem;
        aspect-ratio: 1/1;
      }
    }
  }
`;
