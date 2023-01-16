// ---------- struktura testu ----------

/// <reference types="cypress" /> // referencja do cypressa  !!!!

describe("E2E", () => { // nazwa całego modułu testów
    it("first test", ()=>{ // inicjalizacja pojedynczego testu + jego nazwa
        // ciało testu
    })
    it.only("second test", () =>{ // jesli w pliku sa testy z only to wykona tylko takie ktore go maja w srodku
        //test
    })
})

// ---------- metody ----------

cy.visit("") // otwiera strone bazowa
cy.visit("http://google.pl") // otwiera dana strone
cy.visit("/konto") // otwiera strone bazowa + odaje do niej to co w argumencie ${baseUrl}/somewhere

cy.get("CSS") // pobranie elenemtu/ów po selektorze CSS
cy.get("CSS", { log: false }) // zrobi cos ale nie wyloguje tego w konsoli cypressa
cy.get("a", { timeout: 10000 }) // bedzie go szukac przez 10 sekund
cy.get("a", { timeout: 10000, interval: 200 }) // bedzie go szukac przez 10 sekund i bedzie sprawdzac co 0.2sek
cy.get("a").parents(".class") // znajdz wszstkie elementy o tagu a a potem wsrod nich znajdz ich rodzicow ktorzy maja klase class
cy.get("a").eq(1) // znajdz wszystkie elementy o tagu a (zał ze jest 10) i pobierz drugie (liczymy od 0)
cy.get("a").first() // znajdz wszystkie elementy o tagu a (zał ze jest 10) i pobierz pierwszy
cy.get("a").find("input") //  znajdz element a, a nastepnie wszystkie inputy ktore sie w nim znajduja


cy.contains("Text") // pobierze elementy które zawieraja dany tekst
cy.contains(".class", "text") // pobierze elementy które maja klase class i zawieraja tekst
cy.contains("text", {timeout: 1000}) // bedzie szukal wszystkich elementow z tekstem przez okrex 1000msc

cy.get("a").then(aPodstawa =>{ // pobierz element a i dopisz go to zmiennej aPodstawa
    cy.wrap(pierwszy).find("href").then(link =>[ // wez element aPodstawa i znajdz w nim wszystkie hrefy. dopisz je do zmiennej link
        cy.wrap(link).each(pojedynczyLink =>{ // wez element z listy link, dopisz go do pojedynczyLink i zrob to co w ciele. potem wez drugi itd.
            cy.log(pojedynczyLink) // cialo
        })
    ])
})

cy.wait(5000) // poczka x ms

// ---------- zmienne srodowiskowe ----------

//zmienne trzymamy w cypress.env.json (dodac do git ignore!)

//zapisywanie
    Cypress.env('nazwa_zmiennej', 'wartosc')
//pobieranie
    Cypress.env('nazwa_zmiennej')


// ---------- hooki ----------

beforeEach(() => { // wykona sie przed kazdym testem (w danym pakiecie)
})

afterEach(() => { //wykona sie po każdym teście (w danym pakiecie)
})

before(() => { // wykona sie raz, przed odpaleniem pierwszego testu (w danym pakiecie)
})

after(() => { // wykona sie raz, po zakonczeniu sie wszystkich testow (w danym pakiecie)
})

// ---------- asynchronicznosc ----------

// jezeli mamy metode asynchroniczna ktore cos zwraca to tak to mozemy obsluzyc

cy.then(() => {
    return getUserToken()
  }).then(token => {
    cy.log(token)
})

