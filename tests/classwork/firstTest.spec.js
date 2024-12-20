// @ts-check
import { test as base, expect } from '@playwright/test';
const { SauceDemoPage } = require('../pageobjects/sauceDemoPage');

// Extend basic test with a custom fixture
const test = base.extend({
    sauceDemoPage: async ({ page }, use) => {
        const sauceDemoPage = new SauceDemoPage(page);
        await sauceDemoPage.goTo();
        await sauceDemoPage.logIn('standard_user', 'secret_sauce');
        await use(sauceDemoPage); // Pass the instance for use in tests
        await sauceDemoPage.checkoutCart();
        await sauceDemoPage.validateErrorMessageShown();
    }
})

test('first test', async ({ page }) => {
    const sauceDemoPage = new SauceDemoPage(page);
    await sauceDemoPage.goTo();
    await sauceDemoPage.logIn('standard_user', 'secret_sauce');
    await sauceDemoPage.addToCart('Sauce Labs Backpack');
    await sauceDemoPage.checkoutCart();
    await sauceDemoPage.validateErrorMessageShown();
});

test('second test', async ({ sauceDemoPage }) => {
    await sauceDemoPage.addToCart('Sauce Labs Bike Light');
});

test('third test', async ({ sauceDemoPage }) => {
    await sauceDemoPage.addToCart('Sauce Labs Bolt T-Shirt');
});

test('synchrony', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    let checkboxLocator = page.getByRole('checkbox').first()
    await checkboxLocator.highlight()
    await checkboxLocator.check()
    await expect(checkboxLocator).toBeChecked()
});

test('A-synchrony', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    let checkboxLocator = page.getByRole('checkbox').first()
    await checkboxLocator.highlight()
    checkboxLocator.check()
    expect(checkboxLocator).toBeChecked()
});
