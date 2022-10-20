
//Testy api polegaja na wywolaniu, przechwyceniu i assercji pojedynczych requestow

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
cy.intercept("GET", "http://yt.pl/getPosts").as("requestGetPost")
cy.visit("http://yt.pl/")
cy.wait("@requestGetPost")
cy.get("@requestGetPost").then(res =>{
    res.response.body.status.should("contains", 200)
    })
})

// Mockowanie requestów

// kiedy wyłapie takiego responsa to zamiast odpwiedzi serwera wysle to co mu podalismy w 3 parametrze

cy.intercept("GET", "http://yt.pl/getPosts", { fixture: 'users.json' }).as("requestGet1")
// wezmie z fixture z pliku users
cy.intercept("GET", "http://yt.pl/getPosts", ['jeden', 'dwa', 'trzy']).as("requestGet2")
// wezmie to co jest podane