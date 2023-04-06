import { Section } from "@/components/Section/Section";
import { MainStack } from "@/components/MainStack/MainStack";
import { TechStack } from "@/components/TechStack/TechStack";

export default function Home() {
  return (
    <>
      <Section id="about" className="about">
        <h2 className="font-bold text-green">FrontEnd Developer</h2>
        <p>
          FrontEnd developer with 3 years experience. Knowledge in React/NextJs, CSS3+,
          HTML, Redux, Typescript and unit testing like Jest.
        </p>
        <p>
          As a Developer and person, I am a passionate self-taught and a true believer in
          the multidisciplinary potential of human beings. Check my accomplishments!
        </p>
      </Section>
      <Section id="skills">
        <h3>Skills</h3>
        <h4>Main Stack</h4>
        <MainStack />
        <h4>Tech Stack</h4>
        <TechStack />
      </Section>
      <Section id="projects">
        <h3>My Playground and Experience</h3>
        {/* Cards */}
      </Section>
      <Section id="contact">
        <h3>Contact Me</h3>
        {/* Linkedin, Github, Email, CV */}
      </Section>
    </>
  );
}
