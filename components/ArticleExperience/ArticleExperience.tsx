import {
  ArticleExperienceContainer,
  ArticleExperienceImageContainer,
} from "./articleExperience.styles";
import { createContext, forwardRef } from "react";
import { ArticleExperienceProps } from "./articleExperience.interface";
import Image from "next/image";

// Challenge: Create a compound component
// Compound childrens: image, title, description as a ul list

const ArticleExperience = forwardRef<HTMLElement, ArticleExperienceProps>(
  (props, ref) => {
    const { children, title, description } = props;

    return (
      <ArticleExperienceContainer ref={ref}>
        {children}
        <h4>{title}</h4>
        {description}
      </ArticleExperienceContainer>
    );
  }
);

const ArticleExperienceImage = ({ srcImage }: { srcImage: string }) => {
  return (
    <ArticleExperienceImageContainer>
      <Image src={srcImage} fill alt="Experience image" />
    </ArticleExperienceImageContainer>
  );
};

ArticleExperience.displayName = "ArticleExperience";

ArticleExperience.Image = ArticleExperienceImage;

export default ArticleExperience;
