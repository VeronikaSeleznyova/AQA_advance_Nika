import RegistrationPage from '../support/pages/registrationPage';
import UserActionsPage from '../support/pages/userActionsPage';
import '../support/commands';

describe('Test cases registration for new user', () => {
  beforeEach(() => {
    RegistrationPage.visit();
  });

  it('Check the Name field', () => {
    RegistrationPage.openRegistrationModal();
    RegistrationPage.typeNameClick();
    RegistrationPage.typeLastNameClick();
    RegistrationPage.checkNameFieldClasses([
      'is-invalid',
      'ng-pristine',
      'ng-touched',
    ]);
    RegistrationPage.checkRegisterButtonEnabled(false);

    RegistrationPage.typeName('VeronikaVeronikaVeronika');
    RegistrationPage.checkNameValue('VeronikaVeronikaVeronika');
    RegistrationPage.typeLastNameClick();
    RegistrationPage.checkNameFieldClasses([
      'ng-invalid',
      'is-invalid',
      'ng-touched',
      'ng-dirty',
    ]);
    RegistrationPage.checkRegisterButtonEnabled(false);
  });

  it('Check the Last Name field', () => {
    RegistrationPage.openRegistrationModal();
    RegistrationPage.typeLastNameClick();
    RegistrationPage.typeNameClick();

    RegistrationPage.checkLastNameFieldClasses([
      'ng-invalid',
      'is-invalid',
      'ng-pristine',
      'ng-touched',
    ]);
    RegistrationPage.checkRegisterButtonEnabled(false);
    RegistrationPage.typeLastName('VeronikaVeronikaVeronika');
    RegistrationPage.checkLastNameValue('VeronikaVeronikaVeronika');

    RegistrationPage.typeNameClick();

    RegistrationPage.checkLastNameFieldClasses([
      'ng-invalid',
      'is-invalid',
      'ng-touched',
      'ng-dirty',
    ]);
    RegistrationPage.checkRegisterButtonEnabled(false);
  });

  it('Check the Email field', () => {
    RegistrationPage.openRegistrationModal();

    RegistrationPage.typeEmailClick();
    RegistrationPage.typeNameClick();

    RegistrationPage.checkEmailFieldClasses([
      'ng-invalid',
      'is-invalid',
      'ng-pristine',
      'ng-touched',
    ]);
    RegistrationPage.checkRegisterButtonEnabled(false);

    RegistrationPage.typeEmail('test@');
    RegistrationPage.checkEmailValue('test@');

    RegistrationPage.typeNameClick();

    RegistrationPage.checkEmailFieldClasses([
      'ng-invalid',
      'is-invalid',
      'ng-dirty',
      'ng-touched',
    ]);
    RegistrationPage.checkRegisterButtonEnabled(false);
  });

  it('Check the Password field', () => {
    RegistrationPage.openRegistrationModal();
    RegistrationPage.typePasswordClick();
    RegistrationPage.typeLastNameClick();

    RegistrationPage.checkPasswordFieldClasses([
      'ng-invalid',
      'ng-pristine',
      'ng-touched',
    ]);
    RegistrationPage.checkRegisterButtonEnabled(false);

    RegistrationPage.typePassword('test');
    RegistrationPage.checkPasswordValue('test');

    RegistrationPage.typeNameClick();

    RegistrationPage.checkPasswordFieldClasses([
      'ng-invalid',
      'ng-dirty',
      'ng-touched',
    ]);
    RegistrationPage.checkRegisterButtonEnabled(false);
  });

  it('Check the Re-enter password field', () => {
    RegistrationPage.openRegistrationModal();

    RegistrationPage.typeRepeatPasswordClick();
    RegistrationPage.typeLastNameClick();
    RegistrationPage.checkRepeatPasswordFieldClasses([
      'ng-invalid',
      'ng-touched',
    ]);
    RegistrationPage.checkRegisterButtonEnabled(false);

    RegistrationPage.typePassword('TestNika12?');
    RegistrationPage.checkPasswordValue('TestNika12?');

    RegistrationPage.typeRepeatPassword('TestNika12');
    RegistrationPage.checkRepeatPasswordValue('TestNika12');

    RegistrationPage.checkRepeatPasswordFieldClasses([
      'ng-touched',
      'ng-invalid',
    ]);
    RegistrationPage.checkRegisterButtonEnabled(false);
  });

  it('Check the successful user registration', () => {
    RegistrationPage.openRegistrationModal();

    RegistrationPage.typeName('Veronika');
    RegistrationPage.checkNameValue('Veronika');

    RegistrationPage.typeLastName('LastName');
    RegistrationPage.checkLastNameValue('LastName');

    RegistrationPage.typeEmail('ver1@gmail.com');
    RegistrationPage.checkEmailValue('ver1@gmail.com');

    RegistrationPage.typePassword('TestNika12?');
    RegistrationPage.checkPasswordValue('TestNika12?');

    RegistrationPage.typeRepeatPassword('TestNika12?');
    RegistrationPage.checkRepeatPasswordValue('TestNika12?');

    RegistrationPage.submitRegistration();
  });

  describe('User login and remove account', () => {
    after(() => {
      UserActionsPage.loginUser('ver1@gmail.com', 'TestNika12?');

      UserActionsPage.openSettings();
      UserActionsPage.clickRemoveAccount();
      UserActionsPage.confirmRemoveAccount();

      cy.log('All tests are finished!');
    });
  });
});
