//Typescript jest nadzbiorem JS. Nie jest on czytany przez srodowisko JS wiec musi byc konwertowany na JS
//bledy generowane w IDE po skonwertowaniu na js nie beda widoczne. ale nie jest zalecane ich olewanie

//komendy
{
  // aby skonwertowac pliki TS do JS nalezy uzyć odpowiednich metod
  //tsc path_do_pliku.ts - skonwertuje plik i stoworzy nowy JS
  //tsc path_do_pliku.ts -w (lub -- watch) - skonwertuje plik di JS i bedzie to robil za kazdym razem jak beda w nim jakies zmiany
  //tsc --init - zainicjuje projekt w TS i stworzy tsconfig.json z konfiguracja
  //tsc -w - gdy mamy zainicjalizowany projekt mozemy wlaczyc tryb watch dla kazdego pliku
  //tsc - bez flagi zkonwertuje nam  wsyzstkie ustawione w konfigu pliki do js
}

//dopisywanie typu
{
  let przykladZmiennnej: number = 15; // deklarowanie zmiennych robimy poprzez dodanie : po nazwie i napisanie nazwy typu
  przykladZmiennnej = "15"; // dzieku temu do danej zmiennej nie bedziemy mogli wrzucic innych typow

  //Automatyczne dopisywanie
  let toBedzieNumer = 15; // typescript domysli sie ze to jest numer i automatycznie przypisze do niego numer.
  toBedzieNumer = "216"; // i nie pozwoli dopisac czegos innego pomimo braku widocznej deklaracji
  const toBedzieNumer15 = 15; // jesli jest to const to nie dosc ze dopisze number to jeszce okresli ze ma byc dokladnie 15
  let tuJestTypAny; // powyzszy mechanizm zadziala TYLKO gdy dopiszemy wartosc do zmiennej na starcie.
  tuJestTypAny = 5; // jesli to leta nie dopiszemy od razu wartosci to dostanie on typ 'any'
  tuJestTypAny = "po";
  let tuJestTypString: string; // w takim przypadku trzeba dopisac typ juz momencie deklaracji zmiennej
  tuJestTypString = "po";
  tuJestTypString = 15;

  //Wiele typow
  let dwaTypy: number | string; // mozemy dopisac wiecej niz jeden typ za pomoca |
  dwaTypy = 2;
  dwaTypy = "2";
  dwaTypy = true; // true nie mozemy przypisac bo zawezilismy tylko do numberow i stringow

  //Dokładne wartosci
  let siedemLubOsiem: 7 | 8; //mozemy okreslic jakie dokladnie wartosci moze posiadac dana zmienna/parametr
  siedemLubOsiem = 7;
  siedemLubOsiem = 8;
  siedemLubOsiem = 9; // 9 nie mozemy przypisac bo zawezilismy tylko do 7 i 8
}
//wymuszanie zgodnosci
{
  //wymuszanie zgodnosci stowujemy wszedzie tam gdzie TS nie moze się domyślić z kodu co dotanie (np z HTMLA lub z API)
  //ale my mamy pewność, że dostanie dokladnie to co chcemy

  const elmentLubNull = document.querySelector("input"); // TS nie wie czy w tym przyopadku dostanie element czy nulla (jesli elementu nie bedzie)
  //dlatego element bedzie mial typ HTMLInputElement | null
  elmentLubNull.value; // blad bo TS nie wie czy bedzie element czy null

  const elemnt = document.querySelector("fd")!; // Stosujac ! na koncu inforumujemy TS, że jestesmy 100% pewni, że w tym miejscu nie dostanie nulla
  elemnt.value; // blad, nie pozwoli nam jednak pobrac wartosci poniewaz nie wie jaki dokladnie typ elementu zostanie zwrocony

  //Mozemy jednak przekazac TS, ze jestesmy 100% pewni, ze to co dostaniemy jest typem który podamy
  const elment2 = document.querySelector("input") as HTMLInputElement;
  const elment3 = <HTMLInputElement>document.querySelector("input"); //alternatywny sposob

  elment2.value; // brak bledu bo TS juz wie, że bedzie to Input, a inputy maja taka wlasciwosc
}
