Cypress.Commands.add('login', (email, password) => {
  cy.log('Logging in...');
  cy.contains('button', 'Sign In').should('be.visible').click({ force: true });
  cy.get('#signinEmail').should('be.visible').clear().type(email);
  cy.get('#signinPassword')
    .should('be.visible')
    .clear()
    .type(password, { sensitive: true });
  cy.get('button[type="button"].btn.btn-primary').should('be.enabled').click();

  cy.log('Login successful!');
});
