const { Page, expect } = require('@playwright/test');

class RegistrationPage {
  constructor(page) {
    this.page = page;
  }

  async visit() {
    await this.page.goto('https://qauto.forstudy.space', {
      auth: {
        username: 'guest',
        password: 'welcome2qauto',
      },
    });
    const doMoreText = this.page.locator('text=Do more!');
    await expect(doMoreText).toBeVisible();
  }

  async openRegistrationModal() {
    const signUpButton = this.page.locator('button:has-text("Sign up")');
    await expect(signUpButton).toBeVisible();
    await signUpButton.click();
    const modalTitle = this.page.locator('h4.modal-title');
    await expect(modalTitle).toHaveText('Registration');
  }

  async modalCloseBtn(page) {
    const modalClose = page.locator('button.close'); 
    if (await modalClose.isVisible()) {
      await modalClose.click();
    }
  }

  async typeNameClick() {
    const nameField = this.page.locator('#signupName');
    await nameField.click();
  }

  async typeName(name) {
    const nameField = this.page.locator('#signupName');
    await nameField.fill(name);
  }

  async checkNameValue(expectedValue) {
    const nameField = this.page.locator('#signupName');
    await expect(nameField).toHaveValue(expectedValue.trim());
  }

  async typeLastNameClick() {
    const lastNameField = this.page.locator('#signupLastName');
    await lastNameField.click();
  }

  async typeLastName(lastName) {
    const lastNameField = this.page.locator('#signupLastName');
    await lastNameField.fill(lastName);
  }

  async checkLastNameValue(expectedValue) {
    const lastNameField = this.page.locator('#signupLastName');
    await expect(lastNameField).toHaveValue(expectedValue.trim());
  }

 async checkErrorMessage(fieldLocator, message) {
      const field = this.page.locator(fieldLocator);
      await expect(field).toHaveText(message);
    }
  
  async checkRegisterButtonEnabled(enabled) {
    const registerButton = this.page.locator('button:has-text("Register")');
    if (enabled) {
      await expect(registerButton).toBeEnabled();
    } else {
      await expect(registerButton).toBeDisabled();
    }
  }

  async typeEmailClick() {
    const emailField = this.page.locator('#signupEmail');
    await emailField.click();
  }

  async typeEmail(email) {
    const emailField = this.page.locator('#signupEmail');
    await emailField.fill(email);
  }

  async checkEmailValue(expectedValue) {
    const emailField = this.page.locator('#signupEmail');
    await expect(emailField).toHaveValue(expectedValue.trim());
  }

  async typePasswordClick() {
    const passwordField = this.page.locator('#signupPassword');
    await passwordField.click();
  }

  async typePassword(password) {
    const passwordField = this.page.locator('#signupPassword');
    await passwordField.fill(password);
  }

  async checkPasswordValue(expectedValue) {
    const passwordField = this.page.locator('#signupPassword');
    await expect(passwordField).toHaveValue(expectedValue.trim());
  }

  async typeRepeatPasswordClick() {
    const repeatPasswordField = this.page.locator('#signupRepeatPassword');
    await repeatPasswordField.click();
  }

  async typeRepeatPassword(repeatPassword) {
    const repeatPasswordField = this.page.locator('#signupRepeatPassword');
    await repeatPasswordField.fill(repeatPassword);
  }

  async checkRepeatPasswordValue(expectedValue) {
    const repeatPasswordField = this.page.locator('#signupRepeatPassword');
    await expect(repeatPasswordField).toHaveValue(expectedValue.trim());
  }

async checkErrorMessage(fieldLocator, message) {
    const field = this.page.locator(fieldLocator);
    await expect(field).toHaveText(message);
  }

async checkFieldClasses(locator, expectedClasses) {
    const element = await this.page.locator(locator);
    const actualClasses = await element.evaluate(el => el.className.split(' '));
    for (const className of expectedClasses) {
      expect(actualClasses).toContain(className);
    }
  }

  async submitRegistration() {
    const registerButton = this.page.locator('button:has-text("Register")');
    await expect(registerButton).toBeVisible();
    await registerButton.click();
  }
}

module.exports = { RegistrationPage };