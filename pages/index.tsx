import { Section } from "@/components/Section/Section";
import { MainStack } from "@/components/MainStack/MainStack";
import { TechStack } from "@/components/TechStack/TechStack";
import { ArticleExperience } from "@/components/ArticleExperience/ArticleExperience";
import openMovieImg from "@/public/img/open-movie.png";
import nextAvocadoImg from "@/public/img/next-avocado.png";
import homieImg from "@/public/img/homie-webpage.png";
import finSpheraImg from "@/public/img/finsphera.jpg";
import {
  openMovieDescription,
  homieStartupDescription,
  nextJsAvocadoDescription,
  finspheraDescription,
} from "@/utils/constants/articleDescriptions";
import { ContactBlock } from "@/components/ContactBlock/ContactBlock";

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
        <h3>My Experience</h3>
        <div className="features">
          <ArticleExperience
            title="FinSphera"
            srcImage={finSpheraImg}
            description={finspheraDescription}
          />
          <ArticleExperience
            title="Homie.mx"
            link="https://homie.mx/new"
            srcImage={homieImg}
            description={homieStartupDescription}
          />
          <ArticleExperience
            title="Open Movie"
            link="https://moviebillboard.netlify.app/"
            srcImage={openMovieImg}
            description={openMovieDescription}
          />
          <ArticleExperience
            title="NextJS Avocado"
            link="https://nextjs-avocado-2022.vercel.app/"
            srcImage={nextAvocadoImg}
            description={nextJsAvocadoDescription}
          />
        </div>
      </Section>
      <Section id="contact">
        <h3>Contact Me</h3>
        <ContactBlock />
      </Section>
    </>
  );
}
