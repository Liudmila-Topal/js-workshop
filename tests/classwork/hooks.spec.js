const {test, expect} = require('@playwright/test');

//Create a hook to log "Start of Test class with before All"

//Create a hook to go to 'https://www.saucedemo.com/' web page

//Create a hook to close 'page'

//Create a hook to log "End of Test class with after All"

//if hooks are set right you should see a log then tow passed tests and again a log at the end of execution

test('get by role', async ({page}) => {
    const locator = await page.getByRole('textbox', {name: 'Username'})
    await locator.highlight()
    await expect(locator).toBeVisible();
});

test('get by text', async ({page}) => {
    const locator = await page.getByText('Swag Labs')
    await locator.highlight()
    await expect(locator).toBeVisible();
});