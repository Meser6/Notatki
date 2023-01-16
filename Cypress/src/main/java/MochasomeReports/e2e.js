import addContext from 'mochawesome/addContext'
import 'cypress-real-events/support'

Cypress.on('test:after:run', (test, runnable) => { // Odpowiada za wrzucanie screanow do raportow
  if (test.state === 'failed') {
    let testTitlePath = test.title.replace('#', '%23')
    let catalogPath = Cypress.spec.relative
    const screenshot = `assets/${catalogPath}/${runnable.parent.title} -- ${testTitlePath} (failed).png`
    addContext({ test }, screenshot)
  }
})