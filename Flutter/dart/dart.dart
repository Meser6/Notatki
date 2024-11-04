//struktura pliokow:
// android, ios, windows etc - foldery z przetlu przetlumaczonym kodem na konkretne platformy
// lib - kod dartowy
// test - testy tesciki
// .metadata  analysis_options- plik z informacjami o projekcie. nie ruszac :)
// pubspec.yaml - podpowiednilk package.json

// dart
// import 'package:flutter/material.dart'; // aby pobrac paczke dodajemy package

void main() {
  int calcA() {
    return 1;
  }

  //*zmienne
  //!const
  const int zmienna =
      1; // const  zmienna ktora jest od razu znana w momencie kompilacji
  const zmienna12 = 3 * 2; // moze to byc tez wyrazenie ale nie funkcja
  // zmienna = 2; // blad, nie mozna zmienic wartosci const
  // const zmienna13 = calcA() // blad, nie mozna przypisac wartosci z funkcji

  //!final
  final int zmienna2 =
      calcA(); // final zmienna zostnie ustalona po komilacji i sie nie zmieni
  // zmienna2 = 2; // blad, nie mozna zmienic wartosci final

  //!var
  var zmienna3 =
      2; // var zmienna ktora jest dynamiczna. nie mozna okreslic jej typu bo jest on przypiaywany automatycznie
  zmienna3 = 3; // mozna zmienic wartosc
  // zmienna3 = 'a'; // blad, nie mozna zmienic typu
}
