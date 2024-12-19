// @ts-check
const {test, expect} = require('@playwright/test');
const {sauceDemoPage} = require("./pageobjects/SauceDemoPage");

//Using page object souceDemoPage.userNamePlaceHolder validate it is attached
test('assert to be attached', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(await page.getByPlaceholder(sauceDemoPage.userNamePlaceHolder)).toBeAttached()
});

//Validate that 'val' is checked
test('assert to be checked', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');
    const val = await page.getByRole('checkbox').nth(1)
    await expect(val).toBeChecked()
});

//Using page object souceDemoPage.userNamePlaceHolder validate it is empty
test('assert to be empty', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(await page.getByPlaceholder(sauceDemoPage.userNamePlaceHolder)).toBeEmpty()
});

//Using page object souceDemoPage.userNamePlaceHolder validate it is visible
test('assert to be visible', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(await page.getByPlaceholder(sauceDemoPage.userNamePlaceHolder)).toBeVisible()
});

//Using page object souceDemoPage.logInCredentialsTextTestId validate it has text 'expectedText'
test('assert to have text', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    const expectedText = "Accepted usernames are:standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user"
    await expect(await page.getByTestId(sauceDemoPage.logInCredentialsTextTestId)).toHaveText(expectedText)
});

//Using page object souceDemoPage.logInCredentialsTextTestId validate it contains text "user"
test('assert to contain text', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(await page.getByTestId(sauceDemoPage.logInCredentialsTextTestId)).toContainText("user")
});


