import { ArticleExperienceContainer } from "./articleExperience.styles";
import { forwardRef } from "react";
import { ArticleExperienceProps } from "./articleExperience.interface";
import Image from "next/image";
import Link from "next/link";

// Challenge: Create a compound component
// Compound childrens: image, title, description as a ul list

export const ArticleExperience = forwardRef<HTMLElement, ArticleExperienceProps>(
  (props, ref) => {
    const { srcImage, title, description, positions, link } = props;

    const isTimelineMode = positions && positions.length > 0;

    return (
      <ArticleExperienceContainer ref={ref}>
        <div className="img-container">
          {link ? (
            <Link href={link} target="_blank">
              <Image src={srcImage} fill alt="Experience image" />
            </Link>
          ) : (
            <Image src={srcImage} fill alt="Experience image" />
          )}
        </div>
        <div className="body">
          <h4>{title}</h4>

          {isTimelineMode ? (
            <div className="timeline">
              {positions.map((position, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="timeline-dot" />
                    {index < positions.length - 1 && <div className="timeline-line" />}
                  </div>
                  <div className="timeline-content">
                    <div className="position-header">
                      <h5 className="position-title">{position.title}</h5>
                      <div className="position-meta">
                        <span className="date-badge">{position.dateRange}</span>
                        {position.location && (
                          <span className="location">{position.location}</span>
                        )}
                      </div>
                    </div>
                    <div className="position-accomplishments">
                      {position.accomplishments}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            description
          )}
        </div>
      </ArticleExperienceContainer>
    );
  }
);

ArticleExperience.displayName = "ArticleExperience";
