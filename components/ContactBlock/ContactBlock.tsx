import { FC } from "react";
import { ContactBlockContainer } from "./contactBlock.styles";
import { ContactBlockProps } from "./contactBlock.interface";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";

export const ContactBlock: FC<ContactBlockProps> = ({ color }) => {
  return (
    <ContactBlockContainer color={color}>
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
      </ul>
    </ContactBlockContainer>
  );
};
