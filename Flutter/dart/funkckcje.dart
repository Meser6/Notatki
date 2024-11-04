void fukncje() {
// skladnia fukcnji podobna do Javy

// typ zwracany, nazwa funkcji, parametry z feklaracja typu lub nie.
  int dodaj(a, int b) {
    return a + b;
  }

  dodaj(2, 3);
  // dodaj(1); // blad, brak parametru

// gdy jakis argument opakujemy w [] to staje sie opcjonalny. mozemy tez do niego dopisac wartosc domyslna
  int dodaj3(a, [b = 5]) {
    return a + b;
  }

  dodaj3(1);
  dodaj3(1, 2);

// parametry mozemy zapisac normalnie lub w konwencji z nazwami. wowczas nie bedzie miala znaczenia ich kolejnosc

  int dodaj2({a, b, c = 5}) {
    return a + b;
  }

  dodaj2(b: 2, a: 1);
  dodaj2(
      b: 2); // brak bledyu. w tej konwencji wszystkie sa opcjonalne chyba ze oznaczymy je jako required

  int dodaj4({required a, required b}) {
    return a + b;
  }

  // dodaj(1); // blad, brak parametru ktory jest required

//mona tes laczyc obie konwencje

  int dodaj5(a, {b, c}) {
    return a + b + c;
  }

  // wowczas  bedzie to wygladac tak:
  dodaj5(
    1,
    c: 3,
    b: 2,
  );
}
