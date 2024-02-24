//! Opcje
export const options = {
  vus: 15, // liczba uzytkownikow ktory jednoczesnie beda symulowani
  duration: "15m", // czas trwania testow
  thresholds: {
    // progi ktore maja byc osiagniete w finalnym raporcie. jesli ktorys nie zostanie osiagniety test zfaiiluje
    http_req_duration: ["p(95)<500", "p(90)<400"], // klucz to rodzaj nazwa parametru, a argument to metryka (np max, p95) i zakladana wartosc
    http_req_failed: ["rate<0.01"], // kazdy parametr ma swoj typ ktory moze miec roznie zdefiniowane progi

    "group_duration{group::main page}": ["avg<500"], // mozemy tez ustawic progi dla grupy requestow
  },
};
