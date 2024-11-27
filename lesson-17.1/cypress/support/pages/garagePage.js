class GaragePage {
  get addCarButton() {
    return cy.get('.btn.btn-primary');
  }

  get carBrandDropdown() {
    return cy.get('#addCarBrand');
  }

  get carModelDropdown() {
    return cy.get('#addCarModel');
  }

  get mileageInput() {
    return cy.get('#addCarMileage');
  }

  get addButton() {
    return cy.get('.btn.btn-primary[type="button"]');
  }

  clickAddCar() {
    this.addCarButton.click();
  }

  selectCarBrand(brand) {
    this.carBrandDropdown.select(brand);
  }

  selectCarModel(model) {
    this.carModelDropdown.select(model);
  }

  enterMileage(value) {
    this.mileageInput.clear().type(value);
  }

  clickAddButton() {
    this.addButton.click();
  }
}

export const garagePage = new GaragePage();
