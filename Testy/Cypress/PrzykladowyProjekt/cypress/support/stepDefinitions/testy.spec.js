import { defineSep } from "cypress-cucumber-preprocessor";

before(() => {
  // mozemy tu zaimplementowac hooki dla danego zestawu testow
  cy.log("zaczynamy testy");
});

beforeEach(() => {
  // beforeEach w plikach ktore scisle odpowiadaja feature jest super miejscem na umiejscowienie interceptow
  // wowczas w kazdym z testow z tego feature beda oznaczane dane requesty
  cy.log("nowy test");
  cy.intercept("/api/web").as("webApiRequest");
});

defineSep("I am on carbon cost page", () => {
  // implementacja stepu bez parametru
  cy.openSite("carbon");
});

defineSep(
  "I check a {string} at filter {int} - multi list",
  (filter, number) => {
    // implementacja stepu z parametrami. beda one podstawiane pod parametry w fukcji
    cy.click(filter);
    cy.log(number);
  }
);
