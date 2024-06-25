# automation-pw PRE-REQUISITE
1. NODE JS
2. npm init playwright@latest  (for creating a project from scratch)
3. npx playwright install


#USEFUL COMMANDS
1. npx playwright test 
    *run all tests

2. npx playwright test --grep @grepit
    *run specific test using grep

3. npx playwright test --headed
    *headed run. --headless for headless

4. npx playwright test --browser=all
    *run to all browsers

5. npx playwright test --debug
    *with debuging


#GLOBAL CONFIGURATION TIPS
https://playwright.dev/docs/test-configuration#global-configuration



# Allure report
1. npm i -D @playwright/test allure-playwright
2. npm install -g allure-commandline --save-dev
3. npx playwright test  or  npx playwright test --reporter=allure-playwright
4. allure serve allure-results
