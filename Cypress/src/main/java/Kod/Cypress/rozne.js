And('Every table row should not be empty', () => {
  AssetProfile.tableElements.each(element => {
    expect(Cypress.$(element).text()).be.not.empty // przeleci po elementach nie pobierajac za kazdym razem wszystkich
  })
})