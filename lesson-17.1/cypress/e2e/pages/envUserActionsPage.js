class UserActionsPage {
  static loginUser() {
    const email = Cypress.env('userEmail');
    const password = Cypress.env('userPassword');
    cy.visit('/');
    cy.get('#signinEmail').type(email);
    cy.get('#signinPassword').type(password);
    cy.get('button', 'Login').click();
  }
}

export default new UserActionsPage();
