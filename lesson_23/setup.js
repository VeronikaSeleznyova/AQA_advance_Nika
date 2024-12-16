const { chromium } = require('@playwright/test');
require('dotenv').config();

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    httpCredentials: {
      username: process.env.BASIC_USERNAME,
      password: process.env.BASIC_PASSWORD,
    },
  });

  const page = await context.newPage();
  await page.goto(process.env.BASE_URL + '/login');
  await page.fill('input[name="username"]', process.env.BASIC_USERNAME);
  await page.fill('input[name="password"]', process.env.BASIC_PASSWORD);
  await page.click('button[type="submit"]');
  await page.waitForURL(process.env.BASE_URL + '/garage');

  await context.storageState({ path: 'storageState.json' });
  await browser.close();
})();
