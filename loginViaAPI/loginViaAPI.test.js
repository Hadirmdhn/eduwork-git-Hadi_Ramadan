/// <reference types = "cypress"/>
import '../../support/Commands'

describe('Contoh Pengujian yang Menggunakan loginViaAPI', () => {
  it('Berhasil melakukan login menggunakan custom command', () => {
    cy.loginViaAPI('admin', 'admin')
    cy.get('h1').should('contain.text', 'Welcome to the-internet')
  })
})


