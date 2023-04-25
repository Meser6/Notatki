// use script to funkcja eliminujaca wiele bledow jsa. dodaje sie ja na poczatku kazdego pliku
// sprawia ona min. ze nie mozna stworzyc zmiennej bez deklaracji let/const/var (przypadkowa literowka)
// nie pozwala tez stowrzyc funkcji z nazwa zarezerwowana dla przyszlych funkcjonalnosci
"use strict";

//W JS nie ma typowania zmiennych co oznacza ze do zmienniej x mozna wrzucic i pomienic ja na rozne typy.
//Zmiennie przymuja jednak typu w zaleznosci od zawartosci.
//Typy dziela sie na to co jest obiektem, i to co nie jest (prymitywne). tych drugich jest 7

// zmienna deklarujemy przez słówko kluczowe var, a od  ES6 - let i const
//nie moze sie ona zaczynac od cyfr i miec znaków spęcjalnych (oprocz $ i _)
//musza byc WYZEJ niz funkcje w ktorych sa wywowylawane bo js czyta od gory do dolu
{
  var zmiennaVar; // stara szkola. juz nie powinno sie tego uzywac
  zmennaBezTypu; // w taki sposob tez stowrzymy zmienna i bedzie dzialac jednak bedzi globalna i nie robi sie tak

  let zmiennaLet; // uzywamy gdy dana zmienna beziemy chcieli zmieniac w trakcie wykonywania kodu. moze byc zadeklarowana pusta
  const zmiennaConst = "cos"; // uzywamy gdy dana zmienna nie bedziemy zmieniac
}
//NIE może być zadeklarowana pusta. jak sie sprobuje nadpisac to rzuci wyjatek
//const powinno sie uzywac tak czesto jak to mozliwe. dopieto jak musimy cos zmienic to let.

// ----------- prymitywne zmienne
{
  //tekst
  {
    let zmienna = "Text";
    zmienna = "Text";
    zmienna = 'Tex"t'; // \" dezaktywuje cudzysłów
    zmienna = "Text\n "; // \n\ działa jak enter

    //polaczenie tekstu
    const zlySposob = a + " cos " + c; // raczej nie stosowac
    const dobrySposob = `${a} cos ${c + d}`; // lepsszy sposob. wewnatrz {} mozna robic operacje
    const kolejnaLinia = `pierwsza linia
    druga linia`; // majac tekst w ` beda brane rowniez pod uwage entery

    //metody na stringach
    //js moze niejawnie przekonwertowac string na tablice skladajaca sie z pojedynczych znakow
    //dzieki czemu mozemy wywolywac metody na stringach
    const text = "string";
    text.split(); // mozemy je wywolywac na zmiennych
    "string".toUpperCase(); // ale i bezposrednio na stringach
    text[0]; // mozemy tez wyciagac z nich znaki po indexach jak w tablicy

    text.length; // dlugosc
    text.indexOf("ri"); // index w ktorym zaczyna sie pierwszy raz pojawiac taki ciag. jak nie znajdzie to zwroci -1
    text.lastIndexOf("ri"); //ostatnie wystapienie
    // w obu przypadkach zwroci index poczatku czyli r w ciagu ri. bierze tez pod uwage wielkosc liter

    text.slice(1); // utnie na danym idexcie i zwroci nowego stringa (lacznie z tym idexem) - 'tring'
    text.slice(1, 3); //utnie i zwroci od pierwszego wlacznie do ostaniego wylacznie - 'tr'
    text.slice(-2, -1); //zacznie liczyc od konca - 'n'
  }
  // liczby
  {
    // liczby sa zawsze zmiennoprzecinkowe nawet jesli nie ma nic po przecinku.
    let zmienna2 = 1;
    zmienna2 = 1.5; //kropka zamiast przecinka
    zmienna2 = NaN; // not a number. w  typeof da nam number
    let zmienna7 = 9007199254740991n; //duzy int number, ale moze byc wiekszy niz zwykly
  }
  //operatory logiczne
  {
    let zmienna3 = true;
    // false jest przyjmowane dla wartosci:
    0, "", undefined, null, NaN;
    zmienna = false;
  }
  //niezadeklaowany - undefind
  {
    //bez zadnej zadeklarowenej wartosci. sam kontener zmiennej
    //np. jesli wywołujemy funkcje z dwoma argumentami ale wyslemy do niej tylko jeden to ten drugi przyjmie wartosc undefined
    let zmienna4;

    //pusty
    let zmienna5 = null;
  }
}
//aby poznac typ danej zminnej uzywamy operatora typeof
console.log(typeof zmienna3); // zwroci stringa z nazwa typu zmiennej
console.log(typeof "tekst");
console.log(typeof null); // zwroci object a nie null

//konwersja typow danych
{
  // jawna
  Number("1999"); // zwroci inta 1999
  Number("XDD"); // jak nie bedzie mogl zwrocic inta to zwroci NaN (patrz wyzej)
  String(12); // zwroci stringa '12'
  Boolean(null); // zwroci booleana

  //niejawna
  "text" + 12; // zwroci stringa 'text12'
  "12" + 12; // zwroci strnga '1212' poniewaz  zadziala jak konkatynacja tekstu
  12 * "12"; // zwroci inta 144 poniewaz sie domysli ze to ma byc int. zadziała dla kazdeej operacji oprocz +
  12 > 3; // zwroci booleana
}
//steytment - rodzaj kodu ktory nie zwraca zadnych wartosci
console.log("x");
//expresion - rodzaj kodu ktory tworzy jakies wartosci
1 + 3;
false && true;
