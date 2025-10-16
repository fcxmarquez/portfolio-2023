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

  .timeline {
    margin-top: 1.5rem;
  }

  .timeline-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline-marker {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
    padding-top: 0.25rem;
  }

  .timeline-dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #22c55e;
    border: 3px solid #dcfce7;
    box-shadow: 0 0 0 4px #ffffff;
    z-index: 1;
  }

  .timeline-line {
    width: 2px;
    flex-grow: 1;
    background-color: #e5e7eb;
    margin-top: 4px;
    min-height: 40px;
  }

  .timeline-content {
    flex-grow: 1;
    padding-bottom: 1rem;
  }

  .position-header {
    margin-bottom: 0.75rem;
  }

  .position-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1f2937;
  }

  .position-meta {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex-wrap: wrap;
  }

  .date-badge {
    display: inline-block;
    font-size: 0.875rem;
    color: #6b7280;
    background-color: #f3f4f6;
    padding: 0.25rem 0.75rem;
    border-radius: 0.375rem;
    border: 1px solid #e5e7eb;
    font-weight: 500;
  }

  .location {
    font-size: 0.875rem;
    color: #9ca3af;
    font-style: italic;
  }

  .position-accomplishments {
    ul {
      list-style: initial;
      padding-left: 1rem;

      li {
        margin-bottom: 0.5rem;
        line-height: 1.6;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  // From desktop to up
  @media (min-width: ${systemDesign.breakpoints.tablet}) {
    display: flex;
    justify-content: space-between;

    .img-container {
      width: 50%;
      align-self: flex-start;
    }

    .body {
      width: 44%;
    }

    .timeline-marker {
      padding-top: 0.5rem;
    }

    .timeline-dot {
      width: 16px;
      height: 16px;
    }

    .position-title {
      font-size: 1.25rem;
    }

    .date-badge {
      font-size: 0.9rem;
    }
  }

  // From desktop to up font size of li will be 1.2rem
  @media (min-width: ${systemDesign.breakpoints.largeDesktop}) {
    ul {
      font-size: 1.2rem;
    }

    .position-title {
      font-size: 1.35rem;
    }

    .date-badge {
      font-size: 1rem;
    }
  }
`;

export const ArticleExperienceImageContainer = styled.div``;
