import { NavMenuWrapper } from "./navMenu.styles";
import Avatar from "public/img/avatar.jpg";
import Image from "next/image";
import { sections } from "@/utils/constants";

export const NavMenu = () => {
  return (
    <NavMenuWrapper id="navbar-modal" className=" bg-primary">
      <div className="header">
        <span>
          <Image fill src={Avatar} alt="Guy" />
        </span>
        <h1 className="font-white text-subtitle text-white">Francisco Márquez</h1>
        <p className="">
          &quot;Long-range planning does not deal with future decisions, but with the
          future of present decisions.&quot; -Peter Drucker
        </p>
      </div>
      <div className="sections">
        <ul>
          <li>
            <a href="#about">{sections.about}</a>
          </li>
          <li>
            <a href="#skills">{sections.skills}</a>
          </li>
          <li>
            <a href="#projects">{sections.projects}</a>
          </li>
          <li>
            <a href="#contact">{sections.contact}</a>
          </li>
        </ul>
      </div>
      <div className="footer"></div>
    </NavMenuWrapper>
  );
};
