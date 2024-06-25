import { Calculator_Obj } from './calculator_obj'
import { Utility } from '../helpers/utility';

const util = new Utility();
const calcEl = new Calculator_Obj();

exports.Calculator = class Calculator {
    constructor(page, expect) {
        this.page = page;
        this.expect = expect;
    }

    async selectBuildAndTestCalc(buildItem, operation) {
        await this.page.locator(calcEl.selectBuild).selectOption({label: `${buildItem}`})

        for (let i = 0; i < operation.length; i++) {
            await this.page.locator(calcEl.selectOperation).selectOption({label: `${operation[i]}`})

            switch (operation[i]) {
                case "Add":
                    await this.add();
                    break;
                case "Subtract":
                    await this.subtract();
                    break;
                case "Multiply":
                    await this.multiply();
                    break;
                case "Divide":
                    await this.divide();
                    break;
                case "Concatenate":
                    await this.concatenate();
                    break;
                default:
                    console.log("Operation default is Add");
            }
        }
    }

    async add() {
        // console.log("Add operation")
        const op1 = Math.floor(Math.random() * 10) + 1; // Returns a random integer from 1 to 10:
        const op2 = Math.floor(Math.random() * 10) + 1;
        const asn = op1 + op2;

        await this.page.locator(calcEl.txtNumFirst).fill(op1.toString());
        await this.page.locator(calcEl.txtNumSecond).fill(op2.toString());
        await this.page.click(calcEl.btnCalculate);
        await util.delay(); // await this.page.waitForTimeout(1000);
        let answer = await this.page.evaluate(() => { return $('#numberAnswerField').val(); });
        await this.expect.soft(asn.toString()).toEqual(answer.toString());
        await this.page.click(calcEl.btnClear);
        await this.expect.soft(this.page.locator(calcEl.txtAnswer)).toBeEmpty()
    }

    async subtract() {
        // console.log("Subract operation")
        const op1 = Math.floor(Math.random() * 10) + 1;
        const op2 = Math.floor(Math.random() * 10) + 1;
        const asn = op1 - op2;

        await this.page.locator(calcEl.txtNumFirst).fill(op1.toString());
        await this.page.locator(calcEl.txtNumSecond).fill(op2.toString());
        await this.page.click(calcEl.btnCalculate);
        await util.delay(); // await this.page.waitForTimeout(1000);
        let answer = await this.page.evaluate(() => { return $('#numberAnswerField').val(); });
        await this.expect.soft(asn.toString()).toEqual(answer.toString());
        await this.page.click(calcEl.btnClear);
        await this.expect.soft(this.page.locator(calcEl.txtAnswer)).toBeEmpty()
    }

    async multiply() {
        // console.log("Multiply operation")
        const op1 = Math.floor(Math.random() * 10) + 1;
        const op2 = Math.floor(Math.random() * 10) + 1;
        const asn = op1 * op2;

        await this.page.locator(calcEl.txtNumFirst).fill(op1.toString());
        await this.page.locator(calcEl.txtNumSecond).fill(op2.toString());
        await this.page.click(calcEl.btnCalculate);
        await util.delay(); // await this.page.waitForTimeout(1000);
        let answer = await this.page.evaluate(() => { return $('#numberAnswerField').val(); });
        await this.expect.soft(asn.toString()).toEqual(answer.toString());
        await this.page.click(calcEl.btnClear);
        await this.expect.soft(this.page.locator(calcEl.txtAnswer)).toBeEmpty()
    }

    async divide() {
        // console.log("Divide operation")
        const op1 = Math.floor(Math.random() * 10) + 1;
        const op2 = Math.floor(Math.random() * 10) + 1;
        const asn = op1 / op2;

        await this.page.locator(calcEl.txtNumFirst).fill(op1.toString());
        await this.page.locator(calcEl.txtNumSecond).fill(op2.toString());
        await this.page.click(calcEl.btnCalculate);
        await util.delay(); // await this.page.waitForTimeout(1000);
        let answer = await this.page.evaluate(() => { return $('#numberAnswerField').val(); });
        await this.expect.soft(asn.toString()).toEqual(answer.toString());
        await this.page.click(calcEl.btnClear);
        await this.expect.soft(this.page.locator(calcEl.txtAnswer)).toBeEmpty()
    }

    async concatenate() {
        // console.log("Concatenate operation")
        const op1 = Math.floor(Math.random() * 10) + 1;
        const op2 = Math.floor(Math.random() * 10) + 1;
        const asn = op1.toString() + op2.toString();
        
        await this.page.locator(calcEl.txtNumFirst).fill(op1.toString());
        await this.page.locator(calcEl.txtNumSecond).fill(op2.toString());
        await this.page.click(calcEl.btnCalculate);
        await util.delay(); // await this.page.waitForTimeout(1000);
        let answer = await this.page.evaluate(() => { return $('#numberAnswerField').val(); });
        await this.expect.soft(asn.toString()).toEqual(answer.toString());
        await this.page.click(calcEl.btnClear);
        await this.expect.soft(this.page.locator(calcEl.txtAnswer)).toBeEmpty()
    }

}
