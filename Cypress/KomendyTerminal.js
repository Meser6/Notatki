// ---------- ogólne ----------

npm init // inicjalizacja nowego projektu w Visual Studio

npm install cypress--save-dev//instalacja Cypress'a
npm install --save-dev cypress@9.5.1 // instalacja konkretnej wersji
yarn upgrade cypress@4.11.0 // update do konretnej wersji

npm run XXX // odpalenie skryptu o nazwie XXX z pliku package.json

npm uninstall <package_name>// odinstalowanie

npx cypress open // odpalenie cypresa

// ---------- testy ----------
npx cypress run  // odpalenie wszystkich testów w trybie headless (bez widocznie odpalonej przegladarki)

--spec 'cypess/integrations/test.js' // odpalenie testów z pliku test.js (podac siezke)
--headed // odpalenie ale z wyłączonym headlessem
--browser chrome // odpalenie na danej przeglądarce (chrome, firefox, edge)

//kolejne flagi dodajemy po spacji
npx cypress run --spec 'cypess/integrations/test.js' --headed

//package.json to tu mozna zapisywac nasze komendy i nadawac im nazwe (scripts)
"script1": "npx cypress run --spec 'cypess/integrations/test.js' --headed"

"script2": "npm run script1 --browser chrome" // dopisywanie do jednego skryptu dodatkowych rozszerzen

// mozna tworzyc skrypty z roznymi parametrami tej samej flagi (poprzez znak &)
"script2": "npm run script1 --browser chrome & npm run script1 --browser chrome"
