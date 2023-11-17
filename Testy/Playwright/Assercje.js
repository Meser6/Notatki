import { expect } from "chai";

// w playwright sa dwa typy assercji
test("", async ({ page }) => {
  // --------- general ---------
  {
    //gdy sprawdzamy jakas wartosc
    expect(5).toEqual(5);
    //nie ma zadnych timeoutow
    //w general nie trzeba stosowa awaitow bo nie ma tam zadnej obietnicy
  }
  // --------- locator ---------
  {
    //gdy sprawdzamy jakis elemment strony
    await expect(page.locator("css")).toHaveText("5");
    //by defoult bedzie czekal 5sek na sukces

    //kazda z nich ma wlasciwosc soft
    // --------- soft ---------
    //charakteryzuja sie one tym ze test bedzie kontynlowany nawet jak assercja zfailuje (sam test bedzie faild)
    await expect.soft(page.locator("css")).toHaveText("5");
    page.locator("css").click(); // to sie mimo wszystko wykona
    //gdy sprawdzamy jakas wartosc
  }
});

test("", async ({ page }) => {
  await expect(el).toHaveValue("x"); // ma wpisana wartosc
  await expect(el).toBeChecked(); // czy jest zaznaczone
  await expect(el).toHaveText("bob"); // czy ma taki tekst
  await expect(kilkaEl).toHaveText(["el1", "el2"]); // pobierze teksty, wrzyci je do tavlicy i porowna po kolei
  await expect(el).toHaveCSS("color", "rgb");
});
