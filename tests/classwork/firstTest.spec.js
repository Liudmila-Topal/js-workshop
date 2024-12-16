// @ts-check
const { test, expect } = require('@playwright/test');
const {souceDemoPage} = require("./pageobjects/saucedemoPO");

test('first test', async ({ page }) => {
    await page.goto(souceDemoPage.webPage);
    await page.getByPlaceholder(souceDemoPage.userNamePlaceHolder).fill('standard_user');
    await page.getByTestId(souceDemoPage.passwordFieldTestId).fill('secret_sauce');
    await page.locator(souceDemoPage.logInButtonClass).click()
    await page.getByText('Sauce Labs Backpack').click();
    await page.getByTestId(souceDemoPage.addToCartButtonTestId).click()
    await page.getByTestId(souceDemoPage.shoppingCardTestId).click()
    await page.getByTestId(souceDemoPage.checkOutButtonTestId).click()
    await page.getByTestId(souceDemoPage.continueButtonTestId).click()
    const errorMessage = page.getByTestId(souceDemoPage.errorMessageTestId);
    await errorMessage.highlight()
    await expect(errorMessage).toBeVisible();
});

test('synchrony', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    let checkboxLocator = page.getByRole('checkbox').first()
    await checkboxLocator.highlight()
    await checkboxLocator.check()
    await expect(checkboxLocator).toBeChecked()
});

test('A-synchrony', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    let checkboxLocator = page.getByRole('checkbox').first()
    await checkboxLocator.highlight()
    checkboxLocator.check()
    expect(checkboxLocator).toBeChecked()
});
