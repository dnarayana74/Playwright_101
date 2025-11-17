const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { } = require('../pages/BasePage');
const { request } = require('http');

test('Simple Form Demo - Validate message display', async ({ page }) => {

    // Enable Network logging
    page.on('request', request => console.log(`>> ${request.method()} ${request.url()}`));
    page.on('response', response => console.log(`<< ${response.status()} ${response.url()}`));

    const homePage = new HomePage(page);
    await homePage.navigate('/')
    await homePage.openSimpleFormDemo();

    const inputMessage = page.locator('input#user-message');
    const showMessageBtn = page.locator('#showInput');
    const output = page.locator('#message')

    await inputMessage.fill('Hello Playwright!');
    await showMessageBtn.click();

    await expect(output).toHaveText('Hello Playwright!');
});



