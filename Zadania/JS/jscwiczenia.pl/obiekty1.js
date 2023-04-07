//Zdefiniuj obiekt o nazwie oferta, z następującymi właściwościami: marka : "Kia", model : "Carens", cena : 60000 i metodą o
//nazwie koszt100km(), która zwraca wartość 37 zł.
const pb95 = 4;
const oferta = {
  marka: "Kija",
  model: "carens",
  cena: 6000,
  koszt100km() {
    return 37;
  },
};
console.log("---------------");
//Zdefiniuj dodatkowo właściwość spalanie przypisz jej wartość 8 (8 litrów/100km). "Przed obiektem" zdefiniuj zmienną pb95
//przypisz jej wartość 4 (4 zł./litr). Zmodyfikuj metodę koszt100km() tak by zwracała koszt, przy założenej cenie paliwa i
//spalaniu danego samochodu.
oferta.spalanie = 8;
oferta.koszt100km = function () {
  return this.spalanie * pb95;
};
console.log(oferta.koszt100km());
console.log("---------------");
//Do obiektu dodaj metodę wiekSamochodu(), która zwraca jego wiek na podstawie podanego rocznika. Obiekt wyświetl w konsoli.
oferta.wiekSamochodu = function (rocznik) {
  console.log(new Date().getFullYear() - rocznik);
};
oferta.wiekSamochodu(2000);
console.log("---------------");
//Zmodyfikuj metodę wiekSamochodu(), tak by zwracała odpowiednio 1 rok, 2 lata, 3 lata, 4 lata, 5 lat, 6 lat .... Sprawdź działania
//dla kilku możliwych roczników.
oferta.wiekSamochodu = function (rocznik) {
  const wiek = new Date().getFullYear() - rocznik;
  if (wiek === 1) {
    console.log("1 rok");
  } else if (wiek > 1 && wiek < 5) {
    console.log(`${wiek} lata`);
  } else {
    console.log(`${wiek} lat`);
  }
};

oferta.wiekSamochodu(2022);
oferta.wiekSamochodu(2019);
oferta.wiekSamochodu(2000);
console.log("---------------");
//Zdefiniuj konstruktor o nazwie Oferta. //Zdefiniuj za jego pomocą obiekt o nazwie oferta1. Wyświetl jego zawartość w konsoli.
function Oferta2(marka, model, cena) {
  this.marka = marka;
  this.model = model;
  this.cena = cena;
  this.koszt100km = function () {
    return 37;
  };
}
const ofertaWywolanie = new Oferta2("opel", "astra", 12);
console.log(ofertaWywolanie);
console.log(ofertaWywolanie.koszt100km());
console.log("---------------");
//Zawartość obiektu wypisz do div-a od id="spisofert". Wyróznij: markę, model, cenę.
//TODO
console.log("---------------");
//Obiekty klasy Oferta, uczyń częściami składowymi obiektu Komis. Wypisz obiekt Komis do konsoli.
const Komis = {
  oferta1: new Oferta2("opel", "astra", 12),
  oferta2: new Oferta2("dacia", "duster", 10),
  oferta3: new Oferta2("bmw", "jakis", 120),
};

for (const x of Object.values(Komis)) {
  console.log(x);
}
console.log("---------------");
//Wypisz do konsoli klucze obiektu Komis. Wcześiej //zdefiniuj funkcje wypiszOferte(idOferty), i to ją w pętli wykorzystaj do wypisywania
//kluczy.
for (const x of Object.keys(Komis)) {
  wypiszOferte(x);
}

function wypiszOferte(oferta) {
  console.log(Komis[oferta]);
}
console.log("---------------");
//Zdefiniuj funkcję wypiszOferte(idOferty), ma ona w miejscu wywołania zwracać kod HTML ofertę.
//TODO
console.log("---------------");
//Zdefiniuj funkcję wypiszOferte(idOferty), ma ona w miejscu wywołania zwracać kod HTML ofertę. Funkcja ma być wywołana w pętli przez
//funkcję wypiszWszystkieOferty()
//TODO.
console.log("---------------");
//Zdefiniuj funkcję usunOferte(idOferty), ma ona usuwać obiekt - ofertę - z podanym identyfikatorem.
//Zdefiniuj zewnętrzny arkusz styli dla strony.

function usunOferte(idOferty) {
  delete Komis[idOferty];
}
console.log("---------------");
//Dodaj nową ofertę: Suzuki, Vitara, 80500 zł,9 l./100km.,2019 rok
Komis.oferta4 = new Oferta2("suzuki", "vitara", 80500);
console.log("---------------");
//Zdefiniuj funkcję dodajOferte(marka, model, przebieg, spalanie, rocznik). Klucz - identyfikator ogłoszenia - ma być definiowany ręcznie.
function dodajOferte(nazwaOferty, marka, model, rok) {
  Komis[nazwaOferty] = new Oferta2(marka, model, rok);
}

dodajOferte("oferta5", "volvo", "e32", 15);
console.log(Komis);
console.log("---------------");
//Zdefiniuj funkcję dodajOferte(marka, model, przebieg, spalanie, rocznik). Klucz - identyfikator ogłoszenia - ma być tworzony automatycznie,
//na podstawie kluczy już istniejących.

function dodajOferteAutomatyczne(marka, model, rok) {
  Komis[`oferta${Object.keys(Komis).length + 1}`] = new Oferta2(
    marka,
    model,
    rok
  );
}
dodajOferteAutomatyczne("bob", "bud", 555);
console.log(Komis);
console.log("---------------");
//Zdefiniuj funkcję zmienOferte(idOferty, marka, model, cena, spalanie, rocznik). Wypisz w konsoli ogłosznie po zmianie danych.
function zmienOferte(nazwaOferty, marka, model, rok) {
  Komis[nazwaOferty].marka = marka;
  Komis[nazwaOferty].model = model;
  Komis[nazwaOferty].rok = rok;
}
zmienOferte("oferta6", "dacia", "logan", 4545);
console.log(Komis);
console.log("---------------");
//W każdym ogłoszeniu utwórz aktywny element - słowo - Usuń. Kliknięcie na nie ma powodować usunięcie oferty.
//TODO
console.log("---------------");
//W każdym ogłoszeniu utwórz aktywny element - słowo - Edycja. Kliknięcie na nie ma powodować przepisanie zawartości oferty do formularza.
//Po zmianie informacji i naciśnięciu przycisku Zmień, dane mają ulec zmianie - nastąpić ma odświeżenie treści.
//TODO
console.log("---------------");
//Do formularza dodaj przycisk Dodaj, naciśnięcie przycisku ma dodać ofertę na podstawie danych z formularza. Nastąpić ma także odświeżenie
//treści strony.
//TODO
