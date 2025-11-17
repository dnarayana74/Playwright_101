import { defineConfig } from '@playwright/test';
const { test, expect } = require('@playwright/test');

export default defineConfig({
  use: {
    headless: true,
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    baseURL: 'https://www.lambdatest.com/selenium-playground',
    trace: 'on', // Enable traceviewer for debugging
    console: 'retain', // Retain console logs

  },
  workers: 4, // This will run 4 tests in parallel
  projects: [
    {
      name: 'LambdaTest Playwright Grid',
      testDir: './tests', // Test directory
      use: {
        // LambdaTest capabilities
        browserName: 'chromium',
        headless: true,
        name: 'Playwright Parallel Test',
        lambdaTest: {
          username: process.env.LT_USERNAME,  // LambdaTest Username
          accessKey: process.env.LT_ACCESS_KEY,  // LambdaTest Access Key
          gridUrl: 'https://yourLambdaTestHubURL/wd/hub',  // LambdaTest Playwright Grid URL
        },
      },
    },
  ],
});

module.exports = defineConfig({
  reporter: [['html', { open: 'never' }]], // Enables HTML report
});

