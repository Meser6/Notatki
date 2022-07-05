/// <reference types="cypress" />

import MainPageModel from "../support/object-models/mainPageModel" // musimy zaimportować wszystkie klasy z jakich bedziemy korzystali w tym pliku


describe("E2E", () => {
    it("first test", ()=>{
        MainPageModel.loginButton; // możemy też dostać się do gettera ale w tedy bez ()
        MainPageModel.clickOnLoginButton(); // wywołujemy klase, i metode
        MainPageModel.checkLoginButtonAmount(1);
    })
})