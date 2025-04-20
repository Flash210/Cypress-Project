
import basePage from '../../support/pages/BasePage'

class LoginPage {


    elements = {
        text_username: () => cy.get('#user-name'),
        text_password: () => cy.get('#password'),
        btn_login: () => cy.get('input[type="submit"]'),
    }

    fillUsername(username) {
        basePage.fillInput(this.elements.text_username(), username)
        //this.elements.text_username().type(username)
    }
    fillPassword(password) {
        basePage.fillInput(this.elements.text_password(), password)
        //this.elements.text_password().type(password)
    }
    clickLogin() {
        basePage.clickOnElement(this.elements.btn_login())
        // this.elements.btn_login().click()
    }



}

export default new LoginPage
