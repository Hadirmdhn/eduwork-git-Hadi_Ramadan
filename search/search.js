import searchBox from './search.page';
const {Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given("Pengguna membuka halaman utama website Zero Bank", () => {
  searchBox.visit()
});

When("Pengguna memasukkan kata kunci online kedalam kolom pencarian kemudian menekan enter", () => {
  searchBox.fillSearch('online')
});

When("Pengguna memasukan kata kunci yang tidak valid dalam kolom pencarian kemudian menekan enter", () => {
    searchBox.fillSearch('bank abc')
  });

Then("Pengguna mendapat hasil yang sesuai", () => {
  cy.get('h2').should("have.text", "Search Results:");
});

Then("Pengguna mendapat hasil yang tidak sesuai", () => {
  cy.get('h2').should("have.text", "Search Results:");
  cy.contains('Feedback').should('exist')
});