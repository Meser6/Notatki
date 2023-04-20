let a = 10,
  b = 20,
  c;

// Proste działania;
{
  c = a + b;
  c = a - b;
  c = a * b;
  c = a / b; // w przypadku dzielenia przez zero zwróci Infinity
  c == a ** b; // a do potegi b

  c = a % b; // Reszta z dzielenia
  c = Math.pow(a, b); // Potęgowanie, a do potęgi b
  c = Math.sqrt(a); // Pierwiastek kwadratowy z a
  c = Math.round(a); // Zaokragla do liczby calkowitej zgodznie z matekatyka
  c = Math.ceil(a); // Zaokragla liczbe zawsze go dóry (5.3 -> 6)
  c = Math.floor(a); // Zaokrągla liczne zawsze do dolu (5.7 -> 5)
  c = Math.abs(a); // Wartość bezwględna z a
  c = Math.trunc(a); // usuwa liczby po przecinku

  c = Math.PI; // Liczba Pi
  c = Math.random(); //Losuje liczbe zmiennoprzecinkową od 0 do 1

  c = a += b; // Dodaj a do b i zapisz to w a
  c = a++; // Dodaj 1 do a (post)
  c = ++a; // Dodaj 1 do a (pre)

  // Zamiast rożnych rodzajów nawiasów są tylko zwykłe
  c = (2 + 2) * 2 - 2;

  //porównanie bez patrzenia na typy zmiennych (niezalecane)
  c = a == b; //a jest równe b. np 5 === "5" zwróci true
  c = a >= b; //a jest większe bądź równe b np 5 !== "5" zwroic false

  //porownanie z uwzglednieniem typo zmiennych (zalecane)
  c = a === b; // np 5 === "5" zwróci false
  c = a !== b; // np 5 !== "5" zwro  ci true

  c = !false; // '!' działa jako negacja tzn. odwrócenie.
  c = 1 == 1 && 2 == 2; // && działa jako i
  c = 1 == 2 || 1 == 3; // || działa jako lub
}
//Data
{
  const date = new Date(); // pobranie aktualnej daty
  const date2 = new Date(1); // pobranie daty 01.01.1970 + 1msc
  const date3 = new Date(1995, 4, 21, 19, 30, 1); // pobranie daty rok, miesiac (liczony od 0!), dzien, godzina minuta, sekunda

  const dzien = date.getDate(); //pobiera dzien
  const miesiac = date.getMonth(); // pobiera miesiac (liczy od 0 do 11!)
  const rok = date.getFullYear(); // pobiera rok
}
// tabela z kolejnoscia wykonywania operatorów
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
