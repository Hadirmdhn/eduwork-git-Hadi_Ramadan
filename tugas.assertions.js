/// <reference types="cypress"/>

describe('My First Test', () => {
    it('clicking "type" shows the right headings', () => {
        // Mengunjungi situs web
        cy.visit('https://example.cypress.io')

        // Menambahkan jeda untuk melihat interaksi di browser (opsional)
        cy.pause()

        // Mengklik elemen yang mengandung teks "type"
        cy.contains('type').click()

        // Memeriksa apakah URL mengandung sebagian dari teks yang diharapkan
        cy.url().should('include', '/commands/actions')

        // Mengisi input dengan teks tertentu dan memeriksa nilai inputnya
        cy.get('.action-email')
            .type('example@email.com') // Mengganti dengan alamat email yang sebenarnya
            .should('have.value', 'example@email.com') // Mengganti dengan alamat email yang sebenarnya
    });

});