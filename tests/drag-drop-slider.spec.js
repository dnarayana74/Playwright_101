const { test, expect } = require('@playwright/test');
const { request } = require('http');

test('Drag slider to 95 and validate value', async ({ page }) => {

    // Enable Network logging
    page.on('request', request => console.log(`>> ${request.method()} ${request.url()}`));
    page.on('response', response => console.log(`<< ${response.status()} ${response.url()}`));

    // Open the Selenium Playground page
    await page.goto('https://www.lambdatest.com/selenium-playground');

    // Click the "Drag & Drop Sliders" link using text locator
    await page.getByText('Drag & Drop Sliders').click();

    // Locate the slider with label "Default value 15" by input value attribute and drag the slider
    const slider = page.locator('input[type="range"][value="15"]');
    await slider.focus();

    let currentValue = Number(await slider.inputValue());
    const targetValue = 95;

    while (currentValue < targetValue) {
        await slider.press('ArrowRight');
        currentValue = Number(await slider.inputValue());
    }

    // Validate the displayed value shows "95"
    const rangeValue = page.locator('#rangeSuccess');
    await expect(rangeValue).toHaveText('95');

})



