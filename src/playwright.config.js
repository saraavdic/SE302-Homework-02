// playwright.config.js
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',           // Directory where your tests are stored
  timeout: 30000,                // Max time for each test (in ms)
  retries: 1,                    // Retry failed tests
  use: {
    headless: true,              // Run tests without opening browser window
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure', // Take screenshot only when test fails
    video: 'retain-on-failure',     // Record video for failed tests
    trace: 'on-first-retry',        // Collect trace if test fails first time
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
});
