import { test as setup } from "@playwright/test";

// plik ten bedzie nam tworzyl sesje z zalogowanym uzytkownkiem
// dzieki czemy nie bedzimy musieli sie logowac za kazdym razem

setup("Login", async ({ page }) => {
  //otworzy stone i sie zaloguje
  await page.goto("/");
  await page.locator("css_login").fill(""); //process.env.LOGIN);
  await page.locator("css_password").fill("password");
  await page.locator("css_acceptBittn").click();

  //zapisze obecna sesje urzytkownika do pliku podanego w path. dobrze jest wrzucic folder do gitignora
  await page.context().storageState({ path: "../.auth/loginSession.json" });

  //aby skorzystac z tej sesji trzeba ustawic odpowiednie zaleznosci w konfiguracji
});
