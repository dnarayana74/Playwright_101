const { test, expect } = require('@playwright/test');
const { BasePage } = require('../pages/BasePage');
const { request } = require('http');

test('Input Form Submit validations and success flow', async ({ page }) => {

    // Enable Network logging
    page.on('request', request => console.log(`>> ${request.method()} ${request.url()}`));
    page.on('response', response => console.log(`<< ${response.status()} ${response.url()}`));

    const basePage = new BasePage(page);
    await basePage.navigate('/input-form-demo');

    await page.fill('#name', 'Sathya');
    await page.fill('#inputEmail4', 'sathya@example.com');
    await page.fill('#inputPassword4', 'password123');
    await page.fill('#company', 'QA Automation');
    await page.fill('#websitename', 'playwright101.com');
    await page.selectOption('select[name="country"]', { label: 'India' });
    await page.fill('#inputCity', 'Hyderabad');
    await page.fill('#inputAddress1', '123 Test Street');
    await page.fill('#inputAddress2', 'Block 7');
    await page.fill('#inputState', 'Telangana');
    await page.fill('#inputZip', '500001');


    const submitBtn = page.getByRole('button', { name: 'Submit' });

    await expect(submitBtn).toBeEnabled();
    await submitBtn.click({ force: true });

    const successMessage = page.locator('.success-msg');
    await expect(successMessage).toBeVisible();
});
