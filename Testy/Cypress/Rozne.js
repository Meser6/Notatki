// ---------- struktura plikow ----------
`cypress.config.js` // to plik z konfiguracja startowa cypressa
`/fixtures` // przechowuje stałe dane do których potem możemy się odwołać np. nazwa uzytkownika
`/e2e` // znajdują sie w nim testy
`/support` // tworzymy tu globalne metody do których dostęp będzie miał każdy test
`commands.js` // tu trzymamy globalne metody dla cypressa ktore mozemy wowolac z cy.nazwa()
`e2e.js`; // tu trzymamy zdazenia. jest to tez dobry folder do trzymania before i after
`cypress.env.json`; // trzyamu tu envy

// ---------- komendy w terminalu ----------
`npx cypress open` // wlaczene cypressa w trybie headed
`npx cypress run` // ---------- testy ---------- // odpalenie wszystkich testów w trybie headless
`npx cypress run --config baseUrl=https://web.pl` // podmieni dany element w konfigu
`npx cypress run --spec cypress/integrations/test.js` // odpalenie testów z pliku test.js (podac siezke)
`npx cypress run --config excludeSpecPattern=cypress/integrations/test2.js` // pominiecie jakiegos pliku z testami
`npx cypress run --headed` // odpalenie ale z wyłączonym headlessem
`npx cypress run --browser chrome` // odpalenie na danej przeglądarce (chrome, firefox, edge)
`npx cypress open -e2e`; //odpali od razu w trybie e2e (nie bedzie wyboru miedzy testami komponentu)

// ---------- fixtures ----------
//aby dostac sie do fixture musimy uzyc ponizszej funkcji
beforeEach(function () {
  cy.fixture("example").then((data) => {
    // w parametrze fixture podajemy sciezke do pliku, ale zaczynajac juz w folderze fixture. nie trzeba rozszerzenia
    this.dane = data;
  });
});

// ---------- commands ----------
//dodawanie metody do cypressa
Cypress.Commands.add("checkURLAddress", (expectedAddress) => {
  cy.url().should("contains", expectedAddress);
});

cy.checkURLAddress("www.p.pl"); // wywolanie dodanej metody metode

//-------------- przekazywanie aliansow jako wartosci ------------------
//dane ktore chcemy przechowac globalnie w cypressie na czas wlaczonych testow mozemy zapisac w aliansie i potem pobierac je w dowolnym momencie
function getAssetName() {
  this.assetsListElements.invoke("text").then((name) => {
    cy.wrap(name).as("assetName"); // zapisuje do assetName
  });
}
function compareTwoAssets() {
  cy.get("@1assetName2").then((secondName) => {
    //pobieranie zapisanego aliansu
    cy.log(secondName);
  });
}

//-------------- foreach bez pobierania za kazdym razem wszystkich elementiw ------------------
AssetProfile.tableElements.each((element) => {
  expect(Cypress.$(element).text()).be.not.empty; // przeleci po elementach nie pobierajac za kazdym razem wszystkich
});

//--------------- zwykle dane w cypress-----------------
const napis = "napis";
//jesli mamy jakies dane ktore chcemy sprawdzic za pomoca assercji cypressowych to trzeba je wrzucic do swiata cypressa
//przez cy.wrap. wowczas cypress ma do nich dostep i moze na nich cos robic
cy.wrap(napis).should("eq", "napis");

//--------------- otwieranie stron w tym samym tabie -----------------
function openInTheSameTab() {
  this.element.invoke("removeAttr", "target").click(); // otworzy strone w tym samym tabie poniwaz usunie parametr odpowiadajacy
  //za otwarcie w innym tabie
}

//--------------- lapanie bledu i sprawdzanie czy jest poprawny -----------------
//np cypress mowi ze element jest zasloniety przez inny i rzuc bledem
//jesli chcemy sprawdzic czy akurat taki blad sie pojawil i jesli jest prawidlowy to zroibic succes
//to robimy to w ten sposob
cy.once("fail", (err) => {
  expect(err.message).contain("prevents user mouse interaction");
});

// ---------- asynchronicznosc ----------
// jezeli mamy metode asynchroniczna ktore cos zwraca to tak to mozemy obsluzyc w ten sposob.
cy.then(() => {
  return getUserToken();
}).then((token) => {
  cy.log(token);
});
