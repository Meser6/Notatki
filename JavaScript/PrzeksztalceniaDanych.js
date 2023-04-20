//DESTRUKTURYZACJA ---------------------------------------------------------------------
//destrukturyzacja polega na pobraniu danych z tablicy/obiektu i dopisaniu ich do zmiennych
// tablice
{
  {
    const arr = [1, 2, 3, [4, 5]]; // zalozmy ze mamy taka tablice
    //aby pobrac z niej wszystkie elementy i dopisac do zmiennych musielibycmy zrobic tak:
    const x = arr[0],
      y = arr[1],
      z = arr[2];

    //dzieki desktukturyzacji mozemy zrobic to latwiej
    const [a, b, c] = arr; // pierwszy element dopisze do zmiennej a, drugi do b etc i zrobi z nich oddzielne zmienne
    const [d, , f] = arr; // jesli chcelibysmy pominac jakis element to wystarczy dac tam spacje
    const [, , g, [h, i]] = arr; // mozna robic destrukturyzacje w destrukturyzacji
    const [aa, bb, cc, dd, ee] = arr; // jesli podamy za duzo to te ktore nie znajda swoich danych zostana undefind
    const [aaa = 1, bbb, ccc = "bob", ddd, eed] = arr; // mozemy dopisywac wartosci domyslne. jesli na tym miejscu bedzie
    //jakas dana w tablicy to zostanie zastapiona. jesli nie to bedzie ta co jest domyslna
  }
  {
    const objectDoDestrukturyzacji = { a: 1, b: "BOB", c: { d: 14, e: 15 } };

    const { a, b } = objectDoDestrukturyzacji; // aby zdestrukturyzowac objekt robiimy {} i podajemy dokladne nazwy kluczy ktore on ma
    // w tedy powstana nowe zmienne (a i b) z dopisanymi do nich wartosiami. nie musi byc po kolei
    const { a: pierwsza } = objectDoDestrukturyzacji; // jesli chcemy jakies elementy pominac to po prostu ich nie piszemy. a jesli chcemy
    //zeby zmienna miala inna nazwe niz klucz to piszemy po : nowa nazwe
    const { b: druga = "dylan" } = objectDoDestrukturyzacji; // podobnie jak w tablicah mozemy przypisac wartosc domyslna

    let aa = 10; // zalozmy ze chcemy dopisac zdestrukturyzana zmienna do istniejacej. robimy to za pomoca takiego triku
    ({ a: aa } = objectDoDestrukturyzacji);

    const {
      c: { d },
    } = objectDoDestrukturyzacji; // aby wyciagnac zmienna ktora jest wewnatrz obiektu ktory jest w obiekcie to robimy tak

    function fukcjaDestukturyzacja({ a, b, c }) {
      // jesli mamy funkcje ktora jako parametr przyjmie objekt to mozemy go od razu
      console.log(c); //zdestrukturyzowac i wykorzystac te zmienne. WAZNE: musimy znac dokladne klucze
      return a + b;
    }

    fukcjaDestukturyzacja(objectDoDestrukturyzacji);
  }
}
// SPREAD OPERATOR ---------------------------------------------------------------------
// spread operator sluzy do wyciagania danych z iiteralnych zbiorow
// rozbije on zbiór na poszczegolne elementy i NIE dopisze do zmiennych
// wystepuje po PRAWEJ stronie =
{
  const arr2 = [1, 2, 3];

  //zalozmy ze chcemy zrobic tablic zawierajaca dane z arr i kilka nowych
  const zlySposob = [arr2[0], arr2[1], arr2[2], 5, 6];
  const dobrySposob = [...arr2, 5, 6]; // mozemy tu uzyc spread operatora i kotry pobierze nam dane
  //z tej talicy i dopiszse do nowej. output: [1,2,3,4,5,6]

  const copyArr = [...arr2]; // dzieku temu mozemy stworzyc kopie tablicy w bardzo latwy sposob
  //bedzie to kopia, a nie odwolanie do referencji pierwotnej

  console.log(...arr2); // mozemy tez przekazac taki zapis do fukcji

  //zbiory iterowane: array, string, map, set

  //string
  const text = "text";
  const letters = [...text]; // robije on stringa na poszczegolne znaki

  //object
  //w obiektach mozna go zastosowac ale bedzie dzialal inaczej
  const obj = { a: 1, b: 2 };

  const rozszerzonyObj = { ...obj, c: 3 }; // dopisze on do nowego obiektu klucze i wartosci starego.
  rozszerzonyObj.a;
}
//REST OPERATOR ---------------------------------------------------------------------
// sluzy do pakowania danych w tablice
// wystepuje na LEWO od =
{
  //tablice
  //w polaczeniu z destrukturyzacja rest operator zwroci nam pozostale elementy ktorych nie wycagnelismy
  const arr = [1, 2, 3, 4, 5, 6];
  const [a, , bb, ...c] = arr; // musi wystapic na koncu
  c; // zwroci nam tablice zawierajaca 4,5,6. nie bedzie bral pod uwae skipinietego elementu a tylko te
  //ktore wystepuja po ostatnim zdestrukturyzowanym elemencie

  //objekty
  const obj = { a: 2, b: 3, c: 4 };
  const { b, ...rest } = obj; // w przypadku obiektow wypisze wszystkie wlasciwosci ktorych nie wycignelismy
  rest; // i dopisze do obiektu

  //funkcje
  function funkcja(...args) {
    // zapis ten nie wystepuje w TS!
    let b; // do takiej funkcji mozemy wrzucic dowolna licznbe parametrow ktore beda zapisane w tablicy
    for (const i of args) {
      b = +i;
    }
    return b;
  }

  funkcja(1, 2, 3); // dzieki czemu mozemy podac dowolna liczbe parametrow
  funkcja(1, 23, 4, 5, 6, 7);

  funkcja(...arr, 12); // w przypadku gdy do takije funkcji chcielibysmy przekazac tablice to
  //napierw musimy ja rozbic, a potem polaczyc
}
