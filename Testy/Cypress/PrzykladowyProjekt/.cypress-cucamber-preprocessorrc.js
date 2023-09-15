// powinno byc z rozszerzeniem JSON! i byc w sym samym folderze co cypress.config.js

const toMaBycJSON = {
  //kazdy test napisany w pliku feachure musi miec zdefiniowane stepy. cucamber preproccessor bedzie szukal w plukach ktore sa zdefiniowane ponizej
  //beda one odpalane w tej kolejnosci a wiec jak znajdzie w pliku o indexie 0 to go wezmie i nie bedzie szukal dalej
  //to samo sie tyczy hookow. najpierw zostana odpalone hooki z [0], potem z [1] etc
  //after oczywiscie odwrotnie tj [1], [0]
  stepDefinitions: [
    "cypress/support/stepDefinitions/globalSteps.spec.js", //plik z globalnymi definicjami stepow
    "cypress/support/stepDefinitions/**/[filepath].spec.js", //filePath bedzie zamieniane na path do pliku feature. sprawia to ze jesli mamy plik feature w e2e/testy1/test.feature to
    //definicje stepow musimy miec w stepDefinitions.testy1/test.spec.js
  ],
  //tutaj rowniez ustawiamy wlasciwosci reportera
  html: {
    enabled: true,
    output: "cypress/report/report.html",
  }, //
};
