// obiekt to struktura danych skladajaca sie z par kluczy i wartosci
const objekt = {
  klucz: "wartosc",
  klucz2: 15 - 6, //wartoscia moze byc dowolna rzecz zwracajaca dane
  klucz3: [1, 2, 3],
  klucz4: (value) => value - 9,
  jakasFunkcja(text) {
    // mozemy tez przetrzymywac w niej funckcje
    console.log(`xd ${text}`);
  },
  jakasFunkcja2: function (text) {
    console.log(text);
  },
  //kolejnosc nie ma znaczenia bo i tak zostanie ulozona w kolejnosci alfabetycznej
};

objekt.jakasFunkcja("xd"); // do wlasciwosci obiektow odnosimy sie przez kropke
objekt["klucz"]; // lub poprzez wrzucenie stringa do []

//Obiekty można stworzyć na dwa sposoby:
//1 bez konstruktora (przydatne jak chcemy szybko stworzyć jeden obiekt i nie tworzyć  podobnych)
const adam = {
  imie: "Adam",
  wiek: 12,
};

//2 z konstruktorem
function Czlowiek(imie, wiek) {
  //konstruktor nazywamy z duzej litery
  this.imie = imie; // tutaj przypisujemy wysylany argument do zmiennej w konstruktorze
  this.wiek = wiek; // słówko this nie jako tworzy nowa zmienna do ktorej nastepnie przypisujemy argument
}

const beata = new Czlowiek("Beata", 12);
const krystian = new Czlowiek("Krystian"); // gdy nie wypełnimy wszytkich argumentów to obiekt i tak powstanie
//a puste argumenty przyjmia pustą wartość

// this wskasuje na obiekt w ktorym je wywolamy
const thisObjekt = {
  numner: 15,
  number2: this.numner - 1, // zadziala tak samo jakbysmy napisali thisObjekt.numer
  objekt: this, // w ten sposob zwroci caly objekt
};

//skrocony zapis
//jesli nazwa zmiennej jest taka sama jak nazwa wartosci to mozemy zastosowac skrocony zapis
const names = "Szama";
const speed = 1000;

const dog = {
  names,
  speed,
  showText() {
    return "Lubię walczyć ze złem";
  },
};

//POBIERANIE - aby dostac sie do parametrow danego obiektu nalezy go wywolac i dodac kropke
beata.imie;
beata["imie"]; //alternatywny sposob
beata[nazwa()]; // dowonna ekspresje mozemu tu wrzucic
beata.nieistnieje; // jak odwolamy sie do nieistniejacej wartosci to dostaniemy undefined

const nazwa = () => "imie";
//DODAWANIE
beata.nowyKlucz = "to jest nowa wartosc"; // mozemy dodawac do obiektu nowe pary, ale nie mozemy dodac nic bez wartosci
beata.imie = "beti"; // mozemy tez podmieniac wartosci
//USUWANIE
//jesli chcemy usunac jakis klucz i waetosc z obiektu to robimy to przez delete.
delete beata.imie;

//tworzenie metod w obiektach - implementujemu je w ciele obiektu/konstruktrze
//w przypadku 1 sposobu
const kuba = {
  imie: "Kuba",
  wiek: 15,
  przedstawSie() {
    // krótsza forma
    return `mam na imie ${this.imie}`; // moze cos zwracac
  },
  podajWiek: function () {
    //dłuzsza forma
    console.log(`mam ${wiek} lat`); // ale nie musi
  },
};

kuba.przedstawSie();

//w przypadku 2 sposobu
function Pies(imie, rasa) {
  this.imie = imie;
  this.rasa = rasa;
  (this.przedstawSie = function () {
    return `mam na imie ${imie} i jestem ${rasa}`;
  }),
    (this.zaszczekaj = function (szczek) {
      // oczywiscie mozna tworzyc metody z argumentami i nic nie zwracajace
      console.log(`${imie} szczeka ${szczek}`);
    });
}

const azor = new Pies("azor", "mieszaniec");
azor.zaszczekaj("how how");
azor["zaszczekaj"]("how how");

// duplikowanie obiektu
//mamy tablicę która chcemy posortować
const tab = [4, 10, 2, 11, 1.1, 3]; // tabela to tak na prawde obiekt

const sortNumbers = function (arr) {
  return arr.sort((a, b) => a - b); // funkcja ta pobierze nam tabele, posortue i przyisze do zmiennej
}; // z tym ze tak na prawde funkcja ta nie stworzy nam nowej tabeli a dopiszse tylko referenche starej

const tabSorted = sortNumbers(tab);
console.log(tabSorted); //[1.1, 2, 3, 4, 10, 11]
console.log(tab); //[1.1, 2, 3, 4, 10, 11]

// https://kursjs.pl/kurs/obiekty/obiekty-duplikowanie

//Destrukturyzacja
const objectDoDestrukturyzacji = { a: 1, b: "BOB", c: { d: 14, e: 15 } };

const { a, b } = objectDoDestrukturyzacji; // aby zdestrukturyzowac objekt robiimy {} i podajemy dokladne nazwy kluczy ktore on ma
// w tedy powstana nowe zmienne (a i b) z dopisanymi do nich wartosiami. nie musi byc po kolei
const { a: pierwsza } = objectDoDestrukturyzacji; // jesli chcemy jakies elementy pominac to po prostu ich nie piszemy. a jesli chcemy
//zeby zmienna miala inna nazwe niz klucz to piszemy po : nowa nazwe
const { b: druga = "dylan" } = objectDoDestrukturyzacji; // podobnie jak w tablicah mozemy przypisac wartosc domyslna

let aa = 10; // zalozmy ze chcemy dopisac zdestrukturyzana zmienna do istniejacej. robimy to za pomoca takiego triku
({ a: aa } = objectDoDestrukturyzacji);

const {
  c: { d },
} = objectDoDestrukturyzacji; // aby wyciagnac zmienna ktora jest wewnatrz obiektu ktory jest w obiekcie to robimy tak

function fukcjaDestukturyzacja({ a, b, c }) {
  // jesli mamy funkcje ktora jako parametr przyjmie objekt to mozemy go od razu
  console.log(c); //zdestrukturyzowac i wykorzystac te zmienne. WAZNE: musimy znac dokladne klucze
  return a + b;
}

fukcjaDestukturyzacja(objectDoDestrukturyzacji);
