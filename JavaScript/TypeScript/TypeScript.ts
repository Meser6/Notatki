//Typescript jest nadzbiorem JS. Nie jest on czytany przez srodowisko JS wiec musi byc konwertowany na JS
//przed uruchomieniem. Aby przekonwertowac plikts na js uzyj komendy
//tsc path_do_pliku.ts
//bledy generowane w IDE po skonwertowaniu na js nie beda widoczne. ale nie jest zalecane ich olewanie

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

  //Własne typy
  type OgraniczoneTypy = "jeden" | "dwa" | 1 | 2; //mozemy tez tworzyc typy i dopisywac je do zmiennych/parametrow
  //TypeScript nie domysli sie jednak ze jakas zmienna ma miec ten typ a nie ogolny i nie dopisze go automatycznie

  const type1: OgraniczoneTypy = 1;
  const type2: OgraniczoneTypy = "trzy"; //blad bo nie moze takiego przyjac

  type OgraniczoneTypy2 = string | { name: string }; //typy moga byc tez ogolne

  const type4: OgraniczoneTypy2 = { name: "bob" };
  const type5: OgraniczoneTypy2 = "bob";
  const type6: OgraniczoneTypy2 = true; //blad

  function zwroci10() {
    return 15 - 5;
  }
  const type7: OgraniczoneTypy = zwroci10(); // TS nie wie czy funkcja zwroci dokladnie to co zadeklarowane
  // przez to bedzie sie wyswiwtlal blad. mozemy to naprawic w ten sposob:
  const type8: OgraniczoneTypy = zwroci10() as OgraniczoneTypy; // tutaj mowimy ze funckja na pewno zwroci
  //to co chcemy. jak zwroci cos innego to TS tego nie wylapie. stosowac tylko jak sie ma PEWNOSC
}
