//Plik z danym Modelem zapisujemy w support > jakis wlasny folder

class MainPageModel {

    get loginButton(){ // elelemty dalej strony zapisujemy w getterach
        return cy.get("#button");
    }

    clickOnLoginButton(){ // metody tworzymy analogicznie jak w Javie
        this.loginButton.click(); // słówko this odnosi sie do zmiennej nie wystepujacej w tej klasie
    }

    checkLoginButtonIsVisible(){ // assercje równiez robimy w page objectach
        this.loginButton.should("be.visible");
    }

    checkLoginButtonAmount(expectedAmount){ // oczywiscie metody i assercje mozemy robic z argumentami
        this.loginButton.should("have.length", expectedAmount);
    }
}

export default new MainPageModel();  // służy to eksportu tej klasy