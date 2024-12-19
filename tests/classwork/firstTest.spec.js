// @ts-check
const { test, expect } = require('@playwright/test');
const {sauceDemoPage} = require("./pageobjects/SauceDemoPage");

test('first test', async ({ page }) => {
    await page.goto(sauceDemoPage.webPage);
    await page.getByPlaceholder(sauceDemoPage.userNamePlaceHolder).fill('standard_user');
    await page.getByTestId(sauceDemoPage.passwordFieldTestId).fill('secret_sauce');
    await page.locator(sauceDemoPage.logInButtonClass).click()
    await page.getByText('Sauce Labs Backpack').click();
    await page.getByTestId(sauceDemoPage.addToCartButtonTestId).click()
    await page.getByTestId(sauceDemoPage.shoppingCardTestId).click()
    await page.getByTestId(sauceDemoPage.checkOutButtonTestId).click()
    await page.getByTestId(sauceDemoPage.continueButtonTestId).click()
    const errorMessage = page.getByTestId(sauceDemoPage.errorMessageTestId);
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
