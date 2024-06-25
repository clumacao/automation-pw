const { devices } = require('@playwright/test');
const settings = { path: '.env', defaults: '.env.defaults' };

require('dotenv-defaults').config(settings);

const baseURL = process.env.BASE_URL;
const browserName = process.env.BROWSERNAME;
const headless = false; // process.env.HEADLESS;
const screenshot = process.env.SCREENSHOT;
const retries = process.env.RETRIES;
const isMobile = true // process.env.ISMOBILE;
const parallel = process.env.PARALLEL === "false";
const workers = parseInt(process.env.WORKERS);
const viewportWidth = parseInt(process.env.VIEWPORTWIDTH);
const viewportHeight = parseInt(process.env.VIEWPORTHEIGHT);
const viewport = null;

const configDesktop = {
    retries,
    use: {
        // retries,
        headless,
        baseURL,
        browserName,
        screenshot,
        viewport,
        launchOptions: {
            args: [
                "--start-maximized",
                "--disable-extension",
                "--disable-gpu",
                "--proxy-server='direct://'",
                "--proxy-bypass-list=*",
                // "--window-size=1400,800"
                // "--window-size=1920,1080"
            ],
        },
        //
        // trace: 'on-first-retry',
    },
    workers,
    parallel,
    timeout: 12000,
    reporter: [
        // ['dot'],
        ['json', { outputFile: "test-result.json" }],
        ['html', { open: "always" }],
        // ['html', { trace: 'on-first-retry' }],
        ['allure-playwright', { outputFolder: 'test-result-allure' }],
        // ['list'],
        // ['line'],
        // ['dot'],
    ],
    //
    // testDir: './tests',
    // fullyParallel: true,
    // forbidOnly: !!process.env.CI,
    // retries: process.env.CI ? 2 : 0,
    // workers: process.env.CI ? 1 : undefined,
    // projects: [
    //     {
    //       name: 'chromium',
    //       use: { ...devices['Desktop Chrome'] },
    //     },

    //     {
    //       name: 'firefox',
    //       use: { ...devices['Desktop Firefox'] },
    //     },

    //     {
    //       name: 'webkit',
    //       use: { ...devices['Desktop Safari'] },
    //     },
    // ],
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
};

const configMobile = {
    retries,
    use: {
        // retries,
        headless,
        baseURL,
        screenshot,
        // ...devices['Pixel 5'],
        ...devices['iPhone 12'],
    },
    workers,
    parallel,
    timeout: 12000,
    reporter: [
        ['json', { outputFile: "test-result.json" }],
        ['html', { open: "always" }],
        ['allure-playwright', { outputFolder: 'test-result-allure' }]
    ],
};

(() => {
    if (isMobile == true) {
        module.exports = configMobile;
        console.log('Running Mobile...........');
    }
    else {
        module.exports = configDesktop;
        console.log('Running Desktop..........');
    }
})();


// // @ts-check
// const { defineConfig, devices } = require('@playwright/test');

// /**
//  * Read environment variables from file.
//  * https://github.com/motdotla/dotenv
//  */
// // require('dotenv').config();

// /**
//  * @see https://playwright.dev/docs/test-configuration
//  */
// module.exports = defineConfig({
//   testDir: './tests',
//   /* Run tests in files in parallel */
//   fullyParallel: true,
//   /* Fail the build on CI if you accidentally left test.only in the source code. */
//   forbidOnly: !!process.env.CI,
//   /* Retry on CI only */
//   retries: process.env.CI ? 2 : 0,
//   /* Opt out of parallel tests on CI. */
//   workers: process.env.CI ? 1 : undefined,
//   /* Reporter to use. See https://playwright.dev/docs/test-reporters */
//   reporter: 'html',
//   /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
//   use: {
//     /* Base URL to use in actions like `await page.goto('/')`. */
//     // baseURL: 'http://127.0.0.1:3000',

//     /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
//     trace: 'on-first-retry',
//   },

//   /* Configure projects for major browsers */
//   projects: [
//     {
//       name: 'chromium',
//       use: { ...devices['Desktop Chrome'] },
//     },

//     {
//       name: 'firefox',
//       use: { ...devices['Desktop Firefox'] },
//     },

//     {
//       name: 'webkit',
//       use: { ...devices['Desktop Safari'] },
//     },

//     /* Test against mobile viewports. */
//     // {
//     //   name: 'Mobile Chrome',
//     //   use: { ...devices['Pixel 5'] },
//     // },
//     // {
//     //   name: 'Mobile Safari',
//     //   use: { ...devices['iPhone 12'] },
//     // },

//     /* Test against branded browsers. */
//     // {
//     //   name: 'Microsoft Edge',
//     //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
//     // },
//     // {
//     //   name: 'Google Chrome',
//     //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
//     // },
//   ],

//   /* Run your local dev server before starting the tests */
//   // webServer: {
//   //   command: 'npm run start',
//   //   url: 'http://127.0.0.1:3000',
//   //   reuseExistingServer: !process.env.CI,
//   // },
// });
