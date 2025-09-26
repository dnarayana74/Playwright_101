const { test, expect } = require('@playwright/test');
const { request } = require('http');
test('Lambda Test Selenium Playground Simple From Demo with logging', async ({ page }) => {

    // Enable Network logging
    page.on('request', request => console.log(`>> ${request.method()} ${request.url()}`));
    page.on('response', response => console.log(`<< ${response.status()} ${response.url()}`));

    // Navigate to Selenium Playground
    await page.goto('https://www.lambdatest.com/selenium-playground');

    // Locator 1: Click "Simple Form Demo" using text locator
    await page.getByText('Simple Form Demo').click();

    // Locator 2: Validate URL contains "simple-form-demo"
    await expect(page).toHaveURL(/simple-form-demo/);

    // Locator 3: Enter message with variable using an id locator
    const message = 'Welcome to LambdaTest';
    const messageInput = page.locator('input#user-message');
    await messageInput.waitFor({ state: 'visible' });
    await messageInput.scrollIntoViewIfNeeded();
    await messageInput.fill(message);

    // Locator 4: Click Get Checked Value using a CSS locator for button
    await page.locator('button:has-text("Get Checked Value")').click();

    // Locator 5: Validate displayed message using CSS Selector
    const resultSelector = page.locator('#message');
    await expect(resultSelector).toHaveText(message);

    // Screenshot after validation
    await page.screenshot({ path: 'final_step.png', fullPage: true });

})



