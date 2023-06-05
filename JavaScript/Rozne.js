//Use script
{
  // use script to funkcja eliminujaca wiele bledow jsa. dodaje sie ja na poczatku kazdego pliku
  // sprawia ona min. ze nie mozna stworzyc zmiennej bez deklaracji let/const/var (przypadkowa literowka)
  // nie pozwala tez stowrzyc funkcji z nazwa zarezerwowana dla przyszlych funkcjonalnosci
  ("use strict");
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
