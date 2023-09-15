require("@babel/register");

const mochaConfig = {
  baseUrl: process.env.BASE_URL, // base url podmieniany w w skrypcie. dzieki temu mozna odpalic testy dla roznych stron
  someData: "user name", // mozemy tez trzymac w konfigu dane globalne ktore potem bedziemy korszystali w testach
  spec: ["**/tests/**/*.spec.js", "**/tests2/**/*.spec.js"], //pliki w ktorych znajduja sie testy
  timeout: 10000, // maksymalny czas wykonania testu
  slow: 5000, // powyzej tej granicy bedzie podswietlalo testy na czerwono jako wolne. 1/2 tego na zolto
  reporter: "mochawsome", // generator raportow
};

module.exports = mochaConfig;
