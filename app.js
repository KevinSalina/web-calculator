// DOM Elements
const calcBtn = document.querySelector('button')
const calcAnswerDisplay = document.querySelector('.calc-answer')
const errorMsg = document.querySelector('.error-msg')

// Add Function
function sum(num1, num2) {
    return Number(num1) + Number(num2)
}

// Calculate Function
function calculate() {
    const calcNum1 = parseInt(document.querySelector('#num1').value)
    const calcNum2 = parseInt(document.querySelector('#num2').value)

    if (isNaN(calcNum1) || isNaN(calcNum2)) {
        errorMsg.classList.add('active')
    } else {
        calcAnswerDisplay.textContent = sum(calcNum1, calcNum2)
        errorMsg.classList.remove('active')
    }
}


// Calculate Button Event Listener
calcBtn.addEventListener('click', calculate)


