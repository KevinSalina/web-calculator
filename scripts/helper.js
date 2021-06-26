// Helper Functions
export function currentVariables(location) {
    console.log('%c' + location, 'color: yellow')
    console.log(`num1 = ${num1}`)
    console.log(`num2 = ${num2}`)
    console.log(`num3 = ${num3}`)
    console.log(`currentCalcResult = ${currentCalcResult}`)
    console.log(`curentOperator = ${currentOperator}`)
    console.log(`previousOperator = ${previousOperator}`)
    console.log(`numDisply = ${numDisplay}`)
}

export function numberWithCommas(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

export function toExpo(num, places) {
    return num.toExponential(places)
}