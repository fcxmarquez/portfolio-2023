import { Position } from "@/components/ArticleExperience/articleExperience.interface";

export const openMovieDescription = (
  <>
    <ul>
      <li>Developed an HBO Max-style streaming platform</li>
      <li>
        Integrated the{" "}
        <a href="https://www.themoviedb.org/?language=es">
          <strong>TMDB API</strong>
        </a>{" "}
        for movie data
      </li>
      <li>Implemented application and loading state management</li>
      <li>
        Built with <strong>React</strong> for rapid development
      </li>
    </ul>
  </>
);

export const homiePosition: Position = {
  title: "Frontend Engineer",
  dateRange: "November 2021 – January 2023",
  location: "Mexico",
  accomplishments: (
    <>
      <ul>
        <li>Real-state Mexican startup</li>
        <li>
          Led Homie&apos;s Component Library creation, accelerating project delivery
          through efficient component utilization.
        </li>
        <li>
          Streamlined communication between design and development teams via an
          interactive frontend component system.
        </li>
        <li>
          Mentored new engineers, fostering growth and alignment with the company&apos;s
          development philosophy.
        </li>
        <li>
          Modernized Homie&apos;s website using cutting-edge technologies such as{" "}
          <strong>Next.js</strong>, <strong>React</strong>, <strong>Typescript</strong>,{" "}
          <strong>Jest</strong> for testing, and a microservices architecture, while
          creating a frontend-oriented component library, optimizing performance and user
          experience.
        </li>
      </ul>
    </>
  ),
};

export const finspheraPositions: Position[] = [
  {
    title: "Technical Lead - Frontend",
    dateRange: "May 2024 – October 2025",
    location: "Mexico",
    accomplishments: (
      <>
        <ul>
          <li>
            Managed frontend development as a direct report to CEO; passed{" "}
            <strong>CNBV</strong> security audit via compliance controls and regulator
            demonstration.
          </li>
          <li>
            Architected a pivot to an agentic AI platform using <strong>Python</strong>,{" "}
            <strong>CrewAI Flows</strong>, <strong>CopilotKit</strong>, and{" "}
            <strong>FastAPI</strong> with <strong>RAG</strong>; built a generative UI
            chat; won 2nd place at the IncMTY AirTech Challenge.
          </li>
          <li>
            Migrated from <strong>React</strong> to <strong>Next.js</strong> and
            introduced <strong>Zustand</strong>, improving time-to-preview and developer
            experience.
          </li>
          <li>
            Built an internal operations dashboard for KYC/KYB, campaign management,
            withdrawal processing, and banking integrations; delivered 12+ investor demos.
          </li>
          <li>
            Established CI/CD with <strong>GitHub Actions</strong> and{" "}
            <strong>AWS Amplify</strong>, introduced Linear workflows, code review
            standards, automated linting, and unit testing with{" "}
            <strong>React Testing Library</strong>; hired and mentored a frontend
            engineer.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Software Engineer III - Frontend",
    dateRange: "February 2023 – May 2024",
    location: "Mexico",
    accomplishments: (
      <>
        <ul>
          <li>
            Automated frontend service deployment to <strong>AWS Amplify</strong> using{" "}
            <strong>GitHub Actions</strong> CI/CD, enhancing deployment efficiency and
            reliability.
          </li>
          <li>
            Developed a comprehensive component library and established the
            platform&apos;s design system, standardizing UI elements and improving
            developer efficiency.
          </li>
          <li>
            Led a UI overhaul focusing on mobile-first design, significantly improving
            user engagement and accessibility across devices.
          </li>
          <li>
            Engineered key frontend self-services, including user onboarding and
            dashboards, using <strong>React</strong> and <strong>Redux</strong>.
          </li>
          <li>
            Worked with serverless features using <strong>AWS Lambdas</strong>,{" "}
            <strong>AppSync</strong>, <strong>Amplify</strong>, <strong>GraphQL</strong>,{" "}
            <strong>DynamoDB</strong> and <strong>Cognito</strong>.
          </li>
          <li>
            Contributed to the regulatory approval process by implementing compliance
            requirements in platform architecture.
          </li>
        </ul>
      </>
    ),
  },
];

export const nextJsAvocadoDescription = (
  <>
    <ul>
      <li>Implemented server-side rendering for enhanced performance</li>
      <li>Optimized for SEO to increase visibility and reach</li>
      <li>
        Managed application state using <strong>React Context</strong>
      </li>
      <li>
        Built with <strong>Next.js</strong> for its powerful features and flexibility
      </li>
    </ul>
  </>
);
