/// <reference types="Cypress" /> 

require('cypress-xpath') // Cuando se utilice el xpath como selector
require('cypress-plugin-tab') // Cuando se utilice la función .tab para saltar de campo

describe("Test de buscadores", () => {

    beforeEach("Carga de página", () => {
        cy.visit("https://planet-salud.com")
        cy.get('.cp-close').click()


    });

    it("Buscador de Home", () => {
        cy.get('#input_search').type("Hierro")
        cy.get('#btn_search').click()
    });

    it("Buscador de Seccundaria", () => {
        cy.visit("https://planet-salud.com/suplementacion/")
        cy.get('#input_search').type("Champú")
        cy.get('#btn_search').click()
    });


});// Cierre de describe

