const {expect} = require("@playwright/test");

class SauceDemoPage {
    constructor(page) {
        this.page = page;
        this.webPage = 'https://www.saucedemo.com/';
        this.userNamePlaceHolder = this.page.getByPlaceholder('Username');
        this.passwordFieldTestId = this.page.getByTestId('password');
        this.logInButtonClass = this.page.locator('#login-button');
        this.addToCartButtonTestId = this.page.getByTestId('add-to-cart');
        this.shoppingCardTestId = this.page.getByTestId('shopping-cart-link');
        this.checkOutButtonTestId = this.page.getByTestId('checkout');
        this.continueButtonTestId = this.page.getByTestId('continue');
        this.errorMessageTestId = this.page.getByTestId('error');
        this.logInCredentialsTextTestId = this.page.getByTestId('login-credentials');
    }

    async goTo() {
        await this.page.goto(this.webPage); // Fix typo: 'goTo' => 'goto'
    }

    async logIn(userName, password) {
        await this.userNamePlaceHolder.fill(userName);
        await this.passwordFieldTestId.fill(password);
        await this.logInButtonClass.click();
    }

    async addToCart(product) {
        await this.page.getByText(product, {exact: true}).click();
        await this.addToCartButtonTestId.click();
    }

    async checkoutCart() {
        await this.shoppingCardTestId.click();
        await this.checkOutButtonTestId.click();
        await this.continueButtonTestId.click();
    }

    async validateErrorMessageShown() {
        const errorMessage = this.errorMessageTestId;
        await errorMessage.highlight();
        await expect(errorMessage).toBeVisible();
    }
}

module.exports = {SauceDemoPage};