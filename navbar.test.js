/// <reference types = "cypress" />

describe('navbar test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('should display online banking content', () =>{
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('have.text','Online Banking')
    })

    it('should display feedback content', () =>{
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.get('h3').should('contain.text', 'Feedback')
    })
    
    it('should home content', () =>{
        cy.contains('Zero Bank').click()
        cy.get('strong').should('not.have.text', 'bank abc')
    })
})