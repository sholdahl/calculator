// Variables
let displayText = document.querySelector(".display-text");
let buttons = document.querySelectorAll(".button");
let operator = "";
let displayValue = "0";
let storedValue = "0";

// Event Listeners
window.addEventListener("keydown", handleKeypress);
buttons.forEach(button => {
    button.addEventListener("click", handleClick)
})

// Functions
function handleKeypress(e) {
    let input = e.key.toLowerCase();
    handleInput(input);
};

function handleClick() {
    let input = this.childNodes[1].textContent.toLowerCase();
    handleInput(input);
};

function handleInput(input) {
    if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(Number(input)) !== -1) {
        displayValue = displayValue.concat(input);
    } else if (input == "c") {
        displayValue = "0";
        storedValue = "0";
        operator = "";
    } else if (input == "ce") {
        displayValue = "0";
    } else if (["+", "-", "/", "*", "÷", "x"].indexOf(input) !== -1) {
        storedValue = displayValue;
        displayValue = "0";
        operator = input;
    } else if (input == "=" || input == "enter") {
        if (operator !== "") {
            displayValue = operate(Number(storedValue), Number(displayValue), operator).toString();
            operator = "";
            storedValue = "";
        }
    } else if (input == "+/-" || input == "s") {
        displayValue = (Number(displayValue) * -1).toString();
    } else if (input == "⌫" || input == "backspace") {
        if (displayValue == "0") {
            return
        } else {
            let numLength = displayValue.length;
            displayValue = displayValue.substring(0, numLength - 1);
        }
    } else if (input == "." && !displayValue.includes(".")) {
            displayValue = displayValue.concat(".");
    }
    if(displayValue == ""){
        displayValue = "0"
    } else if(displayValue.length > 1 && displayValue[0] == "0"){
        displayValue = displayValue.substring(1, displayValue.length)
    }
    displayText.textContent = displayValue;
}

// Math Functions
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
    if (operation == "+") {
        return add(num1, num2);
    } else if (operation == "-") {
        return subtract(num1, num2);
    } else if (operation == "*" || operation == "x") {
        return multiply(num1, num2);
    } else if (operation == "/" || operation == "÷") {
        return divide(num1, num2);
    } else {
        return "ERROR"
    }
}

