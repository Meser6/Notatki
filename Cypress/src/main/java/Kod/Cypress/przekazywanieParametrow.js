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

    cypressEnv() {
      cy.log(Cypress.env('login')) // pobieranie envow cypressa (np przekazanych w workflow z sekretow)
    }