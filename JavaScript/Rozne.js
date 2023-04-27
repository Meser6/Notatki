//Use script
{
  // use script to funkcja eliminujaca wiele bledow jsa. dodaje sie ja na poczatku kazdego pliku
  // sprawia ona min. ze nie mozna stworzyc zmiennej bez deklaracji let/const/var (przypadkowa literowka)
  // nie pozwala tez stowrzyc funkcji z nazwa zarezerwowana dla przyszlych funkcjonalnosci
  ("use strict");

  //W JS nie ma typowania zmiennych co oznacza ze do zmienniej x mozna wrzucic i pomienic ja na rozne typy.
  //Zmiennie przymuja jednak typu w zaleznosci od zawartosci.
  //Typy dziela sie na to co jest obiektem, i to co nie jest (prymitywne). tych drugich jest 7

  // zmienna deklarujemy przez słówko kluczowe var, a od  ES6 // let i const
  //nie moze sie ona zaczynac od cyfr i miec znaków spęcjalnych (oprocz $ i _)
  //musza byc WYZEJ niz funkcje w ktorych sa wywowylawane bo js czyta od gory do dolu
}
//zasieg kodu
{
  //zmienne/funkcje maja zasieg w obrebie swojego kodu ograniczonego {} i kodu swoich rodzicow
  {
    let jeden; // nie ma dostepu do nioczego
    {
      let dwa; // ma dostep do jednen ale nie ma do dwa
      {
        let trzy; // ma dostep do dwa i jeden
      }
    }
  }
}
//console
{
  console.log(); // wyświetla wiadomość w konsoli,
  console.warn(); // wyświetla ostrzeżenie w konsoli,
  console.error(); // wyświetla błąd w konsoli,
  console.table(); // wyświetla dane w formie tabeli,
  console.clear(); // czyści konsolę,
  console.group(); // grupuje powiązane wpisy konsolowe,
  console.count(); // liczy, ile razy dana instrukcja została wykonana,
  console.time() && console.timeEnd(); // pomiar czasu wykonania kodu,
  console.assert(); // wyświetla błąd, jeśli warunek jest fałszywy.
}
