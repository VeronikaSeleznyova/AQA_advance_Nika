const { test } = require('../fixtures/test_fixtures.cjs');

test('Користувач бачить Garage Page', async ({ userGaragePage }) => {
    await userGaragePage.waitForSelector('h1:has-text("Garage")');

    const cars = await userGaragePage.locator('.car-item').count();
    console.log(`Кількість автомобілів у гаражі: ${cars}`);
});