import test from "@playwright/test";

// ----------- wysylanie requestu -----------
test("wysylanie", async ({ page, request }) => {
  // requesty wysylamy za pomoca parametry request + metody jakiej chcemy uzyc
  const response = await request.get("*/**/api");

  //aby dostac sie do body (podobnie jak w fetch) na odpowiedzi trzeba wywolac .json()
  const body = response.json();

  //dodatkowe dane do wyslania pdajemy w drugim parametrze
  request.post("*/**/api", {
    headers: {
      Authorizatin: "token",
    },
    data: {
      jakies: "body",
    },
  });
});

// ----------- przechwitywanie requestow wywoalnych za pomoca UI -----------

//aby przechwicic request nalezy uzyc funkcji route ktora przyjmuje
// url endpointa, callback co ma z tym requestem zrobic

test("przechwtanie", async ({ page }) => {
  await page.route("*/**/api/req", async (req) => {
    const response = await req.fetch(); // zwroci info jakie ma ten request.
    // z info takim mozemy zrobic w callbacu co chcemy. podmienic, sprawdzic etc.
  });
});

// ----------- czekanie na request -----------
test("czekenie", async ({ page }) => {
  //poczeka na pojawienie sie requesta i zpisze odpowiedz
  const resp = await page.waitForResponse("*/**/api");
  //aby dostac sie do body treba standardowo .json
  const body = resp.json();
});

// ----------- mockowanie requestów -----------

test("mock", async ({ page }) => {
  // mocnowane endpointy trzeba ustawic przed ich wywolaniem na stronie ofc
  await page.route("*/**/api/mock", async (route) => {
    //aby podmienic parametry ktre dostajemy w requescie uzywamy fullfill i prekazujemu mu co i na co chcemy zamienic
    await route.fulfill({
      body: JSON.stringify({ jakies: "body" }),
    });
  });
});
