import { expensesPage } from '../e2e/pages/expensesPage';
import { garagePage } from '../e2e/pages/garagePage';
import EnvUserActionsPage from '../e2e/pages/envUserActionsPage';

describe('Garage and Expenses Tests', () => {
  beforeEach(() => {
    EnvUserActionsPage.loginUser();
  });

  it('Add a car', () => {
    garagePage.clickAddCar();
    garagePage.selectCarBrand('Porsche');
    garagePage.selectCarModel('911');
    garagePage.enterMileage(25);
    garagePage.clickAddButton();
    cy.contains('Porsche').should('exist');
  });

  it('Add expenses', () => {
    expensesPage.clickAddExpense();
    expensesPage.enterMileage(200);
    expensesPage.enterLiters(200);
    expensesPage.enterTotalCost(200);
    expensesPage.clickAddButton();

    expensesPage.fuelExpenseTable.contains('200').should('exist');
  });

  describe('Remove a car', () => {
    after(() => {
      cy.contains('Garage').click();
      cy.get('.icon-edit').click();
      cy.get('.btn.btn-outline-danger').click();
      cy.get('.btn.btn-danger').click();

      cy.contains('Porsche').should('not.exist');

      cy.log('All tests are finished!');
    });
  });
});
