import { ArticleExperienceContainer } from "./articleExperience.styles";
import { forwardRef } from "react";
import { ArticleExperienceProps } from "./articleExperience.interface";
import Image from "next/image";
import Link from "next/link";

// Challenge: Create a compound component
// Compound childrens: image, title, description as a ul list

export const ArticleExperience = forwardRef<HTMLElement, ArticleExperienceProps>(
  (props, ref) => {
    const { srcImage, title, description, link } = props;

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
          {description}
        </div>
      </ArticleExperienceContainer>
    );
  }
);

ArticleExperience.displayName = "ArticleExperience";
