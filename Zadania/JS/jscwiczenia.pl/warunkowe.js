//Zdefiniuj zmienną nazwij ją liczba. Jeśli będzie dodatnia w div-ie z id="opis"ma się wyświetlić np. tekst "21 - Liczba większa od zera.
//"napisany jako nagłówek 1 stopnia. Jeśli nie ma się pokazać np. tekst: "-3 - Zero lub liczba ujemna.".
const liczba = -21;

const newDiv1 = document.createElement("div");
newDiv1.id = "opis";
if (liczba > 0) {
  newDiv1.innerHTML = `<h1>${liczba} - Liczba większa od zera.</h1>`;
} else {
  newDiv1.innerHTML = `<h1>${liczba} - Zero lub liczba ujemna.</h1>`;
}

document.body.appendChild(newDiv1);
console.log("-------------------");
//Zdefiniuj zmienną nazwij ją liczba2. Jeśli będzie dodatnia w div-ie z id="opis"ma się wyświetlić np. tekst "dodatnia".
//Jeśli nie ma się pokazać np. tekst: "0/ujemna". Wykorzystaj instrukcję warunkową if ze składnią wykorzystującą symbole ? :.
const liczba2 = 15;

const newDiv2 = document.createElement("div");
newDiv2.id = "opis";
newDiv2.innerHTML = liczba2 > 0 ? `dodatnia` : `0/ujemna`;
document.body.appendChild(newDiv2);
console.log("-------------------");
//Zdefiniuj zmienną nazwij ją liczba3. Jeśli będzie dodatnia w div-ie z id="opis"ma się wyświetlić np. tekst "21 - Liczba większa od zera.
//"napisany jako nagłówek 1 stopnia. Dla liczb ujemnych ma się pokazać np. tekst: "-3 - Liczba ujemna.". Dla zera ma się wyświetlać tekst "
//- Zero".. Skorzystaj z instrukcji if - else if.
const liczba3 = 15;

const newDiv3 = document.createElement("div");
newDiv3.id = "opis";
if (typeof liczba3 === "number" && liczba3 !== NaN) {
  if (liczba3 > 0) {
    newDiv3.innerHTML = `<h1>${liczba3} - Liczba większa od zera.</h1>`;
  } else if (liczba3 < 0) {
    newDiv3.innerHTML = `<h1>${liczba3} - Liczba ujemna.</h1>`;
  } else {
    newDiv3.innerHTML = `<h1>Zero.</h1>`;
  }
} else {
  newDiv3.innerHTML = `Błędna liczba`;
}

document.body.appendChild(newDiv3);
console.log("-------------------");
//Napisz kod, który dla zdefiniowanej szkolnej oceny (1,2,3,4,5,6) - zmienna ocena - wypisze jej opis słowny np. dostateczny.
//Informacja ma być wypisana w div-ie id="opisoceny".
const listaOcen = {
  1: "niedostateczny",
  2: "dopuszczajacy",
  3: "dostateczny",
  4: "dobry",
  5: "bardzo dobry",
  6: "celujacy",
};
const mojaOcena = 6;

const newDiv4 = document.createElement("div");
newDiv4.id = "oceny";
newDiv4.innerText = listaOcen[mojaOcena];
document.body.appendChild(newDiv4);
console.log("-------------------");
//Zbadaj wartość logiczną wyrażeń: "",0,null,undefined,"abc"," ",7,-45
const info1 = `"", 0, null, undefind maja wartosc ${false}`;
const info2 = `"abc", " ", 7, -45`;
console.log("-------------------");
//Napisz skrypt, który dla 0, wypisze w konsoli tekst "Zero", dla innych liczb tekst "Liczba różna od zera".

const liczba4 = 0;

if (liczba4 === 0) {
  console.log("Zero");
} else {
  console.log("Liczba różna od zera");
}
console.log("-------------------");
