// ---------- struktura plikow ----------

package.json // to dane o całym projekcie. mozemy w nim zadeklarowac skrypty ktore bedziemy wywoływac po nazwie
// i trzymac paczki ktore wykorzystujemy.
//jezeli paczka jest zapisana w devDependencies{} to bedzie widoczna tylko na srodowisku devowym
// jezel paczka jest zapisana z ^ to oznacza ze pobierz najnowsza wersje zaczynajac od tej np. "cypress":"^11.0.0"
package-lock.json // plik slyzacy do upewnienia sie ze mamy takie same wersje paczek. tworzy go npm i
cypress.config.ts // to plik z konfiguracja startowa cypressa
    np. "baseUrl": "http://google.pl" // ustawia jako strone startowa
    //https://docs.cypress.io/guides/references/configuration#Global
fixtures // przechowuje stałe dane do których potem możemy się odwołać np. nazwa uzytkownika
e2e // znajdują sie w nim testy
plugins // ustawiamy tu rozszerzenia do cypressa
support // tworzymy tu globalne metody do których dostęp będzie miał każdy test
    commands.js // tu trzymamy globalne metody dla cypressa ktore mozemy wowolac z cy.nazwa()
    e2e.js // tu trzymamy zdazenia. jest to tez dobry folder do trzymania before i after

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

// ---------- commands ----------

Cypress.Commands.add('checkURLAddress', expectedAddress => { // dodajemu metode
  cy.url().should('contains', expectedAddress)
})

cy.checkURLAddress('www.p.pl') // wywolujemy metode
