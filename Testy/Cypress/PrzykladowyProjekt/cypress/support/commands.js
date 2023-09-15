import LoginPage from "../support/pages/login";

//fajnym rozwiazaniem jest trzymanie wszystkich podstron w fixtures/pages.json i owieraniu ich za pomoca takiej metody
Cypress.Commands.add("visitPage", (pageName) => {
  cy.fixture("pages").then((pages) => {
    cy.visit(pages[pageName]);
  });
  cy.checkLoading();
});

//logowanie za pomoca zapisanej sesji. pozwala znacznie zaoszcedzic czas poniewaz nie logujemy sie za kazdym razem a po wczytujemy sesje na ktorej jest
//juz zalogowane. jesli takiej sesji nie ma to ja stworzy wedlug instrukcji
Cypress.Commands.add(
  "login",
  (sessionName = `Login as: ${Cypress.env("login")}`) => {
    cy.session(sessionName, () => {
      cy.visit("/");
      LoginPage.loginInputElement.type(Cypress.env("login"));
      LoginPage.paswordInputElement.type(Cypress.env("password"));
      LoginPage.signOnButtonElement.click();
    });
  }
);

// cypress nie wspolpracuje z iframe ale mozemy je pobrac w ten sposob i robic na nich operacje
Cypress.Commands.add("getIframeBody", (iframeSelector) => {
  cy.log("getIframeBody");
  return cy
    .get(iframeSelector, { log: false })
    .its("0.contentDocument.body", { log: false })
    .should("not.be.empty")
    .then((body) => cy.wrap(body, { log: false }));
});

//funkcja do sprawdzania czy nie ma animacji oznaczajacej ladowanie jakichs pod elementow
Cypress.Commands.add("checkLoading", (loadingAnimationTimeout = 60000) => {
  //dobrze jest znalezc jakis element ktory oznacza ze strona jako taka sie zaladowala (np logo w headerze)
  cy.get("[data-cy='navbar-userDetails']", { timeout: 15000 }).should(
    "be.visible"
  );
  // a potem sprawdzic czy na tej stronie nie ma animacji swiadczacej o doladowaniu sie jakichs elementow
  cy.get("[data-cy='loadingAnimation']", {
    timeout: loadingAnimationTimeout,
  }).should("not.exist");
});

Cypress.Commands.add("clickButton", (buttonName) => {
  cy.contains("button", buttonName).click();
});

// usuwanie folderu np download
Cypress.Commands.add("removeFolder", (folderPath) => {
  cy.task("deleteFolder", folderPath);
});

//sprawdzanie czy plik sie sciagnal bez dodatkowej biblioteki
Cypress.Commands.add("checkDownloadFile", (fileAmount = 1) => {
  cy.checkLoading(120000);
  cy.wait(3000);
  cy.task("downloads", Cypress.config("downloadsFolder")).then(
    (downloadsFolder) => {
      expect(downloadsFolder.length).to.be.eq(fileAmount);
    }
  );
  cy.removeFolder(Cypress.config("downloadsFolder"));
});

//tworzenie i zapoisywanie pliku.
Cypress.Commands.add("createBackupFile", (filePath, apiEndPoint) => {
  cy.log(`Creating backup data file ${filePath}`);
  cy.request({
    method: "GET",
    url: apiEndPoint,
    timeout: 120000,
    log: false,
  }).then((resp) => {
    cy.task(
      "createBackupFile",
      {
        filePath: filePath,
        content: resp.body,
      },
      { log: false }
    );
  });
});

//wysylanie pliku gdy endpoint przyjmuje tylko format blob
Cypress.Commands.add("uploadFile", (filePath, apiEndPoint) => {
  cy.log("Uploading file ${filePath}");
  cy.fixture(filePath, "binary").then((file) => {
    const blob = new Blob([file], { type: "text/csv" });
    const formData = new FormData();
    formData.append("form", blob);
    cy.request({
      method: "POST",
      url: apiEndPoint,
      body: formData,
      headers: {
        "content-type": "multipart/form-data",
      },
      timeout: 120000,
    });
  });
});
