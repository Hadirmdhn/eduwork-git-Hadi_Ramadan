Cypress.Commands.add('loginViaAPI', (
   email = Cypress.env('userEmail'),
   password = Cypress.env('userPassword')
 ) => {
  const credentials = `${email}:${password}`;
  const base64Credentials = btoa(credentials);

   cy.request({
    method: 'GET',
    url: `${Cypress.env('apiUrl')}/basic_auth`,
    headers: {
      'Authorization': `Basic ${base64Credentials}`
    }
   }).then((response) => {
     cy.setCookie('sessionId', 'sessionId')
     cy.setCookie('userId', 'userId')
     cy.setCookie('userName', 'userName')
     cy.visit('https://the-internet.herokuapp.com')
   })
})


