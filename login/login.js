import LoginPage from './login.page';
const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('i open login page', () =>{
    LoginPage.visit()
})

When('i submit login', () => {
    LoginPage.fillUserName('username')
    LoginPage.fillPassword('password')
    LoginPage.signIn()
})

When('i submit invalid account to login', () => {
    LoginPage.fillUserName('hshdhas')
    LoginPage.fillPassword('hasfhajf')
    LoginPage.signIn()
})

Then('i should see homepage', () => {
    cy.get('a.brand').should('have.text', 'Zero Bank')
})

Then('i should can not login', () => {
    cy.get('.alert.alert-error').should('contain.text', ' Login and/or password are wrong.')
})