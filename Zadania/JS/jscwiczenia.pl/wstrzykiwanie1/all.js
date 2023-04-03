//Do treści strony wstaw div-a z id="wynik". Zdefiniuj dwie zmienne a o wartości 15 i b o wartości 5.
//Tekst wynik: i wynik dodawanie zmiennych wstrzyknij do div-a z id="wynik".
const a = 15;
const b = 5;

const newDivWynik = document.createElement("div");
newDivWynik.id = "wynik";
newDivWynik.textContent = `wynik: ${a + b}`;
document.body.appendChild(newDivWynik);
console.log("-------------------");
//Do treści strony wstaw div-a z id="wynik2". Zdefiniuj dwie zmienne a o wartości 75 i b o wartości 123.
//Do div-a zid="wynik2" wstrzyknij działanie dodawania zmiennych jako nagłówek 1 stopnia.
const c = 75;
const d = 123;

const newDivWynik2 = document.createElement("div");
newDivWynik2.id = "wynik2";

const nowyH1WYnik2 = document.createElement("h1");
nowyH1WYnik2.textContent = c + d;

newDivWynik2.appendChild(nowyH1WYnik2);
document.body.appendChild(newDivWynik2);

console.log("-------------------");
//Użyj konstrukcji ${zmienna} i odwróconych apostrofów `` (na klawiszu ~) są to tzw. template strings.
//Zdefiniuj dwie zmienne a o wartości 75 i b o wartości 123. Do div-a zid="wynik3" wstrzyknij
//działanie dodawania zmiennych jako nagłówek 1 stopnia.
const e = 75;
const f = 123;

const nowyDiv3 = document.createElement("div");
nowyDiv3.id = "wynik3";

const nowyH1Wynik3 = document.createElement("h1");
nowyH1Wynik3.innerText = `${e + f}`;

nowyDiv3.appendChild(nowyH1Wynik3);

document.body.appendChild(nowyDiv3);
