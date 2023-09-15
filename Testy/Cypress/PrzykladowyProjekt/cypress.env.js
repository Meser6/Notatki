//POWINNO BYC JSON

//W pliku tym mozemy przechowywac rozne zestawy danych dla roznych srodowisk
//lub dane wrazliwe. wowczas wrzucamy ten plik do git ignora i mamy chronione hasla jak w secrets
//fajnie jest wowczas wrzucic tez cypress.enc.exapmple.json jako schemat jak powinen ten plik wygladac

const toPowinenBycJSON = {
  login: "bob",
  haslo: "maslo",
  zestaw: { imie: "kuba", nazwisko: "kaczmarczyk" },
};

//Aby dostac sie do takich envow nalezy uzyc odpowiedniej wlasciwosci
Cypress.env("nazwa wlasciwosci");
Cypress.env("zestaw").imie;

//aby zapisac cos do zmiennej to po prostu podajemy to w drugim parametrze. pierwszy to nazwa
Cypress.env("nazwa_zmiennej", "wartosc");
