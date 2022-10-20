// ---------- struktura plikow ----------

package.json // to dane o całym projekcie. mozemy w nim zadeklarowac skrypty ktore bedziemy wywoływac po nazwie
cypress.json // to plik z konfiguracja startowa cypressa
    np. "baseUrl": "http://google.pl" // ustawia jako strone startowa
    //https://docs.cypress.io/guides/references/configuration#Global
fixtures // przechowuje stałe dane do których potem możemy się odwołać np. nazwa uzytkownika
integration // znajdują sie w nim testy
plugins // ustawiamy tu rozszerzenia do cypressa
support // tworzymy tu globalne metody do których dostęp będzie miał każdy test

// ---------- fixtures ----------

//aby korzystac z danych zgromadzonych w fixtures nalezy zbudowac odwolanie do nich i zapisac je do zmennej
//jeżli chcemy to zrobic globalnie to trzeba uzyc function() (równiez w testach ktore beda z tych danych korzystaly) a nie funkcji strzałkowej
beforeEach(function(){
    cy.fixture("example").then(data =>{ // w parametrze fixture podajemy sciezke do pliku, ale zaczynajac juz w folderze fixture. nie trzeba rozszerzenia
        this.dane = data})
    })
it("test1", function(){
    this.dane.nazwaDanej;
})
//jeżeli bedziemy korzystali w jednym miejscu to mozemy zbudowac takie odwolanie
it("test2", () =>{
    cy.fixture("example").then(data2 =>{
        data.nazwaDanej;
    })
})

//  ----------  ----------  ---------- TESTY ----------  ----------  ----------


// ---------- struktura testu ----------

/// <reference types="cypress" /> // referencja do cypressa  !!!!

describe("E2E", () => { // nazwa całego modułu testów
    it("first test", ()=>{ // inicjalizacja pojedynczego testu + jego nazwa
        // ciało testu
    })
    it.olny("second test", () =>{ // jesli w pliku sa testy z only to wykona tylko takie ktore go maja w srodku
        //test
    })
})


// ---------- metody ----------

cy.visit("") // otwiera strone bazowa
cy.visit("http://google.pl") // otwiera dana strone
cy.visit("/konto") // otwiera strone bazowa + odaje do niej to co w argumencie ${baseUrl}/somewhere

cy.get("CSS") // pobranie elenemtu/ów po selektorze CSS
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

// ---------- adnotacje ----------
beforeEach(() => { // wykona sie przed kazdym testem (w danym pakiecie)
})

afterEach(() => { //wykona sie po każdym teście (w danym pakiecie)
})

before(() => { // wykona sie raz, przed odpaleniem pierwszego testu (w danym pakiecie)
})

after(() => { // wykona sie raz, po zakonczeniu sie wszystkich testow (w danym pakiecie)
})

