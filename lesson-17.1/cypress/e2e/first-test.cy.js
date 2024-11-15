describe('Test cases', () => {
  beforeEach(() => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/');
    cy.contains('Do more!').should('be.visible');
  });

  it('Check the headers on the page', () => {
    cy.get('div.header_left a > svg').should('be.visible').should('be.visible');
    cy.get('a').contains('Home').should('be.visible');
    cy.get('.btn.header-link').contains('About').should('be.visible');
    cy.get('.btn.header-link').contains('Contacts').should('be.visible');
    cy.get('button.header-link.-guest')
      .contains('Guest log in')
      .should('be.visible');
    cy.get('.btn.btn-outline-white.header_signin').should('be.visible');
  });

  it('Should log in as guest, navigate to the garage, and log out', () => {
    cy.get('button.header-link.-guest')
      .should('be.visible')
      .contains('Guest log in')
      .click();
    cy.url().should('eq', 'https://qauto.forstudy.space/panel/garage');
    cy.get('#userNavDropdown').should('be.visible').click();
    cy.get('nav.user-nav_menu').should('be.visible');
    cy.get('.user-nav_link').contains('Logout').should('be.visible').click();
    cy.url().should('eq', 'https://qauto.forstudy.space/');
  });

  it('Social Media Icons Visibility Test', () => {
    cy.scrollTo('bottom');
    cy.get('.socials_icon.icon-facebook').should('be.visible');
    cy.get('.socials_icon.icon-telegram').should('be.visible');
    cy.get('.socials_icon.icon-youtube').should('be.visible');
    cy.get('.socials_icon.icon-youtube').should('be.visible');
    cy.get('.socials_icon.icon-linkedin').should('be.visible');
    cy.get('.contacts_link.display-4').should('be.visible');
    cy.get('.contacts_link.h4').should('be.visible');
  });
});
