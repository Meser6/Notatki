// ---------- otwieranie strony ----------
cy.visit(""); // otwiera strone bazowa
cy.visit("http://google.pl"); // otwiera dana strone
cy.visit("/konto"); // otwiera strone bazowa + odaje do niej to co w argumencie ${baseUrl}/somewhere

// ---------- pobieranie elementu ----------
cy.get("CSS"); // pobranie elenemtu/ów po selektorze CSS
cy.get("CSS", { log: false }); // zrobi cos ale nie wyloguje tego w konsoli cypressa
cy.get("a", { timeout: 10000 }); // bedzie go szukac przez 10 sekund
cy.get("a", { timeout: 10000, interval: 200 }); // bedzie go szukac przez 10 sekund i bedzie sprawdzac co 0.2sek
cy.get("a").parents(".class"); // znajdz wszstkie elementy o tagu a a potem wsrod nich znajdz ich rodzicow ktorzy maja klase class
cy.get("a").eq(1); // znajdz wszystkie elementy o tagu a (zał ze jest 10) i pobierz drugie (liczymy od 0)
cy.get("a").first(); // znajdz wszystkie elementy o tagu a (zał ze jest 10) i pobierz pierwszy
cy.get("a").find("input"); //  znajdz element a, a nastepnie wszystkie inputy ktore sie w nim znajduja

cy.contains("Text"); // pobierze elementy które zawieraja dany tekst
cy.contains(".class", "text"); // pobierze elementy które maja klase class i zawieraja tekst
cy.contains("text", { timeout: 1000 }); // bedzie szukal wszystkich elementow z tekstem przez okrex 1000msc

cy.get("a").then((aPodstawa) => {
  // pobierz element a i dopisz go to zmiennej aPodstawa
  cy.wrap(pierwszy)
    .find("href")
    .then((link) => [
      // wez element aPodstawa i znajdz w nim wszystkie hrefy. dopisz je do zmiennej link
      cy.wrap(link).each((pojedynczyLink) => {
        // wez element z listy link, dopisz go do pojedynczyLink i zrob to co w ciele. potem wez drugi itd.
        cy.log(pojedynczyLink); // cialo
      }),
    ]);
});

// ---------- czekanie ----------
cy.wait(5000); // poczka x ms
cy.wait("@requestZIntercepta"); //poczeka az wylapany request sie zakonczy. jak go nie bedzie albo czas minie to bedzie fail

// ---------- wpisywanie w formy ----------
cy.type("text"); // wysyła tekst do elementu typu form
cy.type("text{enter}"); // wysyla tekst i wciska przycisk (w tym pprzypadku enter)
cy.type("tekst", delay(500)); // wysyla tekst ale czeka okreslony czas (w ms) przed wpisaniem kazdego kolejnego znaku
cy.clear(); // czysci element typu form z rekstu

// ---------- pobiereanie czegos z elementu ----------
cy.invoke("text"); //pobiera tekst z danego elementu
cy.invoke("attr", "hraf"); // pobiera atrybut (href) z danego elementu
cy.invoke("prop", "value"); // pobiera właściwość (value) danego elementu [tam gdzie style tyle ze propertis]
cy.get(".class")
  .invoke("text")
  .then((tenTekst) => {
    // pobierze element z klasa class, pobierze z niego tekst i dopisze do zmiennej tenText.
    //ciało // tu mozemyu sie do niej odwolać i coś z nią zrobić
  });

// ---------- checkbox ----------
cy.check(); // zaznaczenie elementu typu checkbox
cy.check(); // jeśli jest wiecej niz 1 elelwmet to zaznaczy wszsystkie
cy.check({ force: true }); // zaznaczy chceckboxa nawet jak ten jest zasłoniety innym elementem
cy.get("#checkbox")
  .check()
  .invoke("prop", "checked")
  .then((isChecked) => {
    // pobierze element zaznaczy, a potem dopisze wlasciwosc do isChecked i wypisze na konsoli
    cy.log(isChecked);
  });
cy.get("checkbox").then((checkboxes) => {
  // pobierze elementy (zał. ze 3) i dopisze do chechboxes
  checkboxes.eq(1).check(); // pobierze z checboxes drugi element i go zaznaczy.
});

// ---------- droplist ----------
cy.select("tekst opcji"); // wyszukiwanie po tekscie
cy.select("firstValue"); // po atrybucie value
cy.select(2); // po numerze. liczymy od 0!

// ---------- alerty ----------
cy.on("window:alert", (tekstAlertu) => {
  // przełączene sie na alert. do tekstAlertu zostanie wpisana tresc
  //ciało
});
cy.on("window:confirm", (tekstAlertu) => {
  // przełączene sie na alert typu confirm. do tekstAlertu zostanie wpisana tresc
  //ciało
});

cy.on("window:alert", () => true); // zaakceptowanie
cy.on("window:confirm", () => true); // zaakceptowanie
cy.on("window:confirm", () => false); // anulowanie

// ---------- wgrywanie pliku ----------
//aby wysylac pliki trzeba miec zainstalowana odpowiednia biblioteke - cypress-file-upload
// npm install --save-dev cypress-file-upload
// a nastepnie dodac referencje do support/commands.js >>> import 'cypress-file-upload'

cy.attachFile("sciezka do pliku");
// jesli mamy pliki w projekcie, bp w fixtures to trzeba sie do niego odwolac. punktem wyjscia jest folder w ktorym test sie znajduje
// ../fixtures/plik.jpg (.. wychodzi z obecnego dolderu do folderu wyżej )

// ---------- inne metody ----------
cy.url(); // pobierze adres strony
cy.title(); // pobierze tytul strony
cy.realclick(); // klika na zesranie
cy.click(); // klika lewym przyciskiem myszki na element
cy.trigger("focus"); //najechanie myszka na dany element https://docs.cypress.io/api/commands/trigger#Coordinates
cy.scrollIntoView(); //zescroolorwanie do danego elementu.
cy.scrollIntoView(true); //zescroolorwanie do danego elementu który bedzie widoczny na gorze strony
