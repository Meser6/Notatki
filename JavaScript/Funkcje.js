//Deklaracja funkcji
{
  // 1 sposob za pomoca deklaracji
  funkcja(); // mozna ja wywolac przed inicjalizacja
  function funkcja() {
    // slowko kluczowe function
    alert("alert");
  }

  funkcja(); // mozna tez wywolac po

  // 2 sposob - funkcja strzałkowa
  const funkcjaStrzałkowa = () => {
    alert("=>");
    // this bedzie wskazywalo na rodzica funkcji
  };
  funkcjaStrzałkowa(); // NIE mozna ja wywolac przed inicjalizacja

  const funkcjaStrzalkowaReturn = (value) => value - 5; // gdy  jest tylko jedna linijka kodu
  //nie trzeba pisac return i robic {} bo jest to wbudowane domyslne

  // funkcje mozemy zapisywac do zmiennjej lub nie
  function nazwa1() {}
  const nazwa2 = function () {};

  x.forEach(function () {}); // funkcja moze byc tez anonimowa. nie ma w tedy nazwy i nie da sie jej nigdzie
  //indziej wywolac. czesto jako jakis calback
}
//Argumenty funkcji
{
  //wysyłając argumenty do funkcji wlatują tak na prawdę wlatują one do tablicy arguments

  //tworzenie funkcji z argumentami
  function funkcja2(a, b) {}

  const funkcja2prim = (a) => console.log(a); // jesli jest tylko jeden to nie musimy dodawac ()
  const funkcja2prim2 = (a, b) => console.log(a, b);

  funkcja2(4, "funkcja 2"); // do argumentow mozemy przekazywac dowolne typy

  const primitive = "xd";
  const obj = { a: 12 };
  funkcja2(primitive, obj); // przekazujac do funkcji prymitywny obiekt przekazujemy jego kopie
  //ale przekazujac obiekt przekazujemy referencje do jego instancji przez co robiac cos na nim w funkcji
  //bedziemy robic to tak na prawde w pierwotnym obiekcie.

  //tworzenie funkcji z dowolna iloscia argumentow
  const funcja66 = function (...args) {}; // argumenty te wrzuci do tablicy (nie dziala w ts)

  //funkcja z domyslnymi parametrami
  function funkcja2i6(v1 = "w", v2 = 12 * 14) {}
  funkcja2i6(); //jezeli nie nadpiszemy parametru to zostanie domyslny
  funkcja2i6(11); //jezeli nadpiszemy to bedxie nowy
  funkcja2i6(undefined, 11); // undefind bedzie traktowane jako nienadpisane i wywola sie domyslna wartoscb

  //nie da sie przeciążyć funkcji poprzez ilość argumentów.
  //gdy będziemy mieli dwie tak samo nazwane to wywoła sie ta która jest niżej w kodzie bez wzgledu na wyslane argumenty
  funkcja3(2, 3);

  function funkcja3(c, d) {} // ta sie nie wywoła
  function funkcja3(c) {} //ta sie wywoła

  funkcja4(3); //nie rzuci  wyjątkiem gdy wyslemy zbyt małą liczbe argumentów, tylko do pustych da undefind
  // ale można zabezpieczyć się przed zbyt małą ich iloscia
  function funkcja4(e, f) {
    if (f === undefined) {
      f = "pusto";
    }
  }
  funkcja5(4, 5, 6); //przy wysłaniu zbyt dużej liczby argumentów równiez nie dostanemy wyjątku
}
//Zwracanie wartosci
{
  //zwracanie przez funkcje odbywa sie przes słówko return
  function funcja6(a, b) {
    return a + b;
  }

  function funcja7(a, b) {
    // wszystko co jest po return nie zostanie wywołane bo return automatycznie konczy dana funcje
    return a + b;
    alert("alert"); // to już się nie wykona
  }
}
// kombinacje
{
  //rekurencja to wywoływanie funcji we ciele tej funkcji
  function funkcja8(a) {
    if (a == 1) {
      //trzeba pamietac, zeby nie bylo to wywoływanie nieskonczone
      return 1;
    } else {
      return a * funkcja8(a - 1);
    }
  }
}
// funkcje wyzszego i nizszego rzedu
{
  //Callback function w JavaScript to funkcja, która jest przekazywana jako argument do innej funkcji
  //i jest wywoływana przez tę funkcję po zakończeniu określonej operacji lub zdarzenia.
  function add5(a) {
    return a + 5;
  }
  function add50(a) {
    return a + 50;
  }

  // funkcje ktore przyjmuja inne funkcje nazywamy funkcjami wyzszego rzedu
  function printSum(a, fn) {
    console.log(`a${fn.name} = ${fn(a)}`); // jesli chcemy przekazac cos do wywolywanej funkcji albo skorzystac z jej wlasciwosci
    //to musimy to zrobic odwolujac sie do nazwy zmiennej ktora ma ja przyjac a nie nazwy funkcji
  }
  //a funkcje ktore przekazujemy do funkcji wyzszego rzedu - funkcjmi zwrotnymi  - callbackami
  printSum(10, add5); // aby wywolac taki callback nalezy podac go jak zwykla wartosc, bez () bo sie wywola
  printSum(10, add50);

  // dzieki takiemy zastosowaniun mozemy zwiekszyc poziom abstrakcji czyli korzystac z funkcji
  // ktorych to zasady dzialania nie za bardzo nas interesuja

  //funkcje ktore zwracaja nam inne funkcje rowniez nzwywamy funkcjami wyzszego rzedu
  function zewnetrzna(a) {
    console.log(`a: ${a}`);
    return function wewnetrzna(b) {
      // funkcje moga nam zwracac inne funkcje
      console.log(`b: ${b}`);
    };
  }
  const doTegoZostaniePrzypisanaFunkcjaWewnetrzna = zewnetrzna(6 /* a */); //wywoluemy funkcje zewnetrzna ktora zwroci wewnetrzna ktora
  //zostanie dopisana do tej zmiennej
  doTegoZostaniePrzypisanaFunkcjaWewnetrzna(66 /* b */); // wywolanie funkcji zwracanej

  zewnetrzna(6)(66); // to samo co powyzej ale bez dopisywania do funkcji
}
// ustawianie parametrow na sztywno
{
  //poprzez funkcje bind mozemy storzyc nowa funkcje ktora przyjmie stara i na stale dopisze do paamterow wartosci

  function fukcjaBind(a, b) {
    console.log(a, b);
  }

  const fukcjaBindBezA = fukcjaBind.bind(null, "zawsze bedzie 23"); // pierwszym parametrem jest null bo w nim ustawiamy this. (tego tu nie chcemy a wiec skipujemy)
  // drugi parametr funkcji ustawiamy na sztywno na napis i taka funkcje dopisujemy do zmiennej
  fukcjaBindBezA(33);
  //podobne rzeczy mozemy zrobic poprzez funkcje ktora zwraca funkcje
}
// Funcje wykonywane tylko raz
{
  //jesli chcemy zeby dana funcja byla wykonywana tylkk raz i to od razu po napisaniu uzywamy
  //takiego tricku
  (function () {
    console.log("tylko raz");
  })();
  //lub
  (() => {
    console.log("tylko raz");
  })();
  // obecnie sie tego juz nie uzywa alw wczesniej bylo uzywane ze wzgledu na ochrone zmiennych
}
