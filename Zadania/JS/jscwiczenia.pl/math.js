//Do zmiennej liczba1 przypisz 216.7621. Wyświetl część całkowitą tej zmiennej w konsoli
const liczba1 = 216.7621;
console.log(Math.floor(liczba1));
console.log("--------------");
//Do zmiennej liczba1 przypisz 216.7621 do zmiennej liczba2 201.12. Wykorzystaj metodę .round() zakokrągl obie
//zmienne, wyniki wyświetl w konsoli. Jak działa ta metoda?
const liczba2 = 216.7621;
const liczba3 = 201.12;
console.log(Math.round(liczba2), Math.round(liczba3));
console.log("--------------");
//Wyświetl w konsoli 6 przypadkowych liczb z zakresu od 1 do 49.
for (let i = 0; i < 6; i++) {
  console.log(Math.floor(Math.random() * 50));
}
console.log("--------------");
//Wyświetl na ekranie 6 przypadkowych liczb całkowitych rozdzielonych przecinkami.
let numbers = "";
for (let i = 0; i < 6; i++) {
  numbers += `${Math.floor(Math.random() * 100 + 1)}, `;
}
console.log(numbers);
console.log("--------------");
//Skorzystaj z metody prompt(). Napisz program, który w kółko dla podanego promienia >0 oblicza pole koła i jego obwód.

const getRadius = () => {
  let number;
  do {
    number = Number(prompt("podaj promien"));
  } while (number <= 0);
  return number;
};
let message = "";

function calcArea(radius) {
  message += `Radius: ${Math.sqrt(radius) * Math.PI} `;
}

function calcCircut(radius) {
  message += `\nCircut: ${Math.PI * radius * 2}`;
}

const newDiv = document.createElement("div");
newDiv.id = "kolo";

const radius = getRadius();
calcArea(radius);
calcCircut(radius);
newDiv.innerText = message;

document.body.appendChild(newDiv);
