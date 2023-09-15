class MainPage {
  get loginButton() {
    // elelemty dalej strony zapisujemy w getterach
    return cy.get("#button");
  }

  loginButton2(numer) {
    //szablony elementow robimy bez geta
    return cy.get(`#button${numer}`);
  }

  clickOnLoginButton() {
    this.loginButton.click();
  }

  checkLoginButtonAmount(expectedAmount) {
    // oczywiscie metody i assercje mozemy robic z argumentami
    this.loginButton.should("have.length", expectedAmount);
  }
}

export default new MainPage(); // służy to eksportu tej klasy
