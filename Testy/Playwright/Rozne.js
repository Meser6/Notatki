// ---------- komendy w terminalu ----------
`npm init playwright@latest` // inicjalizacja projektu w playwright
`npx playwright show--report` // odpali ostatni raport
`npx playwright test` // odpalenie wszystkich testów w trybie headless (bez widocznie odpalonej przegladarki) by default odpala na wszystkich projektach zdefiniowanych w konfigu (przegladarkach)
`npx playwright test --project-=chromium` //odpali odpowiedni projekt (przegladarke)
`npx playwright test --headed` // odpalenie ale z wyłączonym headlessem
`npx playwright test exapmple.spec.js` // odpali konkterny plik z testami
`npx playwright test -g "nazwa testu"` // odpali konkretny test
`npx playwright test --ui` // odpali ui mode
`npx playwright test --trace on` // wlaczy tryb trace. w raporcie beda snapshoty z kazdego stepu
`npx playwright test --debug`; // wlaczy w trybie debugu
