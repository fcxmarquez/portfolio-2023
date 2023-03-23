import { systemDesign } from "@/styles/vars";
import styled from "styled-components";

export const SectionWrapper = styled.section`
  padding: 2rem ${systemDesign.paddingApplicationMobile};
  margin-bottom: 0.375rem;

  h3,
  h4,
  h5,
  p {
    color: #777777;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-weight: 700;
  }

  li {
    color: #888888;
  }

  @media (min-width: ${systemDesign.breakpoints.tablet}) {
    padding-top: 4rem;
    padding-bottom: 2rem;
    padding-left: ${systemDesign.paddingApplicationTablet};
    padding-right: ${systemDesign.paddingApplicationTablet};
  }

  @media (min-width: ${systemDesign.breakpoints.desktop}) {
    padding-left: ${systemDesign.paddingApplicationDesktop};
    padding-right: ${systemDesign.paddingApplicationDesktop};
  }

  @media (min-width: ${systemDesign.breakpoints.largeDesktop}) {
    padding-left: ${systemDesign.paddingApplicationLargeDesktop};
    padding-right: ${systemDesign.paddingApplicationLargeDesktop};

    h3 {
      font-size: 2rem;
    }
  }
`;
