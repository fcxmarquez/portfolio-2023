describe("Home Page", () => {
  beforeEach(() => {
    // Visit the home page before each test
    cy.visit("http://localhost:3000");
  });

  it("should render the about section", () => {
    cy.get("section#about").should("exist");
  });

  it("should render the skills section", () => {
    cy.get("section#skills").should("exist");
  });

  it("should render the projects section", () => {
    cy.get("section#projects").should("exist");
  });

  it("should render the contact section", () => {
    cy.get("section#contact").should("exist");
  });

  context("Navigation links", () => {
    it("should navigate to the correct link when an experience is clicked", () => {
      const checkExperienceLink = (title: string, expectedHref: string) => {
        cy.get("h4")
          .contains(title)
          .parent()
          .parent()
          .find("a")
          .should("have.attr", "href")
          .and("include", expectedHref);
      };
      // Check if the links are correct
      checkExperienceLink("Homie.mx", "https://homie.mx/new");
      checkExperienceLink("Open Movie", "https://moviebillboard.netlify.app/");
      checkExperienceLink("NextJS Avocado", "https://nextjs-avocado-2022.vercel.app/");
    });
  });
});
