class UserActionsPage {
  loginUser(email, password) {
    cy.login(email, password);
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
