import test from "@playwright/test";
// ---------- otwieranie strony ----------
test("", async ({ page }) => {
  page.goto(""); // otwiera strone bazowa

  // ---------- pobieranie elementu ----------
  page.locator("CSS"); // pobierze elenemt/y po selektorze CSS
  page.locator("a").locator("input"); //  znajdz element a, a nastepnie wszystkie inputy ktore sie w nim znajduja
  page.locator("CSS", { hasText: "Kliknij" }); // pobierze elenemt/y po selektorze CSS ktory ma tekst klijnij
  page.locator("CSS", { hasNotText: "Kliknij" }); // pobierze elenemt/y po selektorze CSS ktory NIE ma  tekst klijnij
  page.locator("CSS", { has: page.locator("CSS") }); // pobierze elenemt/y po selektorze CSS a potem posrod nich poszuka te ktory maja znowu CSS
  page.locator("CSS", { hasNot: page.locator("CSS") }); // pobierze elenemt/y po selektorze CSS a potem posrod nich poszuka te ktory NIE maja znowu CSS
  page.locator("CSS").filter({ hasText: "Kliknij" }); // pobierze elenemt/y po selektorze CSS a potem posrod nich poszuka te ktory maja tekst Kliknij

  page.locator("a").first(); // znajdz wszystkie elementy o tagu a (zał ze jest 10) i pobierz pierwszy
  page.locator("a").nth(3); // znajdz wszystkie elementy o tagu a (zał ze jest 10) i pobierz czwarty (liczy od 0)
  page.locator("a").locator(".."); // .. przeniesie do poziomu wyzej a wiec rodzica

  page.getByRole("button", { name: "Kliknij" }); // znajdz buttona ktory ma tekst Kliknij
  page.getByPlaceholder("placeholder"); //znajdz element ktory ma placeholder=placeholder
  page.getByTitle("tytul"); //znajdz element ktory ma title=tytul
  page.getByTestId("test"); // znajdz element data-testid=test. jesli chcemy zeby bylo cos innego niz testid to trzeba zmienic w konfigu

  page.getByText("tekst"); //znajdz element ktory zawiera tekst tekst
  page.getByText("tekst", { exact: true }); //znajdz element ktory ma dokladnie tekst tekst
});

// ---------- pobiereanie czegos z elementu ----------
test("", async ({ page }) => {
  el.textContent(); // pobranie tekstu elementu
  el.allTextContents(); // pobranie tekstu z elementu i wszystkich elementow dzieci. zwroci tablice z tekstami
  el.inputValue(); // pobierze to co wpisalismy/jest w polu tekstowym
});

// ---------- wpisywanie w formy ----------
test("", async ({ page }) => {
  el.fill("tekst"); // wpisze tekst do pola tekstowego natychmiastowo
  el.type("tekst"); // wpisze tekst do pola ale z lekkim opoznieniem (jak czlowiek)
  el.type("tekst", { delay: 500 }); // wpisze w podanych interwalach
  el.clear(); // wyczysci input
  el.blur(); // wyjdzie z pola tekstowego
});

// ---------- checkboxy/radio ----------
test("", async ({ page }) => {
  el.check(); // zaznaczy radio checka
  el.uncheck(); // odznaczy
  el.check({ force: true }); // zaznaczy na sile
  el.isChecked(); // zwroci booleana czy jest zaznaczony
  el.selectOption("druga"); // zaznaczy w <selekcie> <option> z value=druga
});

// ---------- ruchy myszka ----------
test("", async ({ page }) => {
  el.hover(); //najedzie myszka na element
  page.mouse.down(); //wcisnie lewy przycisk i bedzie go trzymac
  page.mouse.up(); // pusci wcisniecie

  el.dragTo(el2); // wezmie pierwzy element i przeniesie na miejsce drugiego

  //poruszanie muszka
  //aby poruszac myszka nalezy najpierw zbudowac kontener na podstawie elementu po ktorym bedzie odbywala sie nawigacja
  //lewy gorny to 0.0
  const box = el.boundingBox();
  //nastepnie mozemy juz poruszac myszka po tym boxie
  page.mouse.move(x, y);
});

// ---------- rozne ----------
test("", async ({ page }) => {
  //alerty
  page.on("dialog", (dialog) => {
    dialog.accept(); //zaakceptuje
    dialog.dismiss(); //niezaakceptuje
  });

  //wstrzykywanie js do strony
  el.evaluate((el) => {
    el.setAttribute("c", 12); // ustawi c w htmlu na 12
    el.removeAttribute("disabled"); // usunie dany atrybut z htmla
  });

  el.scrollIntoViewIfNeedeed(); // zesjroluje do elementu jesli nie jest widoczny

  const frame = page.frameLocator("lokator ifreame"); // przelaczy sie na iframe
  await frame.locator("css"); // akcje w tym iframe

  //envy
  process.env["TOKEN"] = "nowy token"; // zapisze enva z wartoscia
  process.env.TOKEN; // poierze enva

  //screeny
  page.screenshot({ path: "path/image.png" }); // zrobi screena i zapisze do pliku
  //to samo mozna zrobic ale dla elementu a nie dla calej strony

  page.waitForTimeout(1000); // poczeka okreslona liczbe msc

  page.locator("selektor").locator(".."); // posob na pobranie rodzica elementu
});
