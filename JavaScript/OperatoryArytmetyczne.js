//operatoty atytmetyczne sa takie same jak w Java z niewielkimi roznicami.

var a = 10, b = 20, c;

// Proste działania;
c = a + b;
c = a - b;
c = a * b;
d =  a / b; // w przypadku dzielenia przez zero zwróci Infinity

c = a % b; // Reszta z dzielenia
c = Math.pow(a, b); // Potęgowanie, a do potęgi b
c = Math.sqrt(a); // Pierwiastek kwadratowy z a
c = Math.round(a) // Zaokragla do liczby calkowitej zgodznie z matekatyka
c = Math.ceil(a) // Zaokragla liczbe zawsze go dóry (5.3 -> 6)
c = Math.floor(a) // Zaokrągla liczne zawsze do dolu (5.7 -> 5)
c = Math.abs(a); // Wartość bezwględna z a

c = Math.PI; // Liczba Pi
c = Math.random() //Losuje liczbe zmiennoprzecinkową od 0 do 1


c= a += b; // Dodaj a do b i zapisz to w a
c = a++; // Dodaj 1 do a (post)
c = ++a; // Dodaj 1 do a (pre)

// Zamiast rożnych rodzajów nawiasów są tylko zwykłe
c = ((2 + 2) * 2) - 2;

//porównanie bez patrzenia na typy zmiennych
c = a == b; //a jest równe b. np 5 === "5" zwróci true
c = a >= b; //a jest większe bądź równe b np 5 !== "5" zwroic false

//porownanie z uwzglednieniem typo zmiennych
c = a === b // np 5 === "5" zwróci false
c = a !== b // np 5 !== "5" zwroci true
c = typeof(d) //zwroci typ zmiennej d

c = !false; // ! działa jako negacja tzn. odwrócenie.
c = 1 == 1 && 2 == 2; // && działa jako i
c = 1 == 2 || 1 == 3; // || działa jako lub


//różnica jest gdy chcemy działać na różnych typach danych
c = "2" + 3 // zwroci stringa "23"
c = "2" * 3 // zwroci inta 6 bo sam sie domysli ze "2" to ma byc jednak liczba. działa na wszystkich operatorach oprócz +
c = "A" * 3 // zwróci wartosc NaN

//Data
var date = new Date(); // pobranie aktualnej daty
var date2 = new Date(1); // pobranie daty 01.01.1970 + 1msc
var date3 = new Date(1995,4,21,19,30,1); // pobranie daty rok, miesiac (liczony od 0!), dzien, godzina minuta, sekunda

var dzien = date.getDate(); //pobiera dzien
var miesiac = date.getMonth(); // pobiera miesiac (liczy od 0 do 11!)
var rok = date.getFullYear(); // pobiera rok