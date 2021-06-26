// Imports
import * as helper from './helper.js'
import { performCalculation } from './math.js'
import { display } from '../app.js'

// Variables
let num1 = null; let num2 = null;
let num3 = null;
let currentCalcResult = null;
let currentOperator = null;
let previousOperator = null;
let numDisplay = '';


// Handle Operands
export function handleOperand() {
    if (numDisplay.length < 10 && this.value !== ".") {
        numDisplay += this.value
    }
    if (this.value === ".") {
        if (!numDisplay.includes('.')) {
            if (numDisplay === '') {
                numDisplay = '0.'
            } else {
                numDisplay += this.value
            }
        }
    }
    display.textContent = helper.numberWithCommas(numDisplay)
}

// Hanlde Operators
export function handleOperator() {
    if (!num1 && !currentOperator) {
        num1 = Number(numDisplay)
        numDisplay = '';
    } else if (num1 && currentOperator) {
        calculate()
    }
    currentOperator = this.value
}

// Handle Eqauls Btn
export function calculate() {
    if (!currentOperator) {
        if (num3) {
            currentCalcResult = performCalculation(num3, num1, previousOperator)
            num3 = currentCalcResult
        } else if (numDisplay) {
            num1 = num2
            num2 = Number(numDisplay)
            currentCalcResult = performCalculation(num2, num1, previousOperator)
            num3 = currentCalcResult
        } else {
            currentCalcResult = performCalculation(num1, num2, previousOperator)
            num1 = currentCalcResult
        }
    } else {
        if (num3) {
            num1 = num3
            num3 = null;
        }
        num2 = Number(numDisplay)
        currentCalcResult = performCalculation(num1, num2, currentOperator)
        num1 = currentCalcResult
        previousOperator = currentOperator
    }
    if (Math.floor(currentCalcResult).toString().length >= 10) {
        currentCalcResult = helper.toExpo(currentCalcResult, 2)
    }
    display.textContent = helper.numberWithCommas(currentCalcResult)
    currentOperator = null;
    numDisplay = '';
}

// Handle Sign Btn
export function handleSign() {
    if (numDisplay && !currentCalcResult) {
        numDisplay *= -1
        display.textContent = helper.numberWithCommas(numDisplay)
    } else if (currentCalcResult) {
        if (num1 === currentCalcResult) {
            currentCalcResult *= -1
            num1 *= -1
        } else if (num3 === currentCalcResult) {
            currentCalcResult *= -1
            num3 *= -1
        }
        display.textContent = helper.numberWithCommas(currentCalcResult)
    }
}

// Handle Trash Btn
export function handleTrash() {
    if (numDisplay) {
        numDisplay = numDisplay.slice(0, -1)
        display.textContent = helper.numberWithCommas(numDisplay)
        if (!numDisplay.length) {
            display.textContent = "0"
        }
    }
}

// Handle Reset Btn
export function reset() {
    num1 = null;
    num2 = null;
    num3 = null;
    currentCalcResult = null;
    currentOperator = null;
    previousOperator = null;
    numDisplay = '';
    display.textContent = '0';
}