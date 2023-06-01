import { NavMenuWrapper } from "./navMenu.styles";
import Avatar from "public/img/avatar.jpg";
import Image from "next/image";
import { sections } from "@/utils/constants";
import { ContactBlock } from "@/components/ContactBlock/ContactBlock";
import { useUIState } from "@/store/UI/UIState";

export const NavMenu = () => {
  const { activeSection } = useUIState();

  const handleSectionClick = (sectionId?: string) => (event: React.MouseEvent) => {
    event.preventDefault();
    const sectionElement = sectionId
      ? document.getElementById(sectionId)
      : document.querySelector("body");

    sectionElement?.scrollIntoView({ behavior: "smooth" });
  };

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
          <li className={activeSection === "about" ? "on-view" : ""}>
            <a href="#about" onClick={handleSectionClick()}>
              {sections.about}
            </a>
          </li>
          <li className={activeSection === "skills" ? "on-view" : ""}>
            <a href="#skills" onClick={handleSectionClick("skills")}>
              {sections.skills}
            </a>
          </li>
          <li className={activeSection === "projects" ? "on-view" : ""}>
            <a href="#projects" onClick={handleSectionClick("projects")}>
              {sections.projects}
            </a>
          </li>
          <li className={activeSection === "contact" ? "on-view" : ""}>
            <a href="#contact" onClick={handleSectionClick("contact")}>
              {sections.contact}
            </a>
          </li>
        </ul>
      </div>
      <div className="footer">
        <ContactBlock isSmall color="#d2f2e9" />
      </div>
    </NavMenuWrapper>
  );
};
