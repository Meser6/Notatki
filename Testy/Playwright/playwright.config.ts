import { defineConfig, devices } from "@playwright/test";

//Aby odczytac zmienne srodowiskowe z pliku nalezy zainstalowac paczke https://github.com/motdotla/dotenv i dodac
require("dotenv").config();

/**
 * Zobacz https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  //globalne ustawienie mozemy nadpisac w projektach jak i w samych testach
  timeout: 40000, // max trwania 1 testu
  globalTimeout: 60000, // max trwania wszystkich testow
  expect: {
    timeout: 2000, // max oczekiwania na spelnienie assercji
  },

  testDir: "./tests", // wskaze gdzie sa testy
  testMatch: "*.spec.js", // wezmie tylko te testy
  testIgnore: "test2.spec.js", // te pominie

  /* Zgłasza błąd budowania na CI, jeśli przypadkiem pozostawiłeś test.only w kodzie źródłowym. */
  forbidOnly: !!process.env.CI,

  /* Ponawia próby. W tym przypadku tylko na CI */
  retries: process.env.CI ? 2 : 0,

  //PW defaltowo oddtwarza testy rownolegle. Tworzy workery (defaltowo max 5) i losuje pliku ktore je dostana.
  //I odtwarza w nich testy jeden po drugim. Czyli bedzie 5 testow z 5 plikow na raz szlo
  //Jak sie jakis worker zwolni (wszystkie testy w pliku se wykonaja) to wylosuje kolejny
  //Aby ustawic kolejnosc (np jak mamy 1 worker) trzeba dodwac przed plikiem 001, 002 etc
  //Aby ustawic rownlegle wykonywanie testow rowniez w obrebie pliku trzeba ustawic flage
  fullyParallel: true,
  /* Ustala ile workerow na raz moze działać. W tym przypadku na CI bedzie 5 (defaultowo) a lokalnie 1  */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter do użycia. Zobacz https://playwright.dev/docs/test-reporters */
  reporter: "html",

  /* Wspólne ustawienia dla wszystkich projektów poniżej. Zobacz https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Bazowy URL do użycia w akcjach, takich jak `await page.goto('/')`. */
    baseURL: "http://127.0.0.1:3000",
    /* Zbieraj ślad, gdy ponawiasz test, który nie powiódł się. Zobacz https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
    /* Doda do kazdey wyslanego requestu podane headery */
    extraHTTPHeaders: {
      authorization: "token",
    },
    video: "on-first-retry", // ustawi nagrywanie wideo. W tym przypadku za pierwszym powtorzeniem testu
    storageState: "test.spec.js", // testy beda mialy dostep do sezji pomoca storageState()
  },

  /* W tej sekcji mozemy skonfigurewowac nasze projekty tzn np ustawic 3 projekty, kazzy z inna przegladarka albo base url
  albo np. odalic jeden prjekt wczesniej (np sprawdzjacy czy storna dziala albo pobierajacy auth token)
  a dopiero potem odpalic testy wlasciwe
  projekty te beda wykonywac sie rownolegle, chyba ze ustawimy zaleznosci 
  */
  projects: [
    {
      name: "setup",
    },
    /* Konfiguracja projektów dla głównych przeglądarek */
    /* Desktop Chrome, Desktop Firefox, Desktop Safari */
    {
      name: "chromium",
      use: {
        browserName: "chromium", // ustawienie przeglarki/widoku
      },
      dependencies: ["setup"], // ustawi zaleznosci tzn napierw odpali projekt 'setup' a dopiero potem ten projekt
    },
    /* Testy na widoku mobilnym. */
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],

  /* Uruchamia lokalny serwer przed rozpoczęciem testów */
  webServer: {
    command: "npm run start",
    url: "http://127.0.0.1:3000",
    reuseExistingServer: !process.env.CI,
  },
});
