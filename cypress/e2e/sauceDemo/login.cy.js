/// <reference types="cypress" />
import loginPage from '../../support/pages/LoginPage'
import hearderPage from '../../support/pages/componets/header_page'
import footerPage from '../../support/pages/componets/footer_page'
describe('Login to suace demo', () => {

    beforeEach(() => {

        //cy.visit('https://www.saucedemo.com/')

    })

    const login = require('../../fixtures/login.json');

    it('Login with valid credentials', () => {
        cy.goToWebsite()
             

        loginPage.fillUsername(login.valid_name)
        loginPage.fillPassword(login.valid_password)
        loginPage.clickLogin()


        hearderPage.elements.heading_Products().should('have.text', 'Products')
        footerPage.elements.footer().should('have.text', '© 2020 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy')

    })

})