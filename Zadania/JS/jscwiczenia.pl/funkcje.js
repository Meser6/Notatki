//Napisz prostą funkcję, która nie posiada, żadnych arguemntów, wypisuje do konsoli tekst: "Funkcja działa".
function dzialajacaFunkcja() {
  console.log("Funkcja działa");
}
console.log("----------");
//Napisz prostą funkcję o nazwie poleKola(), funkcja dla podanego promienia: np. poleKola(1), ma wypisać w konsoli tekst:
//Pole koła o promieniu: 1 wynosi: 3.141592653589793. Wywołaj funkcję z argumentami 1,2,10.
function poleKola(promien) {
  console.log(
    `Pole koła o promieniu: ${promien} wynosi: ${Math.sqrt(promien) * Math.PI}`
  );
}
poleKola(1);
poleKola(2);
poleKola(10);
console.log("----------");
//Napisz prostą funkcję o nazwie poleProstokata(), funkcja dla podanych argumentów - boki a i b. np. poleProstokata(2,5),
//ma wypisać w konsoli tekst: Pole prostokąta o bokach: 20 i 50 wynosi: 1000. Wywołaj funkcję z argumentami 2 i 5 oraz 20 i 50.
const poleProstokata = (a, b) => {
  console.log(`Pole prostokąta o bokach: ${a} i ${b} wynosi: ${a * b}`);
};
poleProstokata(2, 5);
poleProstokata(20, 50);
console.log("----------");
//Napisz funkcję ze zdefiniowanymi wartościami domyślnymi. Funkcja ma się nazywać: poleProstokata(), funkcja dla podanych argumentów -
//boki a i b. np. poleProstokata(2,5), ma wypisać w konsoli tekst: Pole prostokąta o bokach: 20 i 50 wynosi: 1000.
//Wywołaj funkcję z argumentami domyślnymi oraz 20 i 50. Wartości domyślne ustaw na 0.
const poleProstokata2 = (a = 0, b = 0) => {
  console.log(`Pole prostokąta o bokach: ${a} i ${b} wynosi: ${a * b}`);
};
poleProstokata2(2, 5);
poleProstokata2(20, 50);
console.log("----------");
//Napisz funkcję, która wypisze w konsoli liczby podane jako argumenty - dowolną ich liczbę. Skorzystaj z tzw. rest parametr.
function printManyArguments(...ars) {
  for (const x of ars) {
    console.log(x);
  }
}
printManyArguments(12, 3, 4, 5);
printManyArguments(12, 3, 4, 5, "dsa", true);
console.log("----------");
//Napisz funkcję sumator. Do funkcji można przekazać dowolną liczbę argumentów. Skorzystaj z tzw. rest parametr. Funkcja w miejscu
//wywołania ma zwracać podane argumenty i ich sumę.
function sumator(...liczby) {
  let message = "";
  let sum = 0;
  for (const x of liczby) {
    message += `${x}, `;
    sum += x;
  }
  return `liczby: ${message}suma: ${sum}`;
}
console.log(sumator(123, 123, 133));
console.log("----------");
//Zdefiniuj wyrażenie funkcyjne o nazwie witaj(), które wypisuje do konsoli tekst "Witaj świecie!". Wywołaj je po definicji wyrażenia
//a potem przed.
witaj();
function witaj() {
  console.log("Witaj swiecie");
}
witaj();
console.log("----------");
//Utwórz stronę, przycisk Wstaw tekst ma powodować wyświetlenie w divie tekstu "Funkcja anonimowa". Wykorzystaj funkcję anonimową.
//TODO
console.log("----------");
//Utwórz wyrażenie funkcyjne poleProstokata, podawane są dwa argumenty a i b. Wynik ma być wypisywany do konsoli. Skorzystaj z tzw.
//funkcji strzałkowych. Wywołaj funkcję z argumentami 2 i 5 oraz 20 i 50.
const poleProstokata3 = (a, b) => console.log(a + b);
poleProstokata3(2, 5);
poleProstokata3(20, 50);
console.log("----------");
//Utwórz bezargumentowe wyrażenie funkcyjne powitanie, które wypisuje do konsoli tekst 'Witaj';
const witajcie = () => console.log("witaj");
console.log("----------");
