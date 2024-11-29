import { expensesPage } from './pages/expensesPage';
import { garagePage } from './pages/garagePage';
import EnvUserActionsPage from './pages/envUserActionsPage';

describe('Garage and Expenses Tests', () => {
  beforeEach(() => {
    EnvUserActionsPage.loginUser();
  });

  it('Add a car with interception', () => {
    const baseApiUrl =
      Cypress.env('baseApiUrl') || 'https://qauto.forstudy.space/api';
    cy.intercept('POST', `${baseApiUrl}/cars`).as('createCar');

    garagePage.clickAddCar();
    garagePage.selectCarBrand('Porsche');
    garagePage.selectCarModel('911');
    garagePage.enterMileage(25);
    garagePage.clickAddButton();

    cy.wait('@createCar').then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      const carId = interception.response.body.id;
      expect(carId).to.exist;
      Cypress.env('carId', carId);
    });

    cy.contains('Porsche').should('exist');
  });

  it('Validate car exists in the list', () => {
    const baseApiUrl =
      Cypress.env('baseApiUrl') || 'https://qauto.forstudy.space/api';
    const carId = Cypress.env('carId');
    expect(carId, 'Car ID should exist in Cypress.env').to.exist;

    cy.request(`${baseApiUrl}/cars`).then((response) => {
      expect(response.status).to.eq(200);
      const car = response.body.cars.find((c) => c.id === carId);

      expect(car, 'Car should exist in the list').to.exist;
      expect(car.brand).to.eq('Porsche');
      expect(car.model).to.eq('911');
      expect(car.mileage).to.eq(25);
    });
  });

  it('Create an expense via API', () => {
    const carId = Cypress.env('carId');
    expect(carId, 'Car ID should exist in Cypress.env').to.exist;

    cy.createExpense(carId, 200, 20, 100).then((expense) => {
      expect(expense, 'Expense object should exist').to.exist;
      Cypress.env('createdExpense', expense);

      expect(expense.car_id).to.eq(carId);
      expect(expense.mileage).to.eq(200);
      expect(expense.liters).to.eq(20);
      expect(expense.total_cost).to.eq(100);
    });
  });

  it('Validate expense in UI', () => {
    const expense = Cypress.env('createdExpense');
    expect(expense, 'Expense should exist in Cypress.env').to.exist;

    cy.contains('Garage').click();
    cy.contains('Porsche').click();
    cy.contains('Expenses').click();

    cy.contains(expense.mileage.toString()).should('exist');
    cy.contains(expense.liters.toString()).should('exist');
    cy.contains(expense.total_cost.toString()).should('exist');
  });

  after(() => {
    cy.contains('Garage').click();
    cy.get('.icon-edit').click();
    cy.get('.btn.btn-outline-danger').click();
    cy.get('.btn.btn-danger').click();

    cy.contains('Porsche').should('not.exist');
    cy.log('All tests are finished!');
  });
});
