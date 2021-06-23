// Imports
import * as math from './scripts/math.js'
import * as handler from './scripts/handlers.js'

// DOM Elements
export const display = document.querySelector('.input-display')
const operands = document.querySelectorAll('.operand')
const operators = document.querySelectorAll('.operator')
const equalsBtn = document.querySelector('.equals')
const clearBtn = document.querySelector('.clear')
const signBtn = document.querySelector('.sign')
const trashBtn = document.querySelector('.trash')

// Event Listeners
operands.forEach(operand => {
    operand.addEventListener('click', handler.handleOperand)
})
operators.forEach(operator => {
    operator.addEventListener('click', handler.handleOperator)
})
equalsBtn.addEventListener('click', handler.calculate)
clearBtn.addEventListener('click', handler.reset)
signBtn.addEventListener('click', handler.handleSign)
trashBtn.addEventListener('click', handler.handleTrash)


