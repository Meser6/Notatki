let strona = document.getElementById("1");

// 1 sposob za pomoca deklaracji
funkcja(); // mozna ja wywolac przed inicjalizacja
function funkcja() {
  alert("alert");
}

funkcja();

// 2 sposob - funkcja strzałkowa

const funkcjaStrzałkowa = () => {
  alert("=>");
  // NIE mozna w niej uzyc this.
};
funkcjaStrzałkowa(); // NIE mozna ja wywolac przed inicjalizacja

const funkcjaStrzalkowaReturn = (value) => value - 5; // gdy  jest tylko jedna linijka kodu
//nie trzeba pisac return i robic {} bo jest to wbudowane domyslne

// funkcje mozemy zapisywac do zmiennjej lub nie
function nazwa1() {
  console.log("1");
} // deklaracja funckcji
const nazwa2 = function () {
  console.log("2");
}; // ekspresja funkcji. funcja powinna cos zwracac.
// /\ moze byc wywolywana przed inicjalizacja funkcji w kodzie

//tworzenie funkcji z argumentami
function funkcja2(a, b) {
  for (var i = 0; i < a; i++) {
    strona.innerHTML += i + b + "<br>";
  }
}

const funkcja2prim = (a) => console.log(a);
const funkcja2prim2 = (a, b) => console.log(a, b);

funkcja2(4, "funkcja 2");

//tworzenie funkcji z dowolna iloscia argumentow

function funkcja2i5(...args) {
  // zapis ten nie wystepuje w TS!
  let b; // do takiej funkcji mozemy wrzucic dowolna licznbe argumentow
  //i argumenty te wyladuja w tablicy
  for (const i of args) {
    b = +i;
  }
  return b;
}

funkcja2i5(1, 2, 3);
funkcja2i5(1, 23, 4, 5, 6, 7);

//funkcja z domyslnymi parametrami (dziala w ts)
function funkcja2i6(v1 = "w", v2 = 12) {
  console.log(v1, v2);
}
funkcja2i6(); //jezeli nie nadpiszemy parametru to zostanie domyslny
funkcja2i6(11); //jezeli nadpiszemy to bedxie nowy
funkcja2i6(undefined, 11); // undefind bedzie traktowane jako nienadpisane i wywola sie domyslna wartoscb

//nie da sie przeciążyć funkcji poprzez ilość argumentów.
//gdy będziemy mieli dwie tak samo nazwane to wywoła sie ta która jest niżej w kodzie bez wzgledu na wyslane argumenty

funkcja3(2, 3);

function funkcja3(c, d) {
  // ta sie nie wywoła
  strona.innerHTML += c + d + "<br>";
}

function funkcja3(c) {
  //ta sie wywoła
  strona.innerHTML += c + "<br>";
}

//gdy wyślemy do funkcji złe typy argumentów lub za mało tychże to nie rzuci wyjątkiem. Da zły output (np. NaN)

funkcja2(3);
funkcja2("xd", 2);

//wysyłając argumenty do funkcji wlatują tak na prawdę wlatują one do tablicy arguments

//nie rzyci tez wyjątkiem gdy wyslemy zbyt małą liczbe argumentów
// ale można zabezpieczyć się przed zbyt małą ich iloscia

funkcja4(3);

function funkcja4(e, f) {
  if (f === undefined) {
    f = "pusto";
  }
  strona.innerHTML += e + f + "<br>";
}

//przy wysłaniu zbyt dużej liczby argumentów równiez nie dostanemy wyjątku
//można to obłużyć w poniższy sposób.

funkcja5(4, 5, 6);

function funkcja5(g, h) {
  if (arguments.length < 3) {
    strona.innerHTML += g + h + "<br>";
  } else {
    strona.innerHTML += g + h + arguments[2] + "<br>";
  }
}

//zwracanie przez funkcje odbywa sie przes słówko return

strona.innerHTML += funcja6(1, 2) + "<br>";

function funcja6(a, b) {
  return a + b;
}

// wszystko co jest po return nie zostanie wywołane bo return automatycznie konczy dana funcje

strona.innerHTML += funcja7(1, 2) + "<br>";

function funcja7(a, b) {
  return a + b;
  alert("alert"); // to już się nie wykona
}

//rekurencja to wywoływanie funcji we ciele tej funkcji
//trzeba pamietac, zeby nie bylo to wywoływanie nieskonczone

strona.innerHTML += funkcja8(5) + "<br>";

function funkcja8(a) {
  if (a == 1) {
    return 1;
  } else {
    return a * funkcja8(a - 1);
  }
}
