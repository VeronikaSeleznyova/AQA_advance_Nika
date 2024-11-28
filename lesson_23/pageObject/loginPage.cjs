const { Page } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.signInButton = 'button:text("Sign In")';
    this.emailInput = '#signinEmail';
    this.passwordInput = '#signinPassword';
    this.submitButton = 'button[type="button"].btn.btn-primary';
  }

  async login(email, password) {
    await this.page.locator(this.signInButton).click();
    await this.page.locator(this.emailInput).fill(email);
    await this.page.locator(this.passwordInput).fill(password);
    await this.page.locator(this.submitButton).click();

    console.log('Login successful!');
  }
}

module.exports = { LoginPage };