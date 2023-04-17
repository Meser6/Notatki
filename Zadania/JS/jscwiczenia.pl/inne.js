"use strict";

//Napisz kod, który wyświetli trzy przyciski, podpisane jeden, dwa, trzy. Kliknięcie na każdy z nich ma wyświetlić napis, kliknąłeś na przycisk.
function createButton(text) {
  const element = document.createElement("button");
  element.innerText = text;
  element.addEventListener("click", function () {
    const text = document.createElement("div");
    text.innerHTML = "<br> kliknąłeś na przycisk";
    document.body.appendChild(text);
  });
  return element;
}
for (let i = 1; i < 4; i++) {
  document.body.appendChild(createButton(i));
}
console.log("------------");
//Utwórz 3 elementy, przycisk z id="przycisk", div-a z id="element_div" i span z id="element_span". Kliknięcie na którykolwiek z nich
//ma wypisywać identyfikator klikniętego elementu do utworzonego div-a z id="opis". Użyj this.
function createElement(elementType, id) {
  const element = document.createElement(elementType);
  element.id = id;
  element.addEventListener("click", function () {
    const text = document.createElement("div");
    text.innerHTML = this.id;
    document.body.appendChild(text);
  });
  return element;
}

document.body.appendChild(createElement("button", "przycisk"));
document.body.appendChild(createElement("div", "element_div"));
document.body.appendChild(createElement("span", "element_span"));
