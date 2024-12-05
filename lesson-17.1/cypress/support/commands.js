Cypress.Commands.add('login', (email, password) => {
  cy.log('Logging in...');
  cy.contains('button', 'Sign In').should('be.visible').click({ force: true });
  cy.get('#signinEmail').should('be.visible').clear().type(email);
  cy.get('#signinPassword')
    .should('be.visible')
    .clear()
    .type(password, { sensitive: true });
  cy.get('button[type="button"].btn.btn-primary').should('be.enabled').click();

  cy.log('Login successful!');
});

Cypress.Commands.add('createExpense', (carId, mileage, liters, totalCost) => {
  return cy
    .request({
      method: 'POST',
      url: 'https://qauto.forstudy.space/api/expenses',
      headers: { Authorization: `Bearer ${Cypress.env('userToken')}` },
      body: {
        car_id: carId,
        mileage: mileage,
        liters: liters,
        total_cost: totalCost,
      },
    })
    .then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.expense).to.exist;

      return response.body.expense;
    });
});
