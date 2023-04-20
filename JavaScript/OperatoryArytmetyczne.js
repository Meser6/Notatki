let a = 10,
  b = 20,
  c;

// Proste działania;
{
  a + b;
  a - b;
  a * b;
  a / b; // w przypadku dzielenia przez zero zwróci Infinity
  a ** b; // a do potegi b

  a % b; // Reszta z dzielenia
  Math.pow(a, b); // Potęgowanie, a do potęgi b
  Math.sqrt(a); // Pierwiastek kwadratowy z a
  Math.round(a); // Zaokragla do liczby calkowitej zgodznie z matekatyka
  Math.ceil(a); // Zaokragla liczbe zawsze go dóry (5.3 -> 6)
  Math.floor(a); // Zaokrągla liczne zawsze do dolu (5.7 -> 5)
  Math.abs(a); // Wartość bezwględna z a
  Math.trunc(a); // usuwa liczby po przecinku

  Math.PI; // Liczba Pi
  Math.random(); //Losuje liczbe zmiennoprzecinkową od 0 do 1

  a += b; // Dodaj a do b i zapisz to w a
  a++; // Dodaj 1 do a (post)
  ++a; // Dodaj 1 do a (pre)

  // Zamiast rożnych rodzajów nawiasów są tylko zwykłe
  (2 + 2) * 2 - 2;

  //porównanie bez patrzenia na typy zmiennych (niezalecane)
  a == b; //a jest równe b. np 5 === "5" zwróci true
  a >= b; //a jest większe bądź równe b np 5 !== "5" zwroic false

  //porownanie z uwzglednieniem typo zmiennych (zalecane)
  a === b; // np 5 === "5" zwróci false
  a !== b; // np 5 !== "5" zwro  ci true

  !false; // '!' działa jako negacja tzn. odwrócenie.

  //or ||
  {
    1 == 2 || 1 == 3; // || działa jako lub
    const toBedzie23 = null || 0 || 23; // zwroci tez pierwsza wartosc ktora bedzie true
    // jesli wszystkie beda falsy zwroci null

    const defaultValue = Object.wartosc || 23; // fajne w ten sposob mozna dopisywac domyslne wartosci obiektom
    //jesli wartosc istnieje to dopisze ja, a jak nie to dopisze 23

    let zmienna = 0;
    zmienna ||= 10; // sprawdzi czy zmienna jest trhuly. jesli tak to ja zostawi. jesli nie to dopisze do niej
    //druga wartosc
  }
  //and
  {
    1 == 1 && 2 == 2; // && działa jako i
    const bedzie0 = "xd" && 0 && 12; // zwroci pierwsza napotkana wartosc falsy
    const bedzie12 = "xd" && true && 12; // jeslu nie bedzie falsy to zwroci ostatnia wartosc

    Object.wartosc && console.log("wartosc"); // mozna w ten sposob pozbyc sie ifa
    //jesli wartosc istnieje to wykona sie druga czesc

    let zmienna = 5;
    zmienna &&= 10; // sprawdzi czy zmienna jest thurly. jesli  nie jest to ja zostawi. jesli jest to dopisze
    //do niej druga wartosc
  }
  //nulish
  {
    //nulish value: null albo undefind. cala reszta sie nie lapie, nawet 0 i ''
    const bedzie0 = 0 ?? 12; // nulish zwroci piersza wartosc ktora nulissem nie jest

    const defaultValue = Object.wartosc ?? 23; // zapobiega to min problemowi gdyby wartosc jednak istniala
    // i miala 0. dla || bedzie to zla wartosc, ale dla ?? to prawidlowa wartosc.

    let zmienna;
    zmienna ??= 10; // sprawdzi czy zmienna nie jest nulish. jesli nie jest to ja zostawi. jesli jest to dopisze
    //do niej druga wartosc
  }
}
//Data
{
  const date = new Date(); // pobranie aktualnej daty
  const date2 = new Date(1); // pobranie daty 01.01.1970 + 1msc
  const date3 = new Date(1995, 4, 21, 19, 30, 1); // pobranie daty rok, miesiac (liczony od 0!), dzien, godzina minuta, sekunda

  const dzien = date.getDate(); //pobiera dzien
  const miesiadate = date.getMonth(); // pobiera miesiac (liczy od 0 do 11!)
  const rok = date.getFullYear(); // pobiera rok
}
// tabela z kolejnoscia wykonywania operatorów
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
