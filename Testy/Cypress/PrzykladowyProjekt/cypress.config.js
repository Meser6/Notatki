//przyklad konfigu z wykorzystaniem Cucambera

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const fs = require("fs"); // odpowiada za obsluge plikow
const { rmdir } = require("fs");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  //dostep do danego folderu. dzieki temu bedziemy mogli cos w nim zrobic i miec info o nim takie jak ilosc plikow
  on("task", {
    downloads: (downloadspath) => {
      return fs.readdirSync(downloadspath);
    },
  });

  //stworzy plik w danym pathu, z danym kontentem
  on("task", {
    createBackupFile({ filePath, content }) {
      fs.writeFile(`cypress/fixtures/${filePath}`, content);
      return config;
    },
  });

  //konfigutacja esbuilda
  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  //usunniecie folderum np. downloads
  on("task", {
    deleteFolder(folderName) {
      return new Promise((resolve, reject) => {
        rmdir(folderName, { maxRetries: 10, recursive: true }, (err) => {
          resolve(null);
          reject(err);
        });
      });
    },
  });

  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents, // import pow funckcji
    baseUrl: "",
    chromeWebSecurity: false, // przydatna funkcja w chrome zwiekszajaca stabilnosc
    specPattern: "cypress/e2e/**/*.feature", // sciezka do testow
    watchForFileChanges: true, // automatyczne odpalanie testow w headed gdy zapiszemy zmiany
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    screenshotsFolder: "cypress/report/screenshots",
    retries: {
      // ponawianie testow w przypadku gdy zfailuja. jesli w np 2 raz bedzie succes to zaliczy ten test
      runMode: 2, //headless mode
      openMode: 0, //headed mode
    },
  },
});
