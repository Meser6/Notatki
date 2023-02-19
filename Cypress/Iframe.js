// cypress nie wspolpracuje z iframe ale mozemy je pobrac w ten sposob i robic na nich operacje

Cypress.Commands.add('getIframeBody', iframeSelector => {
  cy.log('getIframeBody')
  return cy
    .get(iframeSelector, { log: false })
    .its('0.contentDocument.body', { log: false })
    .should('not.be.empty')
    .then(body => cy.wrap(body, { log: false }))
})

