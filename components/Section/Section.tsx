import { ReactNode } from "react";
import { SectionWrapper } from "./section.styles";

export const Section = ({ children }: { children: ReactNode }) => {
  return <SectionWrapper className="bg-white">{children}</SectionWrapper>;
};
