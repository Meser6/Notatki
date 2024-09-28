const http = require("k6/http");
const sleep = require("k6").sleep;

//! --------- Load testy ---------
//sprawdzaja jak zachowuje sie strona przy normalnym, spodziewanym obciazeniu
//     ________40
//    /        \    wykres obciazenia tworzy rąb gdzie przez pierwsze 10 % dazymy do tatgetu
//   /          \   potem utrzymujemy go a na ostatanich 10% zmniejszamy do 0
//                  testy powinny trwac minimum 30 minut. max powinien byc targetem

const optionsLoad = {
  stages: [
    { duration: "5m", target: 40 },
    { duration: "30m", target: 40 },
    { duration: "5m", target: 0 },
  ],
};

//zestaw testowy powinien byc dosc rozlegly i przedstawiac typowe zachowania
function Load() {
  http.get("https://test.k6.io");
  sleep(1);
  http.post("https://test.k6.io");
  sleep(1);
}

//! --------- Stress testy ---------
// sprawdzaja jak zachowuje sie aplikacja przy obciazeniu wiekszym (20-100%) niz przewidziane.
//     ________
//    /        \_40    wykres obciazenia analogiczny do load testow z tym, ze max jest wiekszy niz target
//   /          \      testy powinny trwac rownie dlugo. nie powinno byc tez naglych skokow
const optionsStress = {
  stages: [
    { duration: "5m", target: 40 },
    { duration: "30m", target: 40 },
    { duration: "5m", target: 0 },
  ],
};
//zestaw testowy taki sam jak w load testach

//! --------- Spike testy ---------
// Sprawdzaja jak aplikacja zachowuje sie przy naglym i krotkotrwalym skoku obciazenia
// moga spowodowac wywalenie sie aplikacji wiec ostronie z nimi
//         /\
//        /  \      wykres obciazenia wyglada jak spike. max powinien byc 15-20x wiekszy niz target
//       /    \     a czas wykonywania dosc krotki. odpalane powinny byc sporadycznie
const optionsSpike = {
  stages: [
    { duration: "2m", target: 800 },
    { duration: "2m", target: 0 },
  ],
};

//zestaw testowy powinien byc skapy, z reguly jest to odwiedzenie strony logowania/glowej
function Spike() {
  http.get("https://test.k6.io");
  sleep(1);
}

//! --------- Breakpoint testy ---------
// Sprawdzaja jakie jest maksymalny poziom obciazenia jaki aplikacja jest w stanie wytrzymac
// Nie powinny byc wykonywane na produkcji oraz gdy serwer jest na chmurze poniewaz dzieki skalowalnosci
// wytrzyma ona kazde obciazenie i policzy sobie za to duzo pieniazkow
//       /
//     /     wykres obiciazenia poiwnien byc nieskonczona, niezbyt stroma linia
//   /       testy te powinny byc monitorowane recznie i zatrzymane gdy aplikacja zacznie sie wywalac
const optionsBreakpoint = {
  stages: [
    { duration: "2h", target: 10000 }, // wartosci powinny byc nierealne ale tak bovrane zeby obciazenie za szybko nie roslo
  ],
};
//zestaw testowy taki sam jak w load testach

//! --------- Soak testy ---------
// Sprawdzaja jak aplikacja zachowuje sie przy dlugotrwalym obciazeniu, jednak z obciazeniem nie przekraczajacym zakladanego
// Wykrywaja bledy takie jak zapchanie pamieci.
//       _________________40
//      /                  \ // wykres ja przy load testach z tym ze max jest przez 12-24h a dochodzimy do niego w 5-10 min
//     /                    \

const optionsSoak = {
  stages: [
    { duration: "5m", target: 40 },
    { duration: "24m", target: 40 },
    { duration: "5m", target: 0 },
  ],
};

//zestaw testowy w powinien zawierac wszystko ale z naciskiem na tworzenie nowych danych
