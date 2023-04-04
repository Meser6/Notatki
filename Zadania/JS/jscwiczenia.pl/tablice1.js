//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54.
//Wypisz tablicę w konsoli (jako całość).
const arr = [5, 12, 17, 23, 123, 45, 54];
console.table(arr);
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. Wypisz tablicę do div z id="tablicaDane" za pomocą pętli for.
//Dane rozdziel przecinakami.
const arr2 = [5, 12, 17, 23, 123, 45, 54];

const newDiv2 = document.createElement("div");
newDiv2.id = "tablicaDane";
let dane2 = "";
for (const x of arr2) {
  dane2 += `${x}, `;
}
newDiv2.innerText = dane2;
document.body.appendChild(newDiv2);
console.log("-------------------");
//Jak wyżej ale skorzystaj z właściwości .length. //Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54.
// Wypisz tablicę do div z id="tablicaDane" za pomocą pętli for. Dane rozdziel przecinakami.
const arr3 = [5, 12, 17, 23, 123, 45, 54];

const newDiv3 = document.createElement("div");
newDiv3.id = "tablicaDane2";
let dane3 = "";
for (let i = 0; i < arr3.length; i++) {
  dane3 += `${arr[i]}, `;
}
newDiv3.innerText = dane3;
document.body.appendChild(newDiv3);
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. Wypisz tablicę do div z id="tablica" za pomocą pętli for-of.
const info = "zrobione wyzej";
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. Wypisz tablicę do do konsoli. Dodaj do tablicy 2 liczby 201
//i 1. Ponownie tablicę do konsoli.
const arr4 = [5, 12, 17, 23, 123, 45, 54];
console.table(arr4);
arr4.push(201);
arr4.push(1);
console.table(arr4);
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. Wypisz tablicę do do konsoli. Dodaj do tablicy 2 liczby 33
//i 44. Zrób to w jednej instrukcji. Wypisz do konsoli długość tablicy i zawartość tablicy.
const arr5 = [5, 12, 17, 23, 123, 45, 54];
console.table(arr5);
arr5.push(33, 44);
console.log(`długosc: ${arr5.length}`);
console.table(arr5);
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. Wypisz tablicę do do konsoli. Usuń ostatni element z tablicy.
// Wypisz do konsoli długość tablicy i jej aktualną zawartość.
const arr6 = [5, 12, 17, 23, 123, 45, 54];
console.table(arr6);
arr6.pop();
console.log(`długosc: ${arr6.length}`);
console.table(arr6);
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. Wypisz tablicę do do konsoli. Dodaj na początku tablicy dwie
//liczby 7 i 77. Wypisz do konsoli długość tablicy i jej bieżącą zawartość.
const arr7 = [5, 12, 17, 23, 123, 45, 54];
console.table(arr7);
arr7.unshift(7, 77);
console.log(`długosc: ${arr7.length}`);
console.table(arr7);
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. Wypisz tablicę do do konsoli. Usuń z tablicy pierwszy element.
// Wypisz do konsoli długość tablicy i jej bieżącą zawartość.
const arr8 = [5, 12, 17, 23, 123, 45, 54];
console.table(arr8);
arr8.shift();
console.log(`długosc: ${arr8.length}`);
console.table(arr8);
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 5,12,17,23,123,45,54. Wypisz tablicę do do konsoli. Odwróć zawartość tablicy i
//ponownie ją wyświetl.
arr8.reverse();
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 'Zenek', 'Tomasz', 'Adam', 'Ewa', 'Krzysztof'. Posortuj ją, ponownie ją wyświetl.
const arrName = ["Zenek", "Tomasz", "Adam", "Ewa", "Krzysztof"];
console.log(arrName.sort());
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała liczby: 'Zenek', 'Tomasz', 'Adam', 'Ewa', 'Krzysztof'. Wykorzystaj fętlę for-each i wypisz
//w konsoli wszystkie argumenty funkcji wywołanej w for-each tj. element, indeks elementu, tablicę.
const arrName2 = ["Zenek", "Tomasz", "Adam", "Ewa", "Krzysztof"];
arrName2.forEach((x) => {
  console.log(x);
  console.log(arrName2.indexOf(x));
});
console.log("-------------------");
//Zdefiniuj prostą tablicę, która będzie zawierała imiona: 'Zenek', 'Tomasz', 'Adam', 'Ewa', 'Krzysztof'. Wykorzystaj fętlę for-each wypisz
//w div-ie tabelę, która będzie miała dwie kolumny. Pierwsza będzie zawierała indeks tablicy, druga wartość umieszczoną w tablicy "pod tym
//indeksem".
//TODO
