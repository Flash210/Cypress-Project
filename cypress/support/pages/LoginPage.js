class LoginPage {


    elements = {
        text_username: () => cy.get('#user-name'),
        text_password: () => cy.get('#password'),
        btn_login: () => cy.get('input[type="submit"]'),
    }

    fillUsername(username) {
        this.elements.text_username().type(username)
    }
    fillPassword(password) {
        this.elements.text_password().type(password)
    }
    clickLogin() {
        this.elements.btn_login().click()
    }



}

export default new LoginPage
