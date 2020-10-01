// Variables
let displayText = document.querySelector(".display-text");
let buttons = document.querySelectorAll(".button");
let operator = "";
let displayValue = 0;
let storedValue = 0;
let decimalToggle = "off"

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
    console.log(decimalToggle);
    if([0,1,2,3,4,5,6,7,8,9].indexOf(Number(input)) !== -1) {
        if(decimalToggle == "off") {
            displayValue = displayValue * 10 + Number(input);
        } else {
            console.log(displayValue);
            console.log(decimalToggle);
            displayValue.concat(input);
        }
    } else if(input == "c") {
        displayValue = 0;
        storedValue = 0;
        operator = "";
    } else if(input == "ce") {
        displayValue = 0;
    } else if(["+","-","/","*","÷","x"].indexOf(input) !== -1) {
        storedValue = displayValue;
        displayValue = 0;
        operator = input;
        decimalToggle = "off"
    } else if(input == "=" || input == "enter") {
        if(operator !== "") {
            displayValue = operate(storedValue, displayValue, operator);
            operator = "";
            storedValue = "";
        }
    } else if(input == "+/-" || input == "s") {
        displayValue = displayValue * -1;
    } else if(input == "⌫" || input == "backspace"){
        if(displayValue == 0){
            return
        } else {
            let numLength = displayValue.toString().length;
            displayValue = Number(displayValue.toString().substring(0,numLength-1));
        }
    } else if(input == "." && decimalToggle == "off") {
        displayValue = displayValue.toString().concat(".");
        decimalToggle = "on"
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
    if(operation == "+") {
        return add(num1, num2);
    } else if(operation == "-"){
        return subtract(num1, num2);
    } else if(operation == "*" || operation == "x"){
        return multiply(num1, num2);
    } else if(operation == "/" || operation == "÷"){
        return divide(num1, num2);
    } else {
        return "ERROR"
    }
}

