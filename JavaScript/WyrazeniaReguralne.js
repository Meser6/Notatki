//wyrazenia reguralne
{
  //Wyrażenia regularne sluza do badania i modyfikowania tekstu za pomoca wzorca.
  //Bardzo też przydają się tutaj narzędzia takie jak: https://regex101.com/, czy http://regexr.com/.

  //Aby w JavaScript korzystać z wyrażeń regularnych, możemy posłużyć się skróconym zapisem /wzor/
  const reg = /pani?/gi;
  //lub użyć konstruktora RegExp(wzór, flagi*), który przyjmuje 2 argumenty: wzór, którym będziemy testować, oraz dodatkowe flagi
  const reg2 = new RegExp("pani?", "gi");
  //Gdy już stworzymy wzór, musimy go użyć wraz z jedną z dostępnych metod
  const reg3 = /[0-9]{3}/;
  console.log(reg3.test("Ala")); //false

  //flagi
  {
    const a1 = /t/; //powoduje niebranie pod uwagę wielkości liter
    const a2 = /g/; //powoduje zwracanie wszystkich pasujących fragmentów, a nie tylko pierwszego
    const a3 = /m/; //powoduje wyszukiwanie w tekście kilku liniowym. W trybie tym znak początku i końca wzorca (^$) jest wstawiany dla każdej linii z osobna.
    const a4 = /s/; //Sprawia, że znak . pasuje także do znaku nowe linii (\n)
    const a5 = /u/; //Włącza możliwość używania kodów dla znaków unicode
    const a6 = /y/; //Włącza tryb sticky. Kolejne wyszukiwania będą rozpoczynać się od pozycji ostatniego szukania, którą definiuje lastIndex

    //pozycja w tekscie
    const a7 = /^/; //Znak ^ oznacza, że szukany fragment musi znajdować się na początku badanego tekstu
    const a8 = /$/; //Znak $ oznacza, że szukany fragment musi znajdować się na końcu badanego tekstu.
    //Jeżeli chcemy sprawdzić, czy dany fragment występuje na końcu linii wiele liniowego tekstu, powinniśmy dodać do wyrażenia flagę m

    //ilosc znakow
    const a9 = / */; //Znak * oznacza 0 lub więcej wystąpień poprzedzającej grupy lub znaku.
    const a10 = /+/; //Znak + oznacza 1 lub więcej wystąpień poprzedzającego znaku lub grupy.
    const a11 = /{}/; //Wewnątrz klamer podajemy liczbę znaków. Możemy tutaj podać konkretną wartość {4}, minimalną {4,}, maksymalną {,4} lub zakres znaków {2,4}:
    const a12 = /?/; //Znak ? oznacza 0 lub 1 wystąpienie poprzedzającego znaku lub grupy.

    //zbiory znakow
    const a13 = /[...]/; //Między nawiasy kwadratowe możemy wstawić znaki, które będą stanowić zbiór, który weźmie udział w teście
    // Podając zbiory znaków możemy określać ich zakresy:
    //  /[a-z]/ //a, b, c, ... , x, y, z
    // /[A-Z]/ //A, B, C, ... , X, Y, Z
    // /[a-c]/ //a, b, c
    // /[0-9]/ //0, 1, 2, 3, ... , 8, 9
    // /[a-zA-Z]/ //a, b, c, A, B, C, ..., z, Z
    // /[a-zA-Z0-9]/ //a, b, c, A, B, C, ..., z, Z, 0, ... 9
    //Zbiory znaków możemy też negować za pomocą znaku ^:

    /*gotowe zbiory:
    \d	każdy znak będący cyfrą. Równoznaczne z [0-9]
    \D	każdy znak nie będący cyfrą. Równoznaczne z [^0-9]
    \w	każdy znak będący literą, cyfrą i znakiem _. Równoznaczne z [a-zA-Z0-9_]
    \W	każdy znak nie będący literą, cyfrą i znakiem _. Równoznaczne z [^a-zA-Z0-9_]
    \s	znak spacji, tabulacji lub nowego wiersza
    \S	każdy znak nie będący spacją, tabulacją lub znakiem nowego wiersza
    \n	znak nowego wiersza
    \t	znak tabulacji
    \uXXXX	oznacza znak o danym kodzie Unicode. Do użycia wymaga odpowiedniej flagi
    .	oznacza dowolny znak nie będący znakiem nowej linii. Żeby oznaczał też nową linię musimy użyć odpowiedniej flagi.
    */
    //Dodatkowo mamy tutaj specjalne oznaczenie \b, które oznacza granicę słowa.

    const a14 = /|/; //Znak | oznacza lub
    const a15 = /?=/; //Zapis ?= pozwala nam dopasowywać dany fragment tekstu, gdy tuż za nim występuje inny fragment tekstu:
  }
  //https://kursjs.pl/kurs/regular/regular
}
// funkcje
{
  //test()
  {
    //zwraca prawdę lub fałsz w zależności, czy wyrażenie regularne znalazło pasujący fragment.
    const reg = /cat/;
    console.log(reg.test("cat dog")); //true
  }
  //match()
  {
    //Dla każdego string istnieje funkcja match(), która wyszukuje i zwraca pasujący fragment
    const text = "Numer1, Numer2, Numer3, NumerB, Numer5, NumerD";
    const reg1 = /Numer[1-4A-C]/;
    console.log(text.match(reg1)); //[Numer1]

    //lub fragmenty jeżeli użyliśmy flagi g
    const reg = /\b\w+\b/g;
    const result = "Ala ma kota a kot ma Ale".match(reg); //["Ala", "ma", "kota", "a", "kot", "ma", "Ale"]
  }
  //matchAll()
  {
    //match() zwraca iterowalny obiekt składający się z tablic zawierających znalezione grupy. Jeżeli nic nie znajdzie, zwracany jest null:
    const str = "<h1>Hello, world!</h1>";
    const reg = /<(.*?)>/g;

    const matchAll = str.matchAll(reg); // [object RegExp String Iterator]
  }
  //split()
  {
    //split() obiektu string służy do podziału tekstu na części. Znakiem podziału może być dowolny tekst, ale i wyrażenie regularne
    const txt = "Ala_ma_kota";
    console.log(txt.split("_")); //["Ala", "ma", "kota"];

    const txt2 = "Czołg o numerze 102 rusza do akcji i strzela 10 razy";
    console.log(txt.split(/[0-9]+/)); //["Czołg o numerze ", " rusza do akcji i strzela ", " razy"]
  }
  //search();
  {
    //search() dla regexpów zwraca indeks pierwszego wystąpienia podciągu w przeszukiwanym tekście
    const text1 = "Fantomas robi masę";
    const reg = /.asę/;
    console.log("Search: " + text1.search(reg)); //14
    //Funkcja ta zwraca tylko pierwsze wystąpienie szukanego ciągu. Jeżeli chcemy znaleźć wszystkie wystąpienia, powinniśmy skorzystać z funkcji matchAll
  }
  //replace()
  {
    //Obiekty typu string posiadają funkcję replace(), która służy do zamiany jednego ciągu na drugi.
    const text = "Kolorowy kolor nie jest kolorowy?";
    const reg = /lor/g;
    console.log(text.replace(reg, "ral")); //"Koralowy koral nie jest koralowy?"
  }
  //exec()
  {
    //Funkcja exec() działa nieco inaczej w zależności od tego, czy użyte wraz z nią wyrażenie regularne ma flagę g czy jej nie ma.
    //Jeżeli wyrażenie nie ma flagi g, funkcja exec() zwróci po prostu pasujący fragment.
    const txt = "2020-10-20";
    const reg = /\d+/;
    console.log(reg.exec(txt)); //"2020"
    console.log(reg.exec(txt)); //"2020"

    // Jeżeli jednak użyjemy flagi g, pierwsze odpalenie exec() zwróci pierwszy pasujący fragment, a dodatkowo pozycja zostanie zapisana w zmiennej regexp.lastIndex.
    // Każde kolejne odpalenie tej funkcji dla tego wyrażenia będzie zwracało kolejne fragmenty rozpoczynając od aktualizowanej właściwości regexp.lastIndex
    const txt2 = "2020-10-20";
    const reg2 = /\d+/g;
    console.log(reg.exec(txt)); //"2020"
    console.log(reg.lastIndex); //4

    console.log(reg.exec(txt)); //"10"
    console.log(reg.lastIndex); //7
  }
}
