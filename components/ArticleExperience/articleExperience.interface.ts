import { ComponentPropsWithoutRef, ReactNode } from "react";

export type ArticleExperienceProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  title: string;
  description: JSX.Element;
};
