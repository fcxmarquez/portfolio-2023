import { StaticImageData } from "next/image";
import { ComponentPropsWithoutRef } from "react";

export type ArticleExperienceProps = ComponentPropsWithoutRef<"div"> & {
  srcImage: string | StaticImageData;
  title: string;
  description: JSX.Element;
  link?: string;
};
