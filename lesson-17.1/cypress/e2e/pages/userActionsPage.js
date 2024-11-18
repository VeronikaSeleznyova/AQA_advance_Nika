class UserActionsPage {
  openSignInModal() {
    cy.get('button.header_signin').should('be.visible').click({ force: true });
  }

  typeSignInEmail(email) {
    cy.get('#signinEmail').should('be.visible').clear().type(email);
  }

  typeSignInPassword(password) {
    cy.get('#signinPassword').should('be.visible').clear().type(password);
  }

  submitLogin() {
    cy.get('button[type="button"].btn.btn-primary').click();
  }

  openSettings() {
    cy.get('a.sidebar_btn[href="/panel/settings"]')
      .should('be.visible')
      .click();
  }

  clickRemoveAccount() {
    cy.get('button.btn.btn-danger-bg')
      .scrollIntoView()
      .should('be.visible')
      .click();
  }

  confirmRemoveAccount() {
    cy.get('h4.modal-title').should('have.text', 'Remove account');
    cy.get('button.btn.btn-danger').should('be.visible').click();
  }
}

export default new UserActionsPage();
