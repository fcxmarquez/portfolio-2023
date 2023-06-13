import styled from "styled-components";
import { systemDesign } from "@/styles/vars";

type ContactBlockProps = {
  color?: string;
  isSmall?: boolean;
};

const { breakpoints } = systemDesign;

export const ContactBlockContainer = styled.div<ContactBlockProps>`
  max-width: ${(p) => (p.isSmall ? "10rem" : "15rem")};
  width: 100%;
  margin: 0 auto;

  ul {
    display: flex;
    justify-content: space-between;
    gap: ${(props) => (props.isSmall ? "1.5rem" : "2.5rem")};
  }

  li {
    width: 100%;
    aspect-ratio: 1;
  }

  a {
    height: 100%;
    width: 100%;
    display: flex;
  }

  svg {
    height: 100%;
    width: 100%;
    color: ${(p) => (p ? p.color : "inherit")};
  }

  @media (min-width: ${breakpoints.desktop}) {
    max-width: ${(p) => (p.isSmall ? "12rem" : "17rem")};
  }
`;
