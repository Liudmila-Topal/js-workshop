const {test, expect} = require('@playwright/test');


test('get by role', async ({page}) => {
    await page.goto("https://the-internet.herokuapp.com/drag_and_drop")
    await page.locator("#column-b").dragTo(page.locator("#column-a"))
    const locator = await page.locator(".column").nth(0)
    await locator.highlight()
    const text= await locator.textContent()
    console.log(text)
    await expect(text).toBe("B");
});