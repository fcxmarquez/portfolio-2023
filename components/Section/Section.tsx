import React, { ReactNode, forwardRef } from "react";
import { SectionWrapper } from "./section.styles";

type SectionProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Section = forwardRef<HTMLDivElement, SectionProps>((props, ref) => {
  const { children, className, ...restProps } = props;

  const combinedClassNames = ["bg-white", className].filter(Boolean).join(" ");

  return (
    <SectionWrapper ref={ref} className={combinedClassNames} {...restProps}>
      {children}
    </SectionWrapper>
  );
});

Section.displayName = "Section";
