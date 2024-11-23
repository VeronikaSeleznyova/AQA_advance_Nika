import { expensesPage } from '../support/pages/expensesPage';
import { garagePage } from '../support/pages/garagePage';
import EnvUserActionsPage from '../support/pages/envUserActionsPage';

describe('Garage and Expenses Tests', () => {
  beforeEach(() => {
    EnvUserActionsPage.loginUser();
  });

  it('Добавление автомобиля', () => {
    garagePage.clickAddCar();
    garagePage.selectCarBrand('Porsche');
    garagePage.selectCarModel('911');
    garagePage.enterMileage(25);
    garagePage.clickAddButton();
    cy.contains('Porsche').should('exist');
  });

  it('Добавление расхода на топливо', () => {
    expensesPage.clickAddExpense();
    expensesPage.enterMileage(200);
    expensesPage.enterLiters(200);
    expensesPage.enterTotalCost(200);
    expensesPage.clickAddButton();

    expensesPage.fuelExpenseTable.contains('200').should('exist');
  });

  it('Удаление автомобиля', () => {
    cy.contains('Garage').click();
    cy.get('.icon-edit').click();
    cy.get('.btn.btn-outline-danger').click();
    cy.get('.btn.btn-danger').click();

    cy.contains('Porsche').should('not.exist');
  });
});
