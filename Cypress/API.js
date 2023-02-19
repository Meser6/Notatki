//przyklad testu requestu

describe("Testing API - GET method for endpoint /posts/{id}", () => {

  testData.forEach((item) => {
    it("Gets single post from API", () => {
      cy.request('https://jsonplaceholder.typicode.com/posts/1').as( // cy.request wysle zapytanie
        "apiRequest"
      );

      const response = cy.get("@apiRequest");

      response.should((res) => {
        expect(res.headers["content-type"]).to.include("application/json");
        expect(res.status).to.eq(200);

        const responseBody = res.body;
        expect(responseBody.userId).to.be.a("number");
        expect(responseBody.userId).to.be.greaterThan(0);
        expect(responseBody.body).to.have.length.of.at.least(5);
      });
    });
  });
});

//https://www.cypressanywhere.io/testowanie-api-metoda-get

//Body mozna tez uzyskac w ten sposob:
cy.request('GET', 'strona').its("body").then(nazwa =>{
    nazwa.wartosc === 5
})

//---------------------------------------------

// wysylanie requestu z parametrami

  cy.request('GET', 'https://strona.pl/logout?', {
    client_id: 'IDIDIDIDIIIDIIDIID',
    returnTo: '/'
  }).then(() => {
    cy.log('Successful logout')
  })

//--------------------------------------------

// wysyłanie requestow

cy.request('GET', 'https://localhost:3000') // najprostrzy sposob


const dane = {
    "article":{
        "tytul": 'tytul'
        "tekst": 'to jest tekst'
    }
}
cy.request('POST', 'https://localhost:3000', dane) // wysle w BODY to co zapisalysmy do zmiennej
cy.request('POST', 'https://localhost:3000', { // wysle w BODY to co podaismy w {}
    "article":{
        "tytul": 'tytul'
        "tekst": 'to jest tekst'
    }
})

cy.request({
      url: `${Cypress.config().baseUrl}/api/endpoint`, // ustalamy url
      method: 'POST',
      headers: { // ustalamy headersy
        'Content-Type': 'application/json',
      },
      body: { // body

      }
})
//---------------------------------------------

//przechwitywanie requestow wywoalnych za pomoca UI

//Testy api moga tez polegac na wywolaniu, przechwyceniu i assercji pojedynczych requestow

it("test api", ()=>{
    // jeżeli zostanie wywolana metoda GET z takim URLem to wez ja i zapisz do zmiennej requestGetPost
    cy.intercept("GET", "http://yt.pl/getPosts").as("requestGetPost") // rodzaj metody, request URL, a po as nazwa zmiennej do jakiej ma byc zapisana
    // pobierze wówczas calego jsona z metoda (fajnie jest go sobie debugowo wypisac na konsoli bo widac drzewko) - cy.log(@requestGetPost)

    //---------------- tu rzeczy ktore trzeba zrobic zeby wywolac tego requesta

    // aby sie odwolac do zlapanego requesta nalezy to zrobic poprzedzajac nazwe @
    cy.wait("@requestGetPost") // czekanie az dany request sie zakonczy
    cy.get("@requestGetPost").then(response =>{ // branie requesta i zapisanie go do zmiennej response
        response.body.status // potem mozemy wyciagac z niego rzeczy w taki sposob
        // zazynamy do gory drzewka i po kropkach dochodzimy do kolejnych poziomow
})

// PRZYKŁAD
it("test api", ()=>{
cy.intercept("GET", "http://yt.pl/getPosts").as("requestGetPost") // oczekuj na zapytanie
cy.visit("http://yt.pl/") // zrob cos
cy.wait("@requestGetPost") // czekaj az to zapytanie sie zakonczy
cy.get("@requestGetPost").then(res =>{ // pobiez odpowiedz i zrob cos z nia
    res.response.body.status.should("contains", 200)
    })
})

//---------------------------------------------

// Mockowanie requestów
// wyobraz sobie ze masz request ktory zwraca 1, 2 i 3 do tabeli. masz sprawdzic tabele ale danych z bazy jeszcze nie ma
// mozesz wyslac taki request (o ile backend jest gotowy) a jego odpowiedz zmienic tak zeby dostac dane ktore mu podales
// w tedy zamiast pustej tabeli dostaniesz wypelniona swoimi danymi


// kiedy wyłapie takiego responsa to zamiast odpwiedzi serwera wysle to co mu podalismy w 3 parametrze
cy.intercept("GET", "http://yt.pl/getPosts", { fixture: 'users.json' }).as("requestGet1")
// wezmie z fixture z pliku users
cy.intercept("GET", "http://yt.pl/getPosts", ['jeden', 'dwa', 'trzy']).as("requestGet2")
// wezmie to co jest podane

//---------------------------------------------

//GraphQl
// rozni sie od RESTa tym, ze jest tylko jeden endpont a to co nam zwroci zalezy od tego co w nim wyslemy

Cypress.Commands.add('requestGraphQl', query => {
    cy.request({
      url: `${Cypress.config().baseUrl}/graphql`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        query: query
      },
      failOnStatusCode: false
})
