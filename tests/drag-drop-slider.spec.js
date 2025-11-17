const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');
const { } = require('../pages/BasePage');
const { request } = require('http');

test('Drag slider to 95 and validate value', async ({ page }) => {

    // Enable Network logging
    page.on('request', request => console.log(`>> ${request.method()} ${request.url()}`));
    page.on('response', response => console.log(`<< ${response.status()} ${response.url()}`));

    const homePage = new HomePage(page);
    await homePage.navigate('/')
    await homePage.openDragDropSliderDemo();

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
});


