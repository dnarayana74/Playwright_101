const { expect } = require('@playwright/test');

class BasePage {
    constructor(page) {
        this.page = page;
    }

    async navigate(urlPath = '') {
        await this.page.goto(`https://www.lambdatest.com/selenium-playground${urlPath}`)
    }

    async click(locator) {
        await locator.click();
    }

    async fill(locator, value) {
        await locator.fill(value);
    }

    async getText(locator) {
        return await locator.textContent();
    }

    async expectVisible(locator) {
        await expect(locator).toBeVisible();
    }
}

module.exports = { BasePage };