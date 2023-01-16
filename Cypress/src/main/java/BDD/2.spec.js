import { Given, Then, When } from 'cypress-cucumber-preprocessor/steps'


before(() => { // mozemy tu zaimplementowac hooki dla danego zestawu testow
  cy.log('zaczynamy testy')
})

beforeEach(() => {
    cy.log('nowy test')
})

Given('I am on carbon cost page', () => { // implementacja stepu
  Login.authorize('123')
  cy.openSite('main')
})

When('I check a {string} at filter {string} - multi list', (filter, filterType) => { // tak przekazujemy informacje ze stepu
    cy.click(filter)
    cy.log(filterType)
})