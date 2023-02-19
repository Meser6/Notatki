// Custom Commands to metody które nie jako dopisujemy do cypressa i z których mogą korzystać wszystkie testy w projekcie
// Dodajemy je w support > commands.js

Cypress.Commands.add("nowaMetoda", (text) => { // przykladowe dodanie komendy
    cy.get("#id").type(text);
})

// teraz mozemy ja wywołać w kazdym tescie: cy.nowaMetoda("xd");

import 'cypress-file-upload' // mozemy w niej tez zawrzec importy do rozszerzeń
//import MainPageModel from "../support/object-models/mainPageModel" // ale do PO juz NIE możemy
