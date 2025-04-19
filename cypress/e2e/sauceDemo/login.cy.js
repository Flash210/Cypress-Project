/// <reference types="cypress" />


describe('Login to suace demo', () => {

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com/')
        cy.goToWebsite()
    
    })



    it('Login with valid credentials', () => {

        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")

        cy.get("input[type='submit']").click()

    })

})