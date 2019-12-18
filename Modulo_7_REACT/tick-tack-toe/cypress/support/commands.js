// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('enterPlayers', (p1, p2) => {
  cy.visit('/')
    .get('#players')
    .type(p1)
    .type('{enter}')
    .type(p2)
    .type('{enter}');
});

Cypress.Commands.add('playTickTackToe', winnerComb => {
  cy.get('.square').each((square, i) => {
    if (winnerComb.includes(i)) {
      square.click();
    }
  });
});
