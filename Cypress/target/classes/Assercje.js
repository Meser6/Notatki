//Weryfikacja tekstu
cy.get("#id").should("contain", "tekst"); // czy element zawiera teskt
cy.get("#id").then(id => {
    expect(id).to.contain("tekst")
})

// dodając .not robimy zaprzeczenei np.
//Sprawdzenie czy nie zawiera tekstu
cy.get("#id").should("not.contain", "tekstTekst") //czy nie zawiera tekstu
cy.get("#id").then(id => {
    expect(id).not.to.contain("tekstTekst")
})

//Wryfikacja czy znacznik posiada klase
cy.get("#id").should("have.class", "class") // czy posaida klase
cy.get("#id").then(id => {
    expect(id).to.have.class("class")
})

//Czy element jest widoczny
cy.get("#id").should("be.visible"); // czy jest widoczny w DOM
cy.get("#id").then(id => {
    expect(id).to.be.visible()
})

//Weryfikacja ilości pobranych elementów
cy.get("li").should("have.length", 14)
cy.get("li").then(li => {
    expect(li).to.have.length(14)
})

//Weryfikacja wartość css danego elementu
cy.get("#id").should("have.css", "background", "rgb(60, 118, 61)")  // podaje w RGB
cy.get("#id").then(id => {
    expect(id).to.have.css("background", "rgb(60, 118, 61)")
})

