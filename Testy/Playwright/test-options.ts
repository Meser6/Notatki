import { test as base } from "@playwright/test";
import { expect } from "@playwright/test";

//za pomoca tego pliku mozemy rozszerzac wbudowane właściwości testu
// Trzeba pamietać, że żeby to zadziałao trzeba:
//1 istawic odpowiedni typ w configu
//2. importowac {test} w testach z tego pliku, a nie z '@playwright/test'

export type TestOptions = {
  someGlobalEnvToSet: string;
  someGlobalEnv: string;
  doSomethingBefore: string;
};

export const test = base.extend<TestOptions>({
  // w ten sposob mozemy stworzyc konterner na env ktory mozna podac w konfigu
  someGlobalEnvToSet: ["", { option: true }],
  //mozemy tez taki env stworzyc od razu
  someGlobalEnv: "value",

  //fixtures
  // mozemy tez tutaj trzymac fixtures i instrukcje do wykonanya przed/po testach
  // zaleta trzymania ich tutaj jet szybkosc. wykona sie to jeszcez przed zaladowaniem przegladarki
  doSomethingBefore: [
    //wykona przed kazdym testem (ladcznie z hookami)
    async ({ page }, use) => {
      await page.goto("/");
      await expect(page.locator("css_loadingu")).toHaveCount(0);

      await use(""); //konczy before
      // to wykona po kazdym tescie
      console.log("zakonczono");
    },
    { auto: true }, // dzieki tej fladze automatycznie sie wykona
  ],
});
