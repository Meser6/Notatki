//W JS nie ma typowania zmiennych co oznacza ze do zmienniej x mozna wrzucic i pomienic ja na rozne typy.
//Zmiennie przymuja jednak typy w zaleznosci od zawartosci.
//Typy dziela sie na to co jest obiektem, i to co nie jest (prymitywne). tych drugich jest 7

//zmienna deklarujemy przez słówko kluczowe var, a od  ES6 - let i const
//nie moze sie ona zaczynac od cyfr i miec znaków spęcjalnych (oprocz $ i _)
//musza byc WYZEJ niz funkcje w ktorych sa wywowylawane bo js czyta od gory do dolu
//jesli beda nizej niz wywolywanie to przyjmia undefind

/*
Zmienne to rodzaje pudełek, w których możemy trzymać różne rzeczy.
Zmienne możemy tworzyć za pomocą słów kluczowych var/let/const, przy czym zalecane są te dwa ostatnie
Let/const różnią się od varów głównie zasięgiem oraz tym, że w jednym zasięgu (bloku) nie możemy ponownie tworzyć zmiennych o tej samej nazwie.
Hoisting to zjawisko wynoszenia na początek skryptu zmiennych i deklaracji funkcji
W naszych skryptach starajmy się używać jak najwięcej const - dzięki temu będziesz wyglądał jak pro. Jedynym wyjątkiem są liczniki 
oraz zmienne które wiemy, że zaraz zmienimy (np. toggleCatNightPartyMode)
*/
{
  var zmiennaVar; // stara szkola. juz nie powinno sie tego uzywac. bedzie zmienna globalna.
  //stworzy taka wlasciwosc w obiekcie globalnym. window.zmiennaVar
  zmennaBezTypu; // w taki sposob tez stowrzymy zmienna i bedzie dzialac jednak bedzi globalna i nie robi sie tak
  //zmienna globalna bedzie miala taki zasieg dla wszystkich sktyptow ktore podepiniemy pod dom i ktore sie zadja przed jej inicjalizacja
  //W przypadku var odwołanie się do zmiennej przed jej stworzeniem nie rzuci nam błędem, natomiast pokaże undefined:

  //W przypadku let/const zmienne mają zasięg blokowy, co w skrócie oznacza "od klamry do klamry":
  let zmiennaLet; // uzywamy gdy dana zmienna beziemy chcieli zmieniac w trakcie wykonywania kodu. moze byc zadeklarowana pusta
  const zmiennaConst = "cos"; // uzywamy gdy dana zmienna nie bedziemy zmieniac.NIE może być zadeklarowana pusta. jak sie sprobuje nadpisac to rzuci wyjatek
  //const powinno sie uzywac tak czesto jak to mozliwe. dopieto jak musimy cos zmienic to let.
  // W przypadku let/const nie jesteśmy w stanie używać zmiennych przed ich zadeklarowaniem:
}

// Żeby typy proste mogły być używane tak samo jak obiekty, Javascript musi nam ułatwić zadanie.
// Dla każdego typu prostego w Javascript istnieje specjalny konstruktor, za pomocą którego możemy tworzyć
// obiekt o danym typie (np. String(), Number(), Boolean()).

// Gdy tworzymy naszą zmienną jest ona prymitywna. Gdy wywołujemy dla niej jakąś metodę lub pobieramy jakąś właściwość,
// Javascript za pomocą wspomnianych konstruktorów zamienia w tle naszą zmienną na odpowiedni obiekt, wykonuje dla niego
// daną rzecz zwracając wynik, a następnie naszą zmienną przywraca do początkowego prymitywnego stanu.
// Zasada ta nie dotyczy się tylko undefined i null, które nie potrzebują mieć właściwości i metod.

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
    text.split("p"); // potnie text w miejsach gdzie wystepuje dany ciag i zwroci tablice pocietego tesktow
    // bez tego znaku.

    text.toLowerCase(); // zamieni duze litery na male i zwroci nowego stringa
    text.toUpperCase(); // male na duze

    text.trim(); // usunie spacje ktore znajduja sie na poczatku tekstu i na koncu

    text.replace("stary ciag", "nowy ciag"); // zamieni pierwsze wystapienie starego ciagu na nowy.
    text.replaceAll("stary ciag", "nowy ciag"); // zamieni wszystkiie wystepowania starego na nowy

    text.includes("aa"); // sprawdzy czy tekst zawiera ciag i zwroci booleana
    text.startsWith("aa"); // sprawdzi czy zaczyna sie na ciagu
    text.endsWith("aa"); // sprawdzi czy konczy sie na ciagu

    text.padStart(20, "x"); // wezmie text, sprawdzi jego dlugosc i jesli jest za mala to doda na poczatku znak
    //tak zeby mial podana dlugosc. jezeli dlugosc bedzie wieksza to nic nie zrobi
    text.padEnd(20, "xx"); // to samo ale doda na koncu

    text.repeat(5); // powtorzy dany tekst okreslona ilosc razy
  }
  // liczby
  {
    // liczby sa zawsze zmiennoprzecinkowe nawet jesli nie ma nic po przecinku.
    let zmienna2 = 1;
    zmienna2 = 1.546565; //kropka zamiast przecinka
    zmienna2 = NaN; // not a number. w  typeof da nam number
    let zmienna7 = 9007199254740991n; //duzy int number, ale moze byc wiekszy niz zwykly
    let nieskonczonosc = Infinity;
    let milion = 1e6; // 1000000 pomnozy liczbe razy 1(ilosc zer podana po e)
    let malo = 1e-6; // 0.000001 pomnozy liczbe razy e zer na lewo od liczby

    isNaN(zmienna2); // sprwdzi czy zmienna jest nan
    isFinite(zmienna2); // sprawdzi czy jest numerem

    zmienna2.toFixed(2); // 1.55 - zaokragli do 2 miejsc po przecinku
    zmienna2.toPrecision(2); // to samo tylko musibyc z przedzialu 1-100
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

  //wartosc, system
  parseInt("24px", 10); //24 // konwertuje tekst na liczne calkowita
  parseInt("26.5", 10); //26
  parseInt("100kot", 10); //100
  parseFloat("156.5px"); // 156.5 // konwertuje na zmiennoprzecinkowa
  const nr = 150;
  nr.toString(10); //konwersja na string. w parametrze podajemy system  (domyslnie dziesietny)

  //niejawna
  "text" + 12; // zwroci stringa 'text12'
  "12" + 12; // zwroci strnga '1212' poniewaz  zadziala jak konkatynacja tekstu
  12 * "12"; // zwroci inta 144 poniewaz sie domysli ze to ma byc int. zadziała dla kazdeej operacji oprocz +
  12 > 3; // zwroci booleana

  {
    12 + ""; // konwertowanie na stringa
  }
  {
    +"12"; // konwertowanie na inta
  }

  //JSON
  {
    JSON.parse("{f : b"); // json na obiekt
    JSON.stringify({ f: b }); // obiekt na json
  }
}
//steytment - rodzaj kodu ktory nie zwraca zadnych wartosci
console.log("x");
//expresion - rodzaj kodu ktory tworzy jakies wartosci
1 + 3;
false && true;
