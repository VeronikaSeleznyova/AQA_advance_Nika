class ExpensesPage {
  get addExpenseButton() {
    return cy.get('.car_add-expense.btn.btn-success');
  }

  get mileageInput() {
    return cy.get('#addExpenseMileage');
  }

  get litersInput() {
    return cy.get('#addExpenseLiters');
  }

  get totalCostInput() {
    return cy.get('#addExpenseTotalCost'); // Локатор для поля стоимости
  }

  get addButton() {
    return cy.get('.btn.btn-primary[type="button"]'); // Локатор для кнопки "Add"
  }

  get fuelExpenseTable() {
    return cy.get('.expenses_table'); // Локатор таблицы расходов
  }

  clickAddExpense() {
    this.addExpenseButton.click();
  }

  enterMileage(value) {
    this.mileageInput.clear().type(value);
  }

  enterLiters(value) {
    this.litersInput.clear().type(value);
  }

  enterTotalCost(value) {
    this.totalCostInput.clear().type(value);
  }

  clickAddButton() {
    this.addButton.click();
  }
}

export const expensesPage = new ExpensesPage();
