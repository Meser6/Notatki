// przyklad testow z wykorzystaniem:
// Supertest - wysylanie zapytan
// mocha - obsluga testow
// chai - obsluga assercji
// mochawsome - generowanie raportow

const supertest = require("supertest"); // import zmiennej do wyslania zapytania
const request = supertest("https://catfact.ninja/");

import { faker } from "@faker-js/faker";

// aby podmieniac url za pomoca terminala mozna uzyc cross-env
// i wpisac w envy url - cross-env URL=dev.pl
// request(process.env.URL)

import { assert, expect } from "chai"; // import assercji

before(() => {
  // before, beforeEach, after, afterEach - hooki ktore cos wykonuja przed/po testach
  console.log("nowy test");
});

describe("nazwa bloku", () => {
  // testy mozemy grupowac w bloki
  it("typy assercji w chai", () => {
    // test oznaczamy it.
    return request.get("/facts").then((resp) => {
      // assercje mozemy napisac na 3 sposoby
      expect(resp).to.be.eq(2);
      resp.should.have.property("flavors");
      assert.typeOf(resp, "string");

      resp.arr.map((e) => {
        expect(e).to.eq(2);
      });
    });
  });

  it.skip("skip", () => {}); // zeskipuje test
  it.only("only", () => {
    console.log(faker);
  }); // jesli jest chocby jeden plik z only to odpali tylko te ktore je maja

  describe("sposoby wyslania requestu", () => {
    it("pierwszy sposob", (done) => {
      // parametr done zakonczy test, przez co nie trzeba korzysac z obslugi asynchronicznej
      request.get("/facts").and((err, resp) => {
        expect(resp.body).to.not.be.empty;
        done();
      });
    });
    it("drugi sposob", () => {
      return request.get("/facts").then((resp) => {
        expect(resp.body).to.not.be.empty;
      });
    });
    it("trzeci sposob", async () => {
      //najbardziej polecany sposob
      const resp = await request.get("/facts");
      expect(resp.body).to.deep.equal("bob");
    });
  });
  describe("metody", () => {
    //metody wywyslamy za pomoca odpowiednich funkcji jak .get .post .put .delete
    it("post", async () => {
      const resp = await request
        .post("/facts")
        .set("Authorization", "TOKEN") // aby ustawic header korzystamy z set - nazwa headera, wartosc
        .send({ id: 5 }); // body wysylamy za pomoca send
    });
  });
});

// konfiguracje mocha mozemy wpisac w mocha.config.js
// wowczas testy trzeba wywolac z flaga --config mocha.config.js
