import { FC } from "react";
import { ContactBlockContainer } from "./contactBlock.styles";
import { ContactBlockProps } from "./contactBlock.interface";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdArticle, MdMail } from "react-icons/md";

import Link from "next/link";

export const ContactBlock: FC<ContactBlockProps> = ({ color, isSmall }) => {
  return (
    <ContactBlockContainer isSmall={isSmall} color={color}>
      <ul className="icons">
        <li>
          <a href="https://www.linkedin.com/in/francisco-m-6a0b0410a">
            <BsLinkedin />
          </a>
        </li>
        <li>
          <a href="https://github.com/fcxmarquez">
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="mailto:francisco.marquez.solt@gmail.com">
            <MdMail />
          </a>
        </li>
        {/* My CV */}
        <li>
          <Link
            href="/curriculum"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open CV in a new tab"
          >
            <MdArticle />
          </Link>
        </li>
      </ul>
    </ContactBlockContainer>
  );
};
