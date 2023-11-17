import { defineConfig, devices } from "@playwright/test";
require("dotenv").config();

export default defineConfig({
  testDir: "./tests", // folder z testami
  reporter: "html",
  use: {
    baseURL: "http://wp.pl",
  },
  projects: [
    {
      // projekt odpowiadajacy za stworzenie sesji z zalog owanym uzytkownikiem
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
