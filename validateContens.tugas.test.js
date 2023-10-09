/// <reference types="cypress" />

describe('API Validate', () => {
    it('Succesfully validate with content', () => {
        cy.request('https://pokeapi.co/api/v2/ability/7').as('ability');
        cy.get('@ability').then((Response) => {
            expect(Response.body.name).to.eq('limber')
        })
    })
})