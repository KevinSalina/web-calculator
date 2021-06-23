// Main function - takes in 2 numbers and calls an operation on them.
export function performCalculation(x, y, operator) {
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

// Math functions
export function add(x, y) {
    let result = Number(x) + Number(y);
    return Number(result.toFixed(4))
}

export function subtract(x, y) {
    let result = Number(x) - Number(y);
    return Number(result.toFixed(4))
}

export function multiply(x, y) {
    let result = Number(x) * Number(y);
    return Number(result.toFixed(4))
}

export function divide(x, y) {
    let result = Number(x) / Number(y);
    return Number(result.toFixed(4))
}

