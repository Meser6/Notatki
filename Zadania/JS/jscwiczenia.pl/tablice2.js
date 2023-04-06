const createNewDiv = (id) => {
  const newDiv = document.createElement("div");
  newDiv.id = id;
  return newDiv;
};

const addDivToDOM = (div) => {
  document.body.appendChild(div);
};

//Sprawdź czy definicja osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"] to tablica, jeśli tak wyświetl na
//stronie tekst: "osoby to tablica" jeśli nie: "osoby to nie tablica".
const osoby = [
  "Jan Nowak",
  "Kazimierz Zyga",
  "Stefan Koc",
  "Ewa Mocek",
  "Mariusz Abramski",
];

const divZad1 = createNewDiv("zad1");

Array.isArray(osoby)
  ? (divZad1.innerText = `osoby to tablica`)
  : (divZad1.innerText = `osoby to nie tablica`);

addDivToDOM(divZad1);
console.log("-----------------");
//Wykorzystaj podaną tablicę osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"] Odwróć tablicę, pierwszy
//element ma być ostatnim, itd.
console.table(osoby.reverse());
console.log("-----------------");
//Wykorzystaj podaną tablicę osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"]. Wyświetl jej elementy w
//jedenj lini rozdzielone przecinakmi. Poniżej wyświetl jej elementy w kolejnych akapitach.
let oneLineMessage = "";
let multiLineMessage = "";
for (const x of osoby) {
  oneLineMessage += `${x}, `;
}
for (const x of osoby) {
  multiLineMessage += `${x}
`;
}

oneLineMessage = oneLineMessage.slice(0, oneLineMessage.length - 2);
console.log(oneLineMessage);
console.log(multiLineMessage);
console.log("-----------------");
//Na podstawie danej tablicy osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"]. utwórz nową tablicę
//osobyImiona, która będzie zawierała tylko imiona osób z tablicy osoby.
const osobyImiona = [];

for (const x of osoby) {
  osobyImiona.push(x.split(" ")[0]);
}

console.table(osobyImiona);
console.log("-----------------");
//a) Wykorzystaj podaną tablicę osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"], Wyświetl zawartość
//tablicy w konsoli, ale z powodu RODO nie chcesz wyświetlać nazwisk i imion osób, tylko zamiast nich tekst "aaa bbb".
//b) Masz dane: samochody=["Fiat","Skoda","Volvo","Mercedes","Kia","Opel","Citroen"], wyświetl je w konsoli, ale zamiast elementów 2,3
//wyświetl słowo "tajne".
//a
osoby.fill("aaa bbb");
console.table(osoby);

//b
const samochody = [
  "Fiat",
  "Skoda",
  "Volvo",
  "Mercedes",
  "Kia",
  "Opel",
  "Citroen",
];
samochody.fill("tajne", 2, 4);
console.table(samochody);
console.log("-----------------");
//Wykorzystaj podaną tablicę osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"]. Wytnij fragment tablicy,
//który będzie zawierał dwa pierwsze elementy. Wyświetl wycięte elementy. Wyświetl tablicę po operacji wycinania.
const newOsoby = [
  "Jan Nowak",
  "Kazimierz Zyga",
  "Stefan Koc",
  "Ewa Mocek",
  "Mariusz Abramski",
];

console.log(newOsoby.shift());
console.log(newOsoby.shift());
console.table(newOsoby);
console.log("-----------------");
//Wykorzystaj podaną tablicę osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"]. Usuń z danych osobę:
//"Ewa Mocek", dodaj 2 osoby: "Maria Kapik","Elżbieta Konf". W konsoli wyświetl usuniety element i tablicę po wprowadzeniu zmian.
console.log(newOsoby.splice(3, 1, "Maria Kapik", "Elżbieta Konf"));
console.table(newOsoby);

console.log("-----------------");
//Podany tekst: "JavaScript jest językiem programowania od zawsze związanym z tworzeniem aplikacji WWW." podziel na wyrazy, każdy wyraz
//wyświetl jako osobny element.
let message2 =
  "JavaScript jest językiem programowania od zawsze związanym z tworzeniem aplikacji WWW.";
message2 = message2.slice(0, message2.length - 1);
const messageWordArray = message2.split(" ");

console.table(messageWordArray);
console.log("-----------------");
//Utwórz 3 akapity z tekstem. Odczytaj drugi z akapitów odwołując się do niego jak do tablicy.
//TODO
console.log("-----------------");
//Wykorzystaj podaną tablicę osoby=["Jan Nowak","Kazimierz Zyga","Stefan Koc","Ewa Mocek","Mariusz Abramski"]. Nazwiska osób z tablicy,
//wyświetl jako nagłówki 3 stopnia, które będą posortowane alfabetycznie.
const newOsoby2 = [
  "Jan Nowak",
  "Kazimierz Zyga",
  "Stefan Koc",
  "Ewa Mocek",
  "Mariusz Abramski",
];

const surnames = [];

for (const x of newOsoby2) {
  const splitData = x.split(" ");
  surnames.push(splitData[1]);
}
surnames.sort();

const newDivH3 = createNewDiv("h3");
let htmlToSend = "";
for (const x of surnames) {
  htmlToSend += `<h3> ${x} </h3>`;
}
newDivH3.innerHTML = htmlToSend;
addDivToDOM(newDivH3);

// lepszy sposob
body.innerHTML = osoby
  .map((osoba) => {
    return `<h3>${osoba.substr(osoba.indexOf(" ") + 1)}</h3>`;
  })
  .sort()
  .join(" ");
