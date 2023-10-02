import { test } from "../../test-options";
import { expect } from "@playwright/test";

test.describe.configure({ mode: "parallel" }); // mozemy nadpisac flage fullyParallel z konfigu tylko dla danego pliku
//teraz wszystkie testy w obszarze tego pliku beda sie wykonywac rownolegle

test.describe.parallel("rownolegle", () => {}); // mozemy tez ustawic to per blok
test.describe.serial("jeden po drugim", () => {});

test.describe("Testy", () => {
  test.describe.configure({ retries: 2 }); // mozemy zmieniac ponawiania da poszczegulncyh blokow/testow

  test("ma tytuł", async ({ page }, testInfo) => {
    if (testInfo.retry) {
      //zrobi cos jesli test jest powtorzony. np wyczysici dane z poprzedniego faila
    }
    await page.goto("https://playwright.dev/");

    // Oczekuj, że tytuł "zawiera" string.
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('pobierz link "Rozpocznij"', async ({ page }) => {
    await page.goto("https://playwright.dev/");

    // Kliknij link "Rozpocznij".
    await page.getByRole("link", { name: "Rozpocznij" }).click();

    // Oczekuje, że strona zawiera nagłówek o nazwie "Instalacja".
    await expect(
      page.getByRole("heading", { name: "Instalacja" })
    ).toBeVisible();
  });
});
