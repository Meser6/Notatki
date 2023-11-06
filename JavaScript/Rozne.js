//Use script
{
  // use script to funkcja eliminujaca wiele bledow jsa. dodaje sie ja na poczatku kazdego pliku
  // sprawia ona min. ze nie mozna stworzyc zmiennej bez deklaracji let/const/var (przypadkowa literowka)
  // nie pozwala tez stowrzyc funkcji z nazwa zarezerwowana dla przyszlych funkcjonalnosci
  ("use strict");
}
//zasieg kodu
{
  //zasieg kodu mozemu pydzielic na 3 kategorie:
  //globalny - zmienne zadeklarowane poza jakimilokwiek {}
  //funkcyjny - zmienne zadeklarowane w funkcji
  //zakresowy - zmiene zadeklarowane w jakikmoklwiek {}

  const x = 2; // globalny

  function xd() {
    const b = 2; // funkcyjny
    x; // ma dotep do x
    d; // ma dotep do d
    if (true) {
      const c = 2; //zakresowy
      x; // ma dostep do x
      b; // ma dostep do b
      var d = 2; // var nie patrzy na zakresowy zakres wiec bedzie dosgepny w funkcji
    }
  }

  //zmienne/funkcje maja zasieg w obrebie swojego kodu ograniczonego {} I !! kodu swoich rodzicow
  {
    let jeden; // nie ma dostepu do nioczego
    {
      let dwa; // ma dostep do jednen ale nie ma do trzy
      {
        let trzy; // ma dostep do dwa i jeden
      }
    }
  }
}
// wywolywanie przed deklaracja
{
  fn(); // funkcje mozna wywolac przed deklaracja o ile nie sa wpisane w zmienna
  function fn() {}

  v; // var mozna wywolywac przed ale przyjmie undefind
  var v = 12;

  con; // const/let nie mozna wywwolywac przed bo nie ma jescze wartosci
  const con = 12;

  fnZm; // funkcje dopisane do zmiennych zachowaja sie jak prymitywne wartosc, czyt. jak wyzej
  const fnZm = function () {};
}
//console
{
  let zm = 5;

  console.log(); // wyświetla wiadomość w konsoli,
  console.log({ zm }); // wyswietli zmienna wraz z nazwa {zm: 5}
  console.dir(); // do wyswietalania elementow strony
  console.warn(); // wyświetla ostrzeżenie w konsoli,
  console.error(); // wyświetla błąd w konsoli,
  console.table(); // wyświetla dane w formie tabeli,
  console.clear(); // czyści konsolę,
  console.group(); // grupuje powiązane wpisy konsolowe,
  console.count(); // liczy, ile razy dana instrukcja została wykonana,
  console.time() && console.timeEnd(); // pomiar czasu wykonania kodu,
  console.assert(); // wyświetla błąd, jeśli warunek jest fałszywy.
}
//bledy / wyjatki
{
  //tworzenie nowego bledu
  new Error("error message");

  //rzucenie bledem
  throw new Error("error message");

  // oblugiwanie bledu w kodzie
  // jezeli w kodzie ktory znajduje sie wewnatrz try zostanie rzucony jakis wyjatek to zostane on wylapany w catch i obsluzony
  try {
    //kod ktory moze wygenerowac blad
    throw new Error("error message");
  } catch (error) {
    console.log(error);
  }
}
//timeouty
{
  //setTimeout
  {
    //odpali funkcje po jakims czasie
    const time = setTimeout(() => {
      console.log("z zaskoczenia!");
    }, 3000);

    clearTimeout(time); // przerwanie odliczania

    //Jeżeli przekazana do setTimeout funkcja wymaga przekazania atrybutów, możemy je podać jako kolejne wartości dla setTimeout:
    function print(txt, nr) {
      console.log(txt, nr);
    }

    //wraz z przekazaną referencja do funkcji
    setTimeout(print, 2000, "Ala ma kota", 102);

    //wraz z funkcją anonimową
    setTimeout(
      (txt, nr) => {
        console.log(txt, nr);
      },
      2000,
      "Ala ma kota",
      102
    );
  }
  //setInterval
  {
    //odpali funkcje co x czasu, az do zamniecia strony/programu
    const interval = setInterval(() => {
      console.log("Wypiszę się co 1 sekundę");
    }, 1000);

    clearInterval(interval); //przerwanie
  }
}
//Data
{
  const date = new Date(); // pobranie aktualnej daty
  const date2 = new Date(1); // pobranie daty 01.01.1970 + 1msc
  const date3 = new Date(1995, 4, 21, 19, 30, 1); // pobranie daty rok, miesiac (liczony od 0!), dzien, godzina minuta, sekunda

  date.getDate(); // zwraca dzień miesiąca (wartość z przedziału 1 - 31)
  date.getDay(); // zwraca dzień tygodnia (0 dla niedzieli, 1 dla poniedziałku, 2 dla wtorku itd)
  date.getYear(); // zwraca liczbę reprezentującą rok (dla lat 1900 - 1999 jest to 2-cyfrowa liczba np. 99, a dla późniejszych jest to liczba 4-cyfrowa np. 2002)
  date.getFullYear(); // zwraca pełną liczbę reprezentującą rok (np. 1999 lub 2000)
  date.getHours(); // zwraca aktualną godzinę (wartość z przedziału 0 - 23)
  date.getMilliseconds(); // zwraca milisekundy (wartość z przedziału 0 - 999)
  date.getMinutes(); // zwraca minuty (wartość z przedziału 0 - 59)
  date.getMonth(); // zwraca aktualny miesiąc (0 - styczeń, 1 - luty itp.)
  date.getSeconds(); // zwraca aktualną liczbę sekund (wartość z przedziału 0 - 59)
  date.getTime(); // zwraca aktualny czas jako liczbę reprezentującą liczbę milisekund która upłynęła od godziny 00:00 1 stycznia 1970 roku
}
