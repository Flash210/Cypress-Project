/// <reference types="cypress" />
import loginPage from '../../support/pages/LoginPage'

describe('Login to suace demo', () => {

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com/')
        cy.goToWebsite()

    })

    const login = require('../../fixtures/login.json');

    it('Login with valid credentials', () => {

        loginPage.fillUsername(login.valid_name)
        loginPage.fillPassword(login.valid_password)
        loginPage.clickLogin()

    })

})