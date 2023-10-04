const URLE = 'http://zero.webappsecurity.com/index.html'
const SEACHBOX = '#searchTerm'

class searchBox {

    static visit() {
        cy.visit(URLE)
    }

    static fillSearch(text) {
        cy.get(SEACHBOX).type(text)
        cy.get(SEACHBOX).type('{enter}')
    }
}

export default searchBox; 