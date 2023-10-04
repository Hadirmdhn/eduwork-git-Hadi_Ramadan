const URL = 'http://zero.webappsecurity.com/login.html';
const USERNAME ='input[name="user_login"]' ;
const PASSWORD = 'input[name="user_password"]';
const SIGN_IN = '.btn.btn-primary';

class LoginPage{
    static visit(){
        cy.visit(URL)
        cy.get('.page-header').should('be.visible')
    }

    static fillUserName(username){
        cy.get(USERNAME).type(username)
    }

    static fillPassword(password){
        cy.get(PASSWORD).type(password)
    }

    static signIn(signIn){
        cy.get(SIGN_IN).click()
    }
}

export default LoginPage;