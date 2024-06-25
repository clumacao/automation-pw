const { test, expect } = require('@playwright/test');
// const fs = require('fs-extra');
const dataBuild = require('../data/build');
const dataOpr = require('../data/operation');

import { Calculator } from '../pages/calculator';
import { Calculator_Obj } from '../pages/calculator_obj'

const header = 'Basic Calculator';

let buildToTest = [  // builds 2, 4, 7, 8, 9 have bug just uncomment to test them
  dataBuild.prototype,
  dataBuild.one,
    // dataBuild.two,
  dataBuild.three,
    // dataBuild.four,
  dataBuild.five,
  dataBuild.six,
    // dataBuild.seven,
    // dataBuild.eight,
    // dataBuild.nine
];
let operation = [
  dataOpr.Add,
  dataOpr.Subtract,
  dataOpr.Multiply,
  dataOpr.Divide,
  dataOpr.Concatenate
];

test.describe('Exercise', async () => {

  for (let i = 0; i < buildToTest.length; i++) { // looping tests is only for this demo purpose
    test.only(`${header} Testing Build: ${buildToTest[i]}`, async ({page}) => {
      const caluclator = new Calculator(page, expect);
      const calcEl = new Calculator_Obj(page);

      await page.goto(process.env.URL);
      await expect(page.locator(calcEl.selectBuild)).toBeVisible();
      await expect(page.locator(calcEl.selectOperation)).toBeVisible();
      await expect(page.locator(calcEl.btnCalculate)).toBeVisible();
      await expect(page.locator(calcEl.txtNumFirst)).toBeVisible();
      await expect(page.locator(calcEl.txtNumSecond)).toBeVisible();
      await expect(page.locator(calcEl.txtAnswer)).toBeVisible();
      await expect(page.locator(calcEl.btnClear)).toBeVisible();
      await caluclator.selectBuildAndTestCalc(buildToTest[i], operation);
    });
  }

  // Note:  looped test case above covers all test scenarios from each build (only prototype considered for each test below)

  test(`test case Add - ${header} Testing Build: ${dataBuild.prototype}`, async ({page}) => {
    const caluclator = new Calculator(page, expect);
    const calcEl = new Calculator_Obj(page);

    await page.goto(process.env.URL);
    await expect(page.locator(calcEl.selectBuild)).toBeVisible();
    await expect(page.locator(calcEl.selectOperation)).toBeVisible();
    await expect(page.locator(calcEl.btnCalculate)).toBeVisible();
    await expect(page.locator(calcEl.txtNumFirst)).toBeVisible();
    await expect(page.locator(calcEl.txtNumSecond)).toBeVisible();
    await expect(page.locator(calcEl.txtAnswer)).toBeVisible();
    await expect(page.locator(calcEl.btnClear)).toBeVisible();
    // await caluclator.selectBuildAndTestCalc(dataBuild.one, operation);
    await page.locator(calcEl.selectOperation).selectOption({label: `${dataOpr.Add}`})
    await caluclator.add();
  });

  test(`test case Subtract - ${header} Testing Build: ${dataBuild.prototype}`, async ({page}) => {
    const caluclator = new Calculator(page, expect);
    const calcEl = new Calculator_Obj(page);

    await page.goto(process.env.URL);
    await expect(page.locator(calcEl.selectBuild)).toBeVisible();
    await expect(page.locator(calcEl.selectOperation)).toBeVisible();
    await expect(page.locator(calcEl.btnCalculate)).toBeVisible();
    await expect(page.locator(calcEl.txtNumFirst)).toBeVisible();
    await expect(page.locator(calcEl.txtNumSecond)).toBeVisible();
    await expect(page.locator(calcEl.txtAnswer)).toBeVisible();
    await expect(page.locator(calcEl.btnClear)).toBeVisible();
    // await caluclator.selectBuildAndTestCalc(dataBuild.one, operation);
    await page.locator(calcEl.selectOperation).selectOption({label: `${dataOpr.Subtract}`})
    await caluclator.subtract();
  });

  test(`test case Multiply - ${header} Testing Build: ${dataBuild.prototype}`, async ({page}) => {
    const caluclator = new Calculator(page, expect);
    const calcEl = new Calculator_Obj(page);

    await page.goto(process.env.URL);
    await expect(page.locator(calcEl.selectBuild)).toBeVisible();
    await expect(page.locator(calcEl.selectOperation)).toBeVisible();
    await expect(page.locator(calcEl.btnCalculate)).toBeVisible();
    await expect(page.locator(calcEl.txtNumFirst)).toBeVisible();
    await expect(page.locator(calcEl.txtNumSecond)).toBeVisible();
    await expect(page.locator(calcEl.txtAnswer)).toBeVisible();
    await expect(page.locator(calcEl.btnClear)).toBeVisible();
    // await caluclator.selectBuildAndTestCalc(dataBuild.one, operation);
    await page.locator(calcEl.selectOperation).selectOption({label: `${dataOpr.Multiply}`})
    await caluclator.multiply();
  });

  test(`test case Divide - ${header} Testing Build: ${dataBuild.prototype}`, async ({page}) => {
    const caluclator = new Calculator(page, expect);
    const calcEl = new Calculator_Obj(page);

    await page.goto(process.env.URL);
    await expect(page.locator(calcEl.selectBuild)).toBeVisible();
    await expect(page.locator(calcEl.selectOperation)).toBeVisible();
    await expect(page.locator(calcEl.btnCalculate)).toBeVisible();
    await expect(page.locator(calcEl.txtNumFirst)).toBeVisible();
    await expect(page.locator(calcEl.txtNumSecond)).toBeVisible();
    await expect(page.locator(calcEl.txtAnswer)).toBeVisible();
    await expect(page.locator(calcEl.btnClear)).toBeVisible();
    // await caluclator.selectBuildAndTestCalc(dataBuild.one, operation);
    await page.locator(calcEl.selectOperation).selectOption({label: `${dataOpr.Divide}`})
    await caluclator.divide();
  });

  test(`test case Concatenate - ${header} Testing Build: ${dataBuild.prototype}`, async ({page}) => {
    const caluclator = new Calculator(page, expect);
    const calcEl = new Calculator_Obj(page);

    await page.goto(process.env.URL);
    await expect(page.locator(calcEl.selectBuild)).toBeVisible();
    await expect(page.locator(calcEl.selectOperation)).toBeVisible();
    await expect(page.locator(calcEl.btnCalculate)).toBeVisible();
    await expect(page.locator(calcEl.txtNumFirst)).toBeVisible();
    await expect(page.locator(calcEl.txtNumSecond)).toBeVisible();
    await expect(page.locator(calcEl.txtAnswer)).toBeVisible();
    await expect(page.locator(calcEl.btnClear)).toBeVisible();
    // await caluclator.selectBuildAndTestCalc(dataBuild.one, operation);
    await page.locator(calcEl.selectOperation).selectOption({label: `${dataOpr.Concatenate}`})
    await caluclator.concatenate();
  });

});
