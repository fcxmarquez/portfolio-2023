import { Layout } from "@/components/Layout/Layout";
import { Section } from "@/components/Section/Section";

export default function Home() {
  return (
    <>
      <Layout>
        <Section>About</Section>
        <Section>Skills</Section>
        <Section>My Experience</Section>
        <Section>Contact Me</Section>
      </Layout>
    </>
  );
}
