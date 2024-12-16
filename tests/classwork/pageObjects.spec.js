// @ts-check
const { test, expect } = require('@playwright/test');

//get by role the username element
test('get by role', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const locator =
    await locator.highlight()
    await expect(locator).toBeVisible();
});

//get by text the page header text
test('get by text', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const locator =
    await locator.highlight()
    await expect(locator).toBeVisible();
});

//get by label the search textbox from the header of the page
test('get by label', async ({ page }) => {
    await page.goto('https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label');
    const locator =
    await locator.highlight()
    await locator.click()
    await locator.fill("Ha ha ha ")
    await expect(locator).toHaveValue("Ha ha ha ");
});

//get by placeholder the username textbox
test('get by placeholder', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const locator =
    await locator.highlight()
    await expect(locator).toBeVisible();
});

//get by testId the username textbox
test('get by testId', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const locator =
    await locator.highlight()
    await expect(locator).toBeVisible();
});

//get by locator
test('get by locator', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    //this locator help to find something by class name
    const locator1 = await page.locator('.input_error')
    //this locator helps to find something by class name
    const locator2 = await page.locator('#password')
    await locator1.highlight()
    await locator2.highlight()
    await expect(locator1).toBeVisible();
    await expect(locator2).toBeVisible();
});
