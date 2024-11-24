class RegistrationPage {
  visit() {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    cy.contains('Do more!').should('be.visible');
  }

  openRegistrationModal() {
    cy.contains('button', 'Sign up').should('be.visible').click();
    cy.get('h4.modal-title').should('have.text', 'Registration');
  }

  checkNameErrorMessage(message) {
    cy.get('#signupName').should('include.text', message);
  }

  typeNameClick(name) {
    return cy.get('#signupName').click();
  }

  typeName(name) {
    return cy.get('#signupName').clear().type(name);
  }

  checkNameValue(expectedValue) {
    return cy.get('#signupName').should('have.value', expectedValue.trim());
  }

  typeLastNameClick(lastName) {
    return cy.get('#signupLastName').click();
  }

  typeLastName(lastName) {
    return cy.get('#signupLastName').clear().type(lastName);
  }

  checkLastNameValue(expectedValue) {
    return cy.get('#signupLastName').should('have.value', expectedValue.trim());
  }

  checkLastNameErrorMessage(message) {
    cy.get('#signupLastName').should('include.text', message);
  }

  checkNameFieldClasses(classes) {
    cy.get('#signupName')
      .should('have.class', classes[0])
      .and('have.class', classes[1])
      .and('have.class', classes[2]);
  }

  checkRegisterButtonEnabled(enabled) {
    if (enabled) {
      cy.contains('button', 'Register').should('be.enabled');
    } else {
      cy.contains('button', 'Register').should('be.disabled');
    }
  }

  typeEmailClick(email) {
    return cy.get('#signupEmail').click();
  }

  typeEmail(email) {
    return cy.get('#signupEmail').clear().type(email);
  }

  checkEmailValue(expectedValue) {
    return cy.get('#signupEmail').should('have.value', expectedValue.trim());
  }

  checkEmailErrorMessage(message) {
    cy.get('#signupEmail').should('include.text', message);
  }

  typePasswordClick(password) {
    cy.get('#signupPassword').click();
  }

  typePassword(password) {
    return cy
      .get('#signupPassword')
      .clear()
      .type(password, { sensetive: true });
  }

  checkPasswordValue(expectedValue) {
    return cy
      .get('#signupPassword')
      .should('have.value', expectedValue.trim())
      .and('have.value', expectedValue, { sensitive: true });
  }

  checkPasswordErrorMessage(message) {
    cy.get('#signupPassword').should('include.text', message);
  }

  typeRepeatPasswordClick(repeatPassword) {
    return cy.get('#signupRepeatPassword').click();
  }

  typeRepeatPassword(repeatPassword) {
    return cy
      .get('#signupRepeatPassword')
      .clear()
      .type(repeatPassword, { sensetive: true });
  }

  checkRepeatPasswordValue(expectedValue) {
    return cy
      .get('#signupRepeatPassword')
      .should('have.value', expectedValue.trim());
  }
  checkRepeatPasswordErrorMessage(message) {
    cy.get('#signupRepeatPassword').should('include.text', message);
  }

  checkLastNameFieldClasses(classes) {
    return cy
      .get('#signupLastName')
      .should('have.class', classes[0])
      .and('have.class', classes[1])
      .and('have.class', classes[2])
      .and('have.class', classes[3]);
  }

  checkEmailFieldClasses(classes) {
    return cy
      .get('#signupEmail')
      .should('have.class', classes[0])
      .and('have.class', classes[1])
      .and('have.class', classes[2])
      .and('have.class', classes[3]);
  }

  checkPasswordFieldClasses(classes) {
    cy.get('#signupPassword')
      .should('have.class', classes[0])
      .and('have.class', classes[1])
      .and('have.class', classes[2]);
  }

  checkRepeatPasswordFieldClasses(classes) {
    cy.get('#signupRepeatPassword').should('have.class', classes[0]);
  }

  checkRepeatPasswordFieldClasses(classes) {
    cy.get('#signupRepeatPassword').should('have.class', classes[0]);
  }

  submitRegistration(active) {
    cy.contains('button', 'Register').should('be.visible').click();
  }
}

export default new RegistrationPage();
