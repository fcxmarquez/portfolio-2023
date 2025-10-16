import { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef } from "react";

export interface Position {
  title: string;
  dateRange: string;
  location?: string;
  accomplishments: JSX.Element;
}

export type ArticleExperienceProps = ComponentPropsWithoutRef<"div"> & {
  srcImage: string | StaticImageData;
  title: string;
  description?: JSX.Element;
  positions?: Position[];
  link?: string;
};
