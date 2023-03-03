//-------------- przekazywanie aliansow jako wartosci ------------------
//mozemy zapisywac wartosci w pamieci i potem pobierac je w dowolnym momencie
getAssetName() {
      this.assetsListElements
        .invoke('text')
        .then($name => {
          cy.wrap($name).as('assetName') // zapisuje do assetName
        })
      }
compareTwoAssets() {
    cy.get('@1assetName2').then(secondName => { //pobieranie zapisanego assetu
      cy.log(secondName)
    })
  }

//-------------- korzysanie w envow ------------------
cypressEnv() {
    cy.log(Cypress.env('login')) // pobieranie envow cypressa (np przekazanych w workflow z sekretow)
    }

//-------------- foreach bez pobierania za kazdym razem wszystkich elementiw ------------------
AssetProfile.tableElements.each(element => {
    expect(Cypress.$(element).text()).be.not.empty // przeleci po elementach nie pobierajac za kazdym razem wszystkich

//--------------------------------
const napis = 'napis'
cy.wrap(napis).should('eq', 'napis') // wrzuci jakis obiekt do swiata cypressa

//--------------- otwieranie stron w tym samym tabie -----------------
  openInTheSameTab() {
    this.element.invoke('removeAttr', 'target').click() // otworzy strone w tym samym tabie
  }

//--------------- przekazywanie danych jako importu -----------------
// mozemy stworzyc plik.js na dane, w takiej postaci
export const jeden =`pierwszy`
export const dwa = `drugi`

import {
jeden, dwa
} from plik.js

//--------------- lapanie bledu i sprawdzanie czy jest poprawny -----------------
  cy.once('fail', err => {
    expect(err.message).contain('prevents user mouse interaction')
  })
})



