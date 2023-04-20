//Deklaracja funkcji
{
  // 1 sposob za pomoca deklaracji
  funkcja(); // mozna ja wywolac przed inicjalizacja
  function funkcja() {
    // slowko kluczowe function
    alert("alert");
  }

  funkcja(); // mozna tez po

  // 2 sposob - funkcja strzałkowa

  const funkcjaStrzałkowa = () => {
    alert("=>");
    // NIE mozna w niej uzyc this.
  };
  funkcjaStrzałkowa(); // NIE mozna ja wywolac przed inicjalizacja

  const funkcjaStrzalkowaReturn = (value) => value - 5; // gdy  jest tylko jedna linijka kodu
  //nie trzeba pisac return i robic {} bo jest to wbudowane domyslne

  // funkcje mozemy zapisywac do zmiennjej lub nie
  function nazwa1() {} // funkcja anonimowa
  const nazwa2 = function () {};
}
//Argumenty funkcji
{
  //wysyłając argumenty do funkcji wlatują tak na prawdę wlatują one do tablicy arguments

  //tworzenie funkcji z argumentami
  function funkcja2(a, b) {}

  const funkcja2prim = (a) => console.log(a); // jesli jest tylko jeden to nie musimy dodawac ()
  const funkcja2prim2 = (a, b) => console.log(a, b);

  funkcja2(4, "funkcja 2"); // do argumentow mozemy przekazywac dowolne typy

  //tworzenie funkcji z dowolna iloscia argumentow
  const funcja66 = function (...args) {}; // argumenty te wrzuci do tablicy (nie dziala w ts)

  //funkcja z domyslnymi parametrami
  function funkcja2i6(v1 = "w", v2 = 12) {}
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
//rekurencja
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
