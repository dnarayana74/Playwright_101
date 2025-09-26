const { test, expect } = require('@playwright/test');
const { request } = require('http');

test('Input Form Submit validations and success flow', async ({ page }) => {

    // Enable Network logging
    page.on('request', request => console.log(`>> ${request.method()} ${request.url()}`));
    page.on('response', response => console.log(`<< ${response.status()} ${response.url()}`));

    // Open the Selenium Playground page
    await page.goto('https://www.lambdatest.com/selenium-playground');

    // Click "Input Form Submit"
    await page.getByText('Input Form Submit').click();

    // Click "Submit" without filling in any information to trigger error message
    await page.locator('//button[normalize-space()="Submit"]').click();;

    // validating the error message
    const requiredInput = page.locator('input[name="name"]');
    const isInvalid = await requiredInput.evaluate(input => input.validity.valueMissing);
    const validationMessage = await requiredInput.evaluate(input => input.validationMessage);
    expect(isInvalid).toBe(true);
    expect(validationMessage).toBe('Please fill out this field.');

    // Fill in Name, Email, other fields
    await page.locator('input[name="name"]').fill('Sathya');
    await page.locator('//input[@id="inputEmail4"]').fill('dnarayana74@gmail.com');
    await page.locator('input[name="password"]').fill('asdf123@');
    await page.locator('input[name="company"]').fill('LambdaTest');
    await page.locator('input[name="website"]').fill('www.lambdatest.com');
    await page.locator('select[name="country"]').selectOption({ label: 'India' });
    await page.locator('input[name="city"]').fill('Hyderabad');
    await page.locator('#inputAddress1').fill('Flat 409');
    await page.locator('#inputAddress2').fill('D Block');
    await page.locator('#inputState').fill('Telangana');
    await page.locator('//input[@id="inputZip"]').fill('500092');
    await page.locator('//button[normalize-space()="Submit"]').click();

    // Validate success message
    const successMsg = page.locator('//p[@class="success-msg hidden"]');
    await expect(successMsg).toHaveText('Thanks for contacting us, we will get back to you shortly.')

})



