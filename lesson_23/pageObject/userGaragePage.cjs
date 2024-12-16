const { test: base, chromium } = require('@playwright/test');

const test = base.extend({
    userGaragePage: async ({}, use) => {
        const browser = await chromium.launch();
        const context = await browser.newContext({
            storageState: 'storageState.json',
        });
        const page = await context.newPage();
        await page.goto(process.env.BASE_URL + '/garage'); 
        await use(page);
        await context.close();
        await browser.close();
    },
});

module.exports = { test };