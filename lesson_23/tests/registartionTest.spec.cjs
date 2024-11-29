const { test, expect } = require('@playwright/test');
const { RegistrationPage } = require('../pageObject/registrationPage.cjs'); 
const { LoginPage } = require('../pageObject/loginPage.cjs'); 
const { UserActionsPage } = require('../pageObject/userAcionsPage.cjs'); 


test.describe('Test cases for new user registration', () => {
  let registrationPage;
  let loginPage;
  let userActionsPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    loginPage = new LoginPage(page);
    userActionsPage = new UserActionsPage(page);

    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await expect(page.locator('text=Do more!')).toBeVisible();
  });


  test('Check the Name field', async () => {
    await registrationPage.openRegistrationModal();
    
    await registrationPage.typeName('');
    await registrationPage.typeLastNameClick();
    await registrationPage.checkErrorMessage('#signupEmail', '');
    await registrationPage.checkFieldClasses('#signupName', ['form-control', 'ng-invalid', 'is-invalid', 'ng-touched', 'ng-dirty']);
    await registrationPage.checkRegisterButtonEnabled(false);
  
    await registrationPage.typeName('VeronikaVeronikaVeronika');
    await registrationPage.typeLastNameClick();
    await registrationPage.checkErrorMessage('#signupEmail', '');
    await registrationPage.checkFieldClasses('#signupName', ['ng-invalid', 'ng-touched', 'ng-dirty']);
    await registrationPage.checkRegisterButtonEnabled(false);
  });


  test('Check the Last Name field', async () => {
    await registrationPage.openRegistrationModal();
    await registrationPage.typeLastNameClick();
    await registrationPage.typeNameClick();
    await registrationPage.checkErrorMessage('#signupEmail', '');
    await registrationPage.checkFieldClasses(['form-control', 'ng-pristine', 'ng-invalid', 'is-invalid', 'ng-touched']);
    await registrationPage.checkRegisterButtonEnabled(false);

    await registrationPage.typeLastName('VeronikaVeronikaVeronika');
    await registrationPage.checkLastNameValue('VeronikaVeronikaVeronika');
    await registrationPage.typeNameClick();
    await registrationPage.checkErrorMessage('#signupEmail', '');
    await registrationPage.checkFieldClasses(['form-control', 'ng-pristine', 'ng-invalid', 'is-invalid', 'ng-touched']);
    await registrationPage.checkRegisterButtonEnabled(false);
  });

  test('Check the Email field', async () => {
    await registrationPage.openRegistrationModal();
    await registrationPage.typeEmailClick();
    await registrationPage.typeNameClick();
    await registrationPage.checkErrorMessage('#signupEmail', '');
    await registrationPage.checkFieldClasses(['form-control', 'ng-pristine', 'ng-invalid', 'is-invalid', 'ng-touched']);
    await registrationPage.checkRegisterButtonEnabled(false);

    await registrationPage.typeEmail('test@');
    await registrationPage.checkEmailValue('test@');
    await registrationPage.typeNameClick();
    await registrationPage.checkErrorMessage('#signupEmail', '');
    await registrationPage.checkFieldClasses(['form-control', 'ng-pristine', 'ng-invalid', 'is-invalid', 'ng-touched']);
    await registrationPage.checkRegisterButtonEnabled(false);
  });

  test('Check the Password field', async () => {
    await registrationPage.openRegistrationModal();
    await registrationPage.typePasswordClick();
    await registrationPage.typeLastNameClick();
    await registrationPage.checkErrorMessage('#signupEmail', '');
    await registrationPage.checkFieldClasses(['form-control', 'ng-pristine', 'ng-invalid', 'is-invalid', 'ng-touched']);
    await registrationPage.checkRegisterButtonEnabled(false);

    await registrationPage.typePassword('test');
    await registrationPage.checkPasswordValue('test');
    await registrationPage.typeNameClick();
    await registrationPage.checkErrorMessage('#signupEmail', '');
    await registrationPage.checkFieldClasses(['ng-invalid', 'ng-touched']);
    await registrationPage.checkRegisterButtonEnabled(false);
  });

  test('Check the Re-enter password field', async () => {
    await registrationPage.openRegistrationModal();
    await registrationPage.typeRepeatPasswordClick();
    await registrationPage.typeLastNameClick();
    await registrationPage.checkErrorMessage('#signupEmail', '');
    await registrationPage.checkFieldClasses(['ng-invalid', 'ng-touched']);
    await registrationPage.checkRegisterButtonEnabled(false);

    await registrationPage.typePassword('TestNika12?');
    await registrationPage.checkPasswordValue('TestNika12?');
    await registrationPage.typeRepeatPassword('TestNika12');
    await registrationPage.checkRepeatPasswordValue('TestNika12');
    await registrationPage.checkErrorMessage('#signupEmail', '');
    await registrationPage.checkFieldClasses(['ng-touched', 'ng-invalid']);
    await registrationPage.checkRegisterButtonEnabled(false);
  });

  test('Check successful user registration', async () => {
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

  test.afterAll(async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    loginPage = new LoginPage(page);
    userActionsPage = new UserActionsPage(page);

    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await loginPage.login('ver1@gmail.com', 'TestNika12?');
    await userActionsPage.openSettings();
    await userActionsPage.clickRemoveAccount();
    await userActionsPage.confirmRemoveAccount();

    console.log('Account removed successfully.');
    await context.close();
  });
});