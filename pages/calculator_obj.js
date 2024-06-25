exports.Calculator_Obj = class Calculator_Obj {
    constructor(page) {
        this.page = page;
        this.selectBuild = '#selectBuild';
        this.buildItem = (i) => `[name="selectBuild"] option[value="${i}"]`;
        this.txtNumFirst = '#number1Field';
        this.txtNumSecond = '#number2Field';
        this.selectOperation = '#selectOperationDropdown';
        this.operationItem = (i) => `[name="selectOperation"] option[value="${i}"]`;
        this.btnCalculate = '#calculateButton';
        this.txtAnswer = '#numberAnswerField';
        this.btnClear = '#clearButton';
    }
}
