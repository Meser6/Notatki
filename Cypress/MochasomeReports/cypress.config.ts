import { defineConfig } from 'cypress'

export default defineConfig({
  screenshotsFolder: 'cypress/reports/mochareports/assets',
  reporter: 'cypress-multi-reporters',
  screenshotOnRunFailure: true,
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: false,
      html: false,
      json: true,
      charts: true
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    }
  }
})
