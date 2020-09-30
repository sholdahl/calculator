let displayText = document.querySelector(".display-text");
let numbers = document.querySelectorAll(".number");
let posneg = document.querySelector(".posneg");
let dot = document.querySelector(".dot");
let operations = document.querySelectorAll(".operation")

const add = (num1, num2) => {
    return num1 + num2;
}
const subtract = (num1, num2) => {
    return num1 - num2;
}
const multiply = (num1, num2) => {
    return num1 * num2;
}
const divide = (num1, num2) => {
    return num1 / num2;
}

function operate(num1, num2, operation) {
    if(operation = "+") {
        add(num1, num2)
    } else if(operation = "-"){
        subtract(num1, num2)
    } else if(operation = "*"){
        multiply(num1, num2)
    } else if(operation = "/"){
        divide(num1, num2)
    } else {
        return "ERROR"
    }
}

