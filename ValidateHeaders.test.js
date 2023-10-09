/// <reference types="cypress" />

describe('API Validate', () =>{
    it('Header Validate', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('headers').its('content-type')
            .should('include', 'application/json; charset=utf-8')
    });

    it('Body Validate', () => {
        cy.request('GET','https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
        cy.get('@pokemon').its('body').then((body) => {
            expect(body).to.include({name : 'ditto'})
        })
        cy.get ('@pokemon').then((Response) => {
            expect(Response.body.name).equal('ditto')
        })
        })
    })
