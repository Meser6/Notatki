//Przy użyciu JS wyświetl w tzw. konsoli przeglądarki tekst "Witaj świecie!".
console.log("witaj swiecie");
console.log("-------------------");
//Zdefiniuj zmienną tekst o wartości "Witaj świecie!". Wyświetl w konsoli wartość zmiennej.
let helloMessage = "witaj swiecie";
console.log(helloMessage);
console.log("-------------------");
//Zdefniuj stałą o nazwie e i wartości liczby Eulera czyli 2.718228. Stałą e wyświetl przy użyciu wyskakującego okienka.
const EULER_NUMBER = 2.718228;
console.log(EULER_NUMBER);
console.log("-------------------");
//Przypisz zmiennej o nazwie zmienna najpierw wartość liczbową 12, wyświetl typ w konsoli, następnie wartość tekstową
//"Język Java Script" i znowu wyświetl typ w konsoli.
let zmienna = 12;
console.log(typeof zmienna);
zmienna = "Język Java Script";
console.log(typeof zmienna);
console.log("-------------------");
//Zdefiniuj zmienną o nazwie opis i wartości "JavaScript to język programowania.". Wypisz do konsoli tekst Informacja:
//i treść zmiennej opis.
const opis = "JavaScript to język programowania.";
console.log(`Informacja: ${opis}`);
console.log("-------------------");
//Zdefiniuj zmienną a o wartości 21 i b o wartości 17. W oknie alert() wypisz działanie dodawania tych zmiennych tj. np 2 + 5 = 7.
const a = 17;
const b = 21;
alert(`${a} + ${b} = ${a + b}`);
console.log("-------------------");
//Pobierz za pomocą instrukcji prompt() wartość liczbową i wyświetl w konsoli komunikat Pobrana wartość: pobrana liczba.
//W razie problemu odśwież stronę.
const c = Number(prompt("podaj liczbe"));
console.log(`Pobrana wartosc: ${c}`);
