import styled from "styled-components";
import { systemDesign } from "@/styles/vars";

export const ArticleExperienceContainer = styled.article`
  .img-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
    border-radius: 5px;
    margin-bottom: 2rem;
    overflow: hidden;
  }

  h4 {
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
    text-align: justify;
  }

  ul {
    list-style: initial;
    padding-left: 1rem;
  }

  // From desktop to up
  @media (min-width: ${systemDesign.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;

    .img-container {
      width: 50%;
      align-self: center;
    }

    .body {
      width: 44%;
    }
  }

  // From desktop to up font size of li will be 1.2rem
  @media (min-width: ${systemDesign.breakpoints.largeDesktop}) {
    ul {
      font-size: 1.2rem;
    }
  }
`;

export const ArticleExperienceImageContainer = styled.div``;
