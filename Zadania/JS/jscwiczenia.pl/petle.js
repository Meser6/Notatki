//Napisz kod JS który w div-ie z id=wynik wyświetli liczby od 1 do 100 rozdzielone przecinkami.

const divWynik = document.createElement("div");
divWynik.id = "wynik";

let textToSend = "";

for (let i = 1; i <= 100; i++) {
  textToSend += `${i}, `;
}

divWynik.innerText = textToSend;
document.body.appendChild(divWynik);
console.log("-------------------");
//Skorzystaj z operatora += by uprościć kod. Napisz kod JS który w div-ie z id=wynik wyświetli liczby
//od 1 do 100 rozdzielone przecinkami.
const info = "zrobione wyzej";
console.log("-------------------");
//Napisz kod HTML, który wyświetli tabelę z dwoma kolumnami. W pierwszej kolumnie mają być liczby
//od 0 do 9. W drugiej kolumnie mają się znajdować drugie potęgi liczb z pierwszej kolumny.
//Napisz, kod CSS, który wyświetli krawędzie.
//TODO
console.log("-------------------");
//Zapoznaj się z przykładem przedstawiającym działanie pętli do while i do. Choć podobne różnie je
//kluczowy szczegół.
const perrmit = false;

do {
  console.log("ha, zawsze sie pojawie, nawet jak nie powienem");
} while (perrmit);

while (perrmit) {
  console.log("pojawie sie tylko w tedy gdy mam permit");
}
