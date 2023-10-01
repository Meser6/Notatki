import { defineConfig, devices } from "@playwright/test";
require("dotenv").config();

export default defineConfig({
  testDir: "./tests",
  reporter: "html",
  use: {
    baseURL: "http://wp.pl",
  },
  projects: [
    {
      // projekt odpowiadajacy za stworzenie sesji z zalogowanym uzytkownikiem
      name: "setup",
      testMatch: "login.setup.ts",
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: ".auth.setup.ts",
      },
      dependencies: ["setup"],
    },
  ],
});
