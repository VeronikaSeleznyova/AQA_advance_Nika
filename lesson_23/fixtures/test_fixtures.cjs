const { test: baseTest } = require('@playwright/test');


const test = baseTest.extend({
  userGaragePage: async ({ page }, use) => {
    await page.context().addCookies([{ name: 'storageState', value: 'storageState.json' }]);
    await page.goto('/garage'); 
    await use(page);
  },
});

module.exports = { test };