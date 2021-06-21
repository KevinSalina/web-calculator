
// DOM Elements
const display = document.querySelector('.input-display')
const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals')
const clearBtn = document.querySelector('.clear')

// Variables
let num1 = null;
let num2 = null;
let currentCalcResult = null;
let currentOperator = null;
let numDisplay = '';
display.textContent = '0'

// Math functions
function add(x, y) {
    return Number(x) + Number(y)
}

function subtract(x, y) {
    return Number(x) - Number(y)
}

function multiply(x, y) {
    return Number(x) * Number(y)
}

function divide(x, y) {
    return Number(x) / Number(y)
}

// Main Operate function - takes in 2 numbres and calls an operation on them.
function performCalculation(x, y, operator) {
    switch (operator) {
        case 'add':
            return add(x, y)
            break;
        case 'subtract':
            return subtract(x, y)
            break;
        case 'multiply':
            return multiply(x, y)
            break;
        case 'divide':
            return divide(x, y)
            break;
    }
}

// Event Listeners
operands.forEach(operand => {
    operand.addEventListener('click', handleOperand)
})

operators.forEach(operator => {
    operator.addEventListener('click', handleOperator)
})

equalsBtn.addEventListener('click', calculate)

clearBtn.addEventListener('click', reset)


// Handler Functions
function handleOperand() {
    numDisplay += this.value
    display.textContent = numDisplay
}

function handleOperator() {
    if (!num1 && !currentOperator) {
        num1 = Number(numDisplay)
        numDisplay = '';
    } else if (num1 && currentOperator) {
        calculate()
    }
    currentOperator = this.value
    currentVariables("Operator Pressed")
}

function calculate() {
    num2 = Number(numDisplay)
    currentVariables('Before Calculation')
    currentCalcResult = performCalculation(num1, num2, currentOperator)
    display.textContent = currentCalcResult
    num1 = currentCalcResult
    numDisplay = '';
    currentVariables('After Calculation')
}

function currentVariables(location) {
    console.log('%c' + location, 'color: yellow')
    console.log(`num1 = ${num1}`)
    console.log(`curentOperator = ${currentOperator}`)
    console.log(`num2 = ${num2}`)
    console.log(`currentCalcResult = ${currentCalcResult}`)
    console.log(`numDisply = ${numDisplay}`)
}

function reset() {
    num1 = null;
    num2 = null;
    currentCalcResult = null;
    currentOperator = null;
    numDisplay = '';
    display.textContent = '0';
    currentVariables('After Clear')
}

