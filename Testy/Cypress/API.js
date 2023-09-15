// ----------- wysylanie requestu -----------

// request mozna za pomoca metody request
//nie zwroci on Promise jako tako, a jesli chcemy cos zrobic z response to musimy to zrobic przez then
// jesli strona jest taka sama jak w base url to nie trzeba jej dodawac bo zostanie dopisana automatyczne
cy.request("GET", "/api/endpoint").then((resp) => {
  console.log(resp);
});

cy.request("POST", "https://localhost:3000", { body: 1 }); // body wysylamy w 3 parametrze

//mozemy tez wszystko przekazac w obiekcie
cy.request({
  method: "GET",
  url: "/api/endpoint",
  headers: {
    "Content-Type": "application/json",
  },
  body: {
    body: 1,
  },
});

// ----------- przechwitywanie requestow wywoalnych za pomoca UI -----------

//intercept bedzie czekal na pojawienie sie odpowiedniego requesta. jesli taki sie pojawi to przechwyci go
//i zrobi cos z nim / zapisze odpowiedz / poczeka az sie zakonczy

cy.intercept("GET", "http://yt.pl/getPosts").as("requestGetPost"); // rodzaj metody, request URL, a po as nazwa zmiennej do jakiej ma byc zapisana

cy.wait("@requestGetPost"); // czekanie az dany request sie zakonczy
cy.get("@requestGetPost").then((response) => {
  // przechwici odpowiedz
});

// ----------- mockowanie requestów -----------
// wyobraz sobie ze masz request ktory zwraca 1, 2 i 3 do tabeli. masz sprawdzic tabele ale danych z bazy jeszcze nie ma
// mozesz wyslac taki request (o ile backend jest gotowy) a jego odpowiedz zmienic tak zeby dostac dane ktore mu podales
// w tedy zamiast pustej tabeli dostaniesz wypelniona swoimi danymi

// kiedy wyłapie takiego responsa to zamiast odpwiedzi serwera wysle to co mu podalismy w 3 parametrze

cy.intercept("GET", "/api/some-endpoint", {
  statusCode: 200, // Status kod odpowiedzi
  body: {
    key1: "value1",
    key2: "value2",
    // Mozna dostosować dane odpowiedzi do swoich potrzeb
  },
}).as("mockedRequest");

//gdy wykona sie akcja ktora dany endpoint wywola to zamiast oryginalnej odpowiedzi bedzie ta podana przez nas
cy.wait("@mockedRequest").then((interception) => {
  // Odpowiedź została zamockowana
});
