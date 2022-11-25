
//pobiera wartosc z fixtures i dopisuje ja do baseUrl
Cypress.Commands.add('openSite', address => {
  cy.fixture('addresses').then(data => {
    let site = data[`${address}`]
    cy.visit(`${Cypress.config().baseUrl}${site}`)
  })
})

// ----------------------------------------------------

//czyta wartosc z jakiegos pliku json po czym przekazuje ja do zmiennej
Cypress.Commands.add('writeSomething', () => {
    cy.readFile('jakis.json')
      .its('wartosc')
      .then(zmienna => {
        cy.log(zmienna)
        })
  }
)

// ----------------------------------------------------

//obsluga iframe
// pobierze iframe, i zwroci jej kod jako html. potem na takim czyms mozna normalnie przeprowadzac rzeczy
Cypress.Commands.add('getIframeBody', iframeSelector => {
  cy.log('getIframeBody')
  return cy
    .get(iframeSelector, { log: false })
    .its('0.contentDocument.body', { log: false })
    .should('not.be.empty')
    .then(body => cy.wrap(body, { log: false }))
})

//przyklad wykorzystania
  get askExpertAvailableTimesElements() {
    return cy
      .getIframeBody('selektor iframe')
      .find('selektor elementu')
  }

// ----------------------------------------------------

//wysylanie zapytan graphQl
Cypress.Commands.add('requestGraphQl', query => {
  cy.request({
    url: `${Cypress.config().baseUrl}/graphql`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      query: query
    },
    failOnStatusCode: false
  })
})

//przyklad wykorzystania
// stworzyc plik z mutacjami
export const clearRedisCache = ` //przyklad mutacji
mutation {
  flushRedisCache
}`

