import { defineConfig, devices } from "@playwright/test";

/**
 * Odczytaj zmienne środowiskowe z pliku.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * Zobacz https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Uruchamia testy w plikach równolegle */
  fullyParallel: true,
  /* Zgłasza błąd budowania na CI, jeśli przypadkiem pozostawiłeś test.only w kodzie źródłowym. */
  forbidOnly: !!process.env.CI,
  /* Ponawia próby tylko na CI */
  retries: process.env.CI ? 2 : 0,
  /* Wyłącza testy równoległe na CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter do użycia. Zobacz https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Wspólne ustawienia dla wszystkich projektów poniżej. Zobacz https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Bazowy URL do użycia w akcjach, takich jak `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Zbieraj ślad, gdy ponawiasz test, który nie powiódł się. Zobacz https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry",
  },

  /* Konfiguracja projektów dla głównych przeglądarek */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },

    /* Testy na widoku mobilnym. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Testy na przeglądarkach marek. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Uruchamia lokalny serwer deweloperski przed rozpoczęciem testów */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
