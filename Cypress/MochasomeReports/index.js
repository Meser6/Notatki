const browserify = require('@cypress/browserify-preprocessor')
const cucumber = require('cypress-cucumber-preprocessor').default
const resolve = require('resolve')
const { isFileExist, findFiles } = require('cy-verify-downloads')
const { removeDirectory } = require('cypress-delete-downloads-folder')

module.exports = (on, config) => {
  const options = {
    ...browserify.defaultOptions,
    typescript: resolve.sync('typescript', { baseDir: config.projectRoot })
  }

  on('file:preprocessor', cucumber(options))
  on('task', { isFileExist, findFiles })
  on('task', { removeDirectory })
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--disable-dev-shm-usage')
    }
    return launchOptions
  })
}
