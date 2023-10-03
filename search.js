const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given("Pengguna membuka halaman utama website Zero Bank", () => {
  cy.visit("http://zero.webappsecurity.com/index.html");
});

When("Pengguna memasukkan kata kunci online kedalam kolom pencarian kemudian menekan enter", () => {
  cy.get("#searchTerm").type('online{enter}');
});

When("Pengguna memasukan kata kunci yang tidak valid dalam kolom pencarian kemudian menekan enter", () => {
    cy.get("#searchTerm").type('bannk abc{enter}');
  });

Then("Pengguna mendapat hasil yang sesuai", () => {
  cy.get('h2').should("have.text", "Search Results:");
});

Then("Pengguna mendapat hasil yang tidak sesuai", () => {
  cy.get('h2').should("have.text", "Search Results:");
  cy.contains('Feedback').should('exist')
});