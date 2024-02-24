//! Zestawy testowe
// jest to zestaw test case ktory zostanie wykonany w trakcie jednej iteracji

import { group, check, sleep } from "k6";

export const options = {
  thresholds: {
    "group_duration{group::main page}": ["avg<500"],
  },
};

// before all - fukcja setup odpali sie raz, przed wsyzstkimi testami
export function setup() {
  const setupResponse = http.get("https://test.k6.io");

  const someData = { data: 12 }; // z setupu mozemy wyslac dane do testow. wowczas zostana one udostepnione jako parametr
  return someData;

  if (setupResponse.error) exec.test.abort("setup failed"); // dobrze jest ubic testy gdy setup sie nie powiedzie
}

// testy eksportujemy jako defaultowa funkcje anonimowa
export default function (data) {
  testCase();
  console.log(data); // tu beda dane zwrocone z setup
}

//after all - funkcja teardown odpali sie raz, po wszystkich testach
export function teardown(data) {
  console.log("teardown");
}

const testCase = () => {
  group("main page", function () {
    // requesty mozemy grupowac
    const response = http.get("https://test.k6.io"); // robimy request do strony
    check(response, {
      "status is 200": (r) => r.status === 200,
      "body includes XD": (r) => r.body.includes("XD"),
    }); // sprawdzamy czy response jest poprawny. fail danego checka nie sprawi ze test bedzie zfaiilowany.
    //ogolny % poprawnych chceckow jest widoczny w raporcie jako check. Mozemy w tresholdach ustawic progi dla niego

    sleep(1); // po kazdym responsie dobrze jest odczekac jakis czas aby lepiej zasymulowac uzytkownika

    group("assets", function () {
      const response = http.get("https://test.k6.io/static/css/site.css");
      check(response, {
        "status is 200": (r) => r.status === 200,
      });
    });
  });
};
