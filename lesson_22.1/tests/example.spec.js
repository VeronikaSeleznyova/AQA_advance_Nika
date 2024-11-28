const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pageObject/registrationPage.cjs');
const { LoginPage } = require('../pageObject/loginPage.cjs');
const { UserActionsPage } = require('../pageObject/userActionsPage.cjs');

let registrationPage;
let loginPage;
let userActionsPage;

test.describe('Test cases registration for new user', () => {
  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    loginPage = new LoginPage(page);
    userActionsPage = new UserActionsPage(page);

    // await page.goto('https://qauto.forstudy.space', {
    //     auth: {
    //       username: 'guest',
    //       password: 'welcome2qauto'
    //     }
    //   });

    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await expect(page.locator('text=Do more!')).toBeVisible();
  });

  test('Check the Name field', async ({ page }) => {
    await registrationPage.openRegistrationModal();
    await registrationPage.typeName('');
    await registrationPage.typeLastNameClick();
    await registrationPage.checkNameErrorMessage('');
    await registrationPage.checkNameFieldClasses([
      'is-invalid',
      'ng-pristine',
      'ng-touched',
    ]);
    await registrationPage.checkRegisterButtonEnabled(false);
    await registrationPage.typeName('VeronikaVeronikaVeronika');
    await registrationPage.typeLastNameClick();
    await registrationPage.checkNameFieldClasses([
      'ng-invalid',
      'is-invalid',
      'ng-touched',
      'ng-dirty',
    ]);
    await registrationPage.checkNameErrorMessage('');
    await registrationPage.checkRegisterButtonEnabled(false);
  });

  test('Check the Last Name field', async ({ page }) => {
    await registrationPage.openRegistrationModal();
    await registrationPage.typeLastNameClick();
    await registrationPage.typeNameClick();

    await registrationPage.checkLastNameErrorMessage();
    await registrationPage.checkLastNameFieldClasses([
      'ng-invalid',
      'is-invalid',
      'ng-pristine',
      'ng-touched',
    ]);
    await registrationPage.checkRegisterButtonEnabled(false);

    await registrationPage.typeLastName('VeronikaVeronikaVeronika');
    await registrationPage.checkLastNameValue('VeronikaVeronikaVeronika');
    await registrationPage.typeNameClick();

    await registrationPage.checkLastNameErrorMessage();
    await registrationPage.checkLastNameFieldClasses([
      'ng-invalid',
      'is-invalid',
      'ng-touched',
      'ng-dirty',
    ]);
    await registrationPage.checkRegisterButtonEnabled(false);
  });

  test('Check the Email field', async ({ page }) => {
    await registrationPage.openRegistrationModal();

    await registrationPage.typeEmailClick();
    await registrationPage.typeNameClick();

    await registrationPage.checkEmailErrorMessage();
    await registrationPage.checkEmailFieldClasses([
      'ng-invalid',
      'is-invalid',
      'ng-pristine',
      'ng-touched',
    ]);
    await registrationPage.checkRegisterButtonEnabled(false);

    await registrationPage.typeEmail('test@');
    await registrationPage.checkEmailValue('test@');
    await registrationPage.typeNameClick();

    await registrationPage.checkEmailErrorMessage();
    await registrationPage.checkEmailFieldClasses([
      'ng-invalid',
      'is-invalid',
      'ng-dirty',
      'ng-touched',
    ]);
    await registrationPage.checkRegisterButtonEnabled(false);
  });

  test('Check the Password field', async ({ page }) => {
    await registrationPage.openRegistrationModal();

    await registrationPage.typePasswordClick();
    await registrationPage.typeLastNameClick();

    await registrationPage.checkPasswordErrorMessage();
    await registrationPage.checkPasswordFieldClasses([
      'ng-invalid',
      'ng-pristine',
      'ng-touched',
    ]);
    await registrationPage.checkRegisterButtonEnabled(false);

    await registrationPage.typePassword('test');
    await registrationPage.checkPasswordValue('test');
    await registrationPage.typeNameClick();

    await registrationPage.checkPasswordErrorMessage();
    await registrationPage.checkPasswordFieldClasses([
      'ng-invalid',
      'ng-dirty',
      'ng-touched',
    ]);
    await registrationPage.checkRegisterButtonEnabled(false);
  });

  test('Check the Re-enter password field', async ({ page }) => {
    await registrationPage.openRegistrationModal();
    await registrationPage.typeRepeatPasswordClick();
    await registrationPage.typeLastNameClick();

    await registrationPage.checkRepeatPasswordErrorMessage();
    await registrationPage.checkRepeatPasswordFieldClasses([
      'ng-invalid',
      'ng-touched',
    ]);
    await registrationPage.checkRegisterButtonEnabled(false);

    await registrationPage.typePassword('TestNika12?');
    await registrationPage.checkPasswordValue('TestNika12?');
    await registrationPage.typeRepeatPassword('TestNika12');
    await registrationPage.checkRepeatPasswordValue('TestNika12');

    await registrationPage.checkRepeatPasswordErrorMessage();
    await registrationPage.checkRepeatPasswordFieldClasses([
      'ng-touched',
      'ng-invalid',
    ]);
    await registrationPage.checkRegisterButtonEnabled(false);
  });

  test('Check the successful user registration', async ({ page }) => {
    await registrationPage.openRegistrationModal();

    await registrationPage.typeName('Veronika');
    await registrationPage.checkNameValue('Veronika');

    await registrationPage.typeLastName('LastName');
    await registrationPage.checkLastNameValue('LastName');

    await registrationPage.typeEmail('ver1@gmail.com');
    await registrationPage.checkEmailValue('ver1@gmail.com');

    await registrationPage.typePassword('TestNika12?');
    await registrationPage.checkPasswordValue('TestNika12?');

    await registrationPage.typeRepeatPassword('TestNika12?');
    await registrationPage.checkRepeatPasswordValue('TestNika12?');

    await registrationPage.submitRegistration();
  });

  test.afterAll(async ({ page }) => {
    await loginPage.login('ver1@gmail.com', 'TestNika12?');
    await userActionsPage.openSettings();
    await userActionsPage.clickRemoveAccount();
    await userActionsPage.confirmRemoveAccount();
    console.log('Account removed successfully.');
  });
});
