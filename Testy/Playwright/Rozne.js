// ---------- komendy w terminalu ----------
`npm init playwright@latest` // inicjalizacja projektu w playwright
`npx playwright show--report` // odpali ostatni raport
`npx playwright test` // odpalenie wszystkich testów w trybie headless (bez widocznie odpalonej przegladarki) by default odpala na wszystkich projektach zdefiniowanych w konfigu (przegladarkach)
`npx playwright test --project-=chromium` //odpali odpowiedni projekt (przegladarke)
`npx playwright test --headed` // odpalenie ale z wyłączonym headlessem
`npx playwright test exapmple.spec.js` // odpali konkterny plik z testami
`npx playwright test -g "nazwa testu"` // odpali konkretny test
`npx playwright test --ui` // odpali ui mode
`npx playwright test --trace on` // wlaczy tryb trace. w raporcie beda snapshoty z kazdego stepu
`npx playwright test --debug`; // wlaczy w trybie debugu

// ---------- struktura testow ----------
//jest ona bardzo podobna do tej z mocha aczkoowiek testy wywolywane sa przez interfejs playwrighta  - test
import { expect, test } from "@playwright/test";

//test ma dostep wszystkich narzedzi testowych (jak mocha)
test.beforeAll(() => {});

test.describe("testy", () => {
  //testy rozpoczynamy test a nie it
  test("test", async ({ page }) => {
    // jako parametr do funkcji sa wysylane dane, min page. w parametrze tym beda wszystkie dane jakie akualnie sa na danej stronie
    // aby wykonac jakas akcje musimy sie odwolac do strny, czyli page wlasnie. wowczas czynnosc ta zwroci promise
    await page.goto("https://web.pl");
  });
});

// ---------- autowait  ----------
test("", async ({ page }, testInfo) => {
  //Playwright defaultowo ma mechanizm autoczekania podzielone na klika dzialow
  //wsyzstkie mozna ustawic globalnie w konfigu
  //Global - limit ile maja trwac maksymalnie wszystkie testy lacznie - defaultowo - bez limitu
  //Test - limit ile ma trwac maksymalnie jeden test - defaultowo - 30sek

  //aby zmienic limit dla pojedynczego testu (albo grupy) to uzywamy parametru przekazanego w tescie
  testInfo.setTimeout(testInfo.timeout + 5000); // zwiekszy timeout z konfiga o 5sek

  //action - limit na akcje typu clik - defaultowo - 0sek
  //navigation - limit np na przejscie do strony - defaultowo - 0sek
  //expect - limit na wykonanie sie assercji (ale tylko lokatora) - 5sek (globalna na 0sek )

  //Niektore z metod maja go wbudowanego automatycznie. Ich liste (i na co konkretnie czekaja)
  //mozna znalezc tutaj https://playwright.dev/docs/actionability
  page.locator("csss"); // poczeka automatycznie
  page.locator("css").allTextContents(); // tu juz nie

  //mozna tez nadpisac timeout z konfiga
  expect(page.locator("css")).toBeEmpty({ timeout: 20000 });

  // kazda metoda ma konkretne stany akcji na jakie ma zaczekac. sa to:
  // attachded - element jest dołączony do DOM
  // visible element jest widoczny
  // stable - element jest stabilny, np. nie jest animowany lub animacja została zakończona
  // receives events - element odbiera zdarzenia, np. nie jest zasłonięty przez inne elementy
  // enabled - element jest włączony
  //np. .click() poczeka na pierwzse 4 stany i dopiero kliknie. ale .getAttribute() poczeka tylko na pierwszy

  // mozemy jednak poczekac aby dany element mial stan jaki chcemy

  //aby ustawic czekajki na jaies elementy trzeba skorzystac z pomocy .waitFor i przekazac mu na zakonczenie jakiego
  //typu akcji ma zaczekac.
  const el = page.locator("css");
  el.waitFor({ state: "visible" });
  el.getAttribute("paremeter"); // w typ przypadku poczeka az bedzie widoczny i dopiero pobierze atrybut
  // a nie poczeka tylko na to zeby byl w drzewie dom.

  //mozna tez uzyc innych typow czekajek:
  page.waitForSelector("css"); // poczeka az se pojawi taki element
  page.waitForResponse("url/api"); //poczeka na dostanie odpowiedzi
  page.waitForRequest("url/api"); // poczeka az przegladarka wysle requesta
  page.waitForLoadState("networkidle"); // poczeka az wszystkie requesty sie wykonaja (niezalecane)
  page.waitForTimeout(5000); // poczeka odpowiednia liczbe msc
});
