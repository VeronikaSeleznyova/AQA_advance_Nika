const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObject/loginPage.cjs');

test.describe('Substitution of data', () => {
  let loginPage;

  test('Check the changed data', async ({ page }) => {
    loginPage = new LoginPage(page);

    await page.route('/api/profile', (route, request) => {
      const modifiedResponse = {
        status: 'ok',
        data: {
          id: 1,
          name: 'John Doe', 
          email: 'john.doe@example.com'
        }
      };

      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(modifiedResponse),
      });
    });

    await page.goto('https://guest:welcome2qauto@qauto.forstudy.space/');
    await expect(page.locator('text=Do more!')).toBeVisible();
    await loginPage.login('ver12@gmail.com', 'Passs888');
    
    await page.locator('[routerlink="profile"]').click();

    await expect(page.locator('text=John Doe')).toBeVisible(); 
    await expect(page.locator('text=john.doe@example.com')).toBeVisible(); 
  });
});