//Typescript jest nadzbiorem JS. Nie jest on czytany przez srodowisko JS wiec musi byc konwertowany na JS
//przed uruchomieniem. Aby przekonwertowac plikts na js uzyj komendy
//tsc path_do_pliku.ts
//bledy generowane w IDE po skonwertowaniu na js nie beda widoczne. ale nie jest zalecane ich olewanie

//dopisywanie typu
{
  let przykladZmiennnej: number = 15; // deklarowanie zmiennych robimy poprzez dodanie : po nazwie i napisanie nazwy typu
  przykladZmiennnej = "15"; // dzieku temu do danej zmiennej nie bedziemy mogli wrzucic innych typow

  let dwaTypy: number | string; // mozemy dopisac wiecej niz jeden typ za pomoca |

  //automatyczne dopisywanie typow do zmiennych. zalecane jak czesto sie da
  let toBedzieNumer = 15; // typescript domysli sie ze to jest numer i automatycznie przypisze do niego numer.
  toBedzieNumer = "216"; // i nie pozwoli dopisac czegos innego pomimo braku widocznej deklaracji
  const toBedzieNumer15 = 15; // jesli jest to const to nie dosc ze dopisze number to jeszce okresli ze ma byc dokladnie 15
  let tuJestTypAny; // powyzszy mechanizm zadziala TYLKO gdy dopiszemy wartosc do zmiennej na starcie.
  tuJestTypAny = 5;
  tuJestTypAny = "po";
  let tuJestTypString: string; // w takim przypadku trzeba dopisac typ juz momencie deklaracji zmiennej
  tuJestTypString = "po";
  tuJestTypString = 15;
}
// zawezanie typow
{
  //mozemy oreslic jakie dokladnie wartosci moze posiadac dana zmienna/parametr
  let siedemLubOsiem: 7 | 8;
  siedemLubOsiem = 7;
  siedemLubOsiem = 8;
  siedemLubOsiem = 9; // 9 nie mozemy przypisac bo zawezilismy tylko do 7 i 8

  type ograniczoneTypy = "jeden" | "dwa" | 1 | 2; // w ten sposob mozemy tworzyc typy a parametry/zmienne
  //ktore przyjmia ten typ beda musialy miec dokladnie taka wartosc

  const type1: ograniczoneTypy = 1;

  function zwroci10() {
    return 15 - 5;
  }
  const type2: ograniczoneTypy = zwroci10(); // TS nie wie czy funkcja zwroci dokladnie to co zadeklarowane
  // przez to bedzie sie wyswiwtlal blad. mozemy to naprawic w ten sposob:
  const type3: ograniczoneTypy = zwroci10() as ograniczoneTypy; // tutaj mowimy ze funckja na pewno zwroci
  //to co chcemy. jak zwroci cos innego to TS tego nie wylapie. stosowac tylko jak sie ma PEWNOSC
}

//Funkcje
{
  function przykladFunkcji(val1: number, val2: string) {
    // mozemy okreslac typy jakie maja byc wyslane do funckcji
    return `${val2} to ${val1 - 5}`;
  }
  przykladFunkcji(2); // TS nie pozwoli nam wyslac mniej argumentow do fukcji niz tyle ile jest zaledklarowane

  // mozemy za to wyslac wiele argumentow gdy okreslimy je w ten sposob
  function przykladFunkcji3(...val: number[]) {
    console.log(val);
  }
  przykladFunkcji3(1, 2, 3);

  function przykladFunkcji2(val1, val2) {
    // w parametrach funkcji automatycznie przypisanie typow nie zadziala
    return `${val2} to ${val1 - 5}`;
  }
  przykladFunkcji(2, "dad"); // bez okreslenia typow mozemy wpisac wszystko
  przykladFunkcji2("2", "2");
}
