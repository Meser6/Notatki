const szablonTekstu = () =>
  "JavaScript (w skrócie JS) – język został opracowany przez firmę Netscape w połowie lat 90. Jego twórcę jest Brendan Eich.";

const createNewDiv = (id) => {
  const newDiv = document.createElement("div");
  newDiv.id = id;
  return newDiv;
};

const addDivToDOM = (div) => {
  document.body.appendChild(div);
};

//Tekst wypisz do div-a id=informacja. Pod tekstem Do div-a o id=dane wypisz długość tekstu i słowo znaków np. 120 znaków.
const newDiv1 = createNewDiv("informacja1");
newDiv1.innerText = szablonTekstu();
newDiv1.innerText += `\n${szablonTekstu().length} znaków`;
addDivToDOM(newDiv1);
console.log("---------------------");
//Tekst wypisz do div-a id=informacja wypisz z podanego tekstu 2 znaki począwszy od 22 znaku tekstu.
const newDiv2 = createNewDiv("informacja2");
newDiv2.innerText = szablonTekstu().substr(22, 2);
addDivToDOM(newDiv2);
console.log("---------------------");
//Tekst wypisz do div-a id=informacja. do div-a id=dane wypisz fragment tekstu do 42 do 72 znaku.
const newDiv3 = createNewDiv("informacja3");
newDiv3.innerText = szablonTekstu().slice(42, 72);
addDivToDOM(newDiv3);
console.log("---------------------");
//Tekst wypisz do div-a id=informacja. do div-a id=dane wypisz tekst począwszy od 42 znaku.
const newDiv4 = createNewDiv("informacja4");
newDiv4.innerText = szablonTekstu().substring(42);
addDivToDOM(newDiv4);
console.log("---------------------");
//Słowo Netscape zamień na Netscape Communications Corporation. Ponownie wypisz tekst, tym razem do div-a id=dane.
const newDiv5 = createNewDiv("dane");
newDiv5.innerText = szablonTekstu().replace(
  "Netscape",
  "Netscape Communications Corporation"
);
addDivToDOM(newDiv5);
console.log("---------------------");
//Wykorzystaj metodę .split i do konsoli wypisz pojedyńcze wyrazy - przyjmij, że wyrazy rozdziela spacja.
console.table(szablonTekstu().split(" "));
console.log("---------------------");
//Tekst wypisz do div-a id=informacja. Ponownie wypisz tekst, tym razem do div-a id=dane, ale ma się on składać tylko z dużych liter.
const newDiv6 = createNewDiv("dane2");
newDiv6.innerText = szablonTekstu().toUpperCase();
addDivToDOM(newDiv6);
console.log("---------------------");
//Tekst wypisz do div-a id=informacja. Ponownie wypisz tekst, tym razem do div-a id=dane, ale ma się on składać tylko z małych liter.
const newDiv7 = createNewDiv("dane3");
newDiv7.innerText = szablonTekstu().toLowerCase();
addDivToDOM(newDiv7);
console.log("---------------------");
//Tekst wypisz do div-a id=informacja. Poniżej do div-a id=dane, wypisz: słowo Netscape zaczyna się od ... znaku.
const newDiv8 = createNewDiv("dane4");
newDiv8.innerText = `słowo Netscape zaczyna się od ${szablonTekstu().indexOf(
  "Netscape"
)} znaku`;
addDivToDOM(newDiv8);
console.log("---------------------");
//Tekst wypisz do div-a id=informacja. Poniżej do div-a id=dane, wypisz: ostatnia spacja to znak nr.: .... Odczytaj pozycję ostatniej spacji.
const newDiv9 = createNewDiv("dane4");
newDiv9.innerText = `ostatnia spacja to znak nr.:${szablonTekstu().lastIndexOf(
  " "
)}.`;
addDivToDOM(newDiv9);
