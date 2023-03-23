import { ReactNode, FC } from "react";
import { SectionWrapper } from "./section.styles";

type SectionProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Section: FC<SectionProps> = (props) => {
  const { children, className } = props;

  const combinedClassNames = ["bg-white", className].filter(Boolean).join(" ");

  return (
    <SectionWrapper {...props} className={combinedClassNames}>
      {children}
    </SectionWrapper>
  );
};
