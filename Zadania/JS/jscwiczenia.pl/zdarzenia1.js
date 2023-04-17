"use strict";

//Napisz kod, który po naciśnięciu przycisku z podpisem Powitaj!. wyświetli tekst - nagłówek 1 stopnia - "Witaj świecie!" a sam przycisk zniknie.
const button = document.createElement("button");
button.innerText = "Powitaj!";
button.addEventListener("click", () => {
  document.body.innerHTML = "<h1>Witaj świecie!</h1>";
});
document.body.appendChild(button);
console.log("------------");
//Napisz kod, wstawi suwak o zakresie 0 do 100 z id="suwak" wartość domyślna 0. Pod suwakiem w div id="liczba" ma
//się wyświetlać aktualnie ustawiona wartość.
const suwak = document.createElement("input");
suwak.type = "range";
suwak.value = 0;
suwak.min = 0;
suwak.max = 100;
suwak.id = "suwak";

const liczba = document.createElement("div");
liczba.id = "liczba";

suwak.addEventListener("input", () => {
  liczba.innerText = suwak.value;
});

document.body.appendChild(suwak);
document.body.appendChild(liczba);

console.log("------------");
