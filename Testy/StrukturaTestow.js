// ---------- struktura testu ----------

//w PW zamiast it jest test

describe("E2E", () => {
  // nazwa całego modułu testów
  it("first test", () => {
    // inicjalizacja pojedynczego testu + jego nazwa
  });
  it.only("second test", () => {
    //jesli w plikach z testami jest chociaz jeden z flaga only to odpala sie tylko te co maja ta flage
  });
  it.skip("second test", () => {
    // flaga skip zaskutkuje pominieciem testow ale z informacja ze zostal pominiety
  });

  //flagi mozna tez dodawac do describe.
  //powyzszy schemat nie ma plaskiej struktury tj mozna dodawac describe w descrbe itp.
});

// ---------- hooki ----------
// dzialaja one w obrebie danego describe. tj jak bedzie desc1>desc2 i drugi bedzie mial beforeEacha to wlaczy on hooki tylko
//dla testow ktore sa w desc2

beforeEach(() => {
  // wykona sie przed kazdym testem (w danym pakiecie)
});

afterEach(() => {
  //wykona sie po każdym teście (w danym pakiecie)
});

before(() => {
  // wykona sie raz, przed odpaleniem pierwszego testu (w danym pakiecie)
});

after(() => {
  // wykona sie raz, po zakonczeniu sie wszystkich testow (w danym pakiecie)
});
