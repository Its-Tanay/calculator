let firstOperand = "";
let secondOperand = "";
let operatorValue = "";
let currentText = "";
let result = "";

const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");
const allClearButton = document.querySelector(".allClear");
const display = document.querySelector("#display");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
            appendNumbers(button.textContent);
            display.textContent = currentText;
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        appendOperator(button.textContent);
    });
});

equalsButton.addEventListener("click", () => {
    appendEquals();
});

clearButton.addEventListener("click", () => {
    appendClear();
});

allClearButton.addEventListener("click", () => {
    currentText = "";
    firstOperand = "";
    secondOperand = "";
    operatorValue = "";
    display.textContent = currentText;
});

function appendOperator(operator){
    if(firstOperand === "" && secondOperand === "" && operatorValue === ""){
        firstOperand = currentText;
    }

    if(firstOperand !== "" && secondOperand === "" && operatorValue === ""){
        operatorValue = operator;
        currentText = firstOperand + operatorValue;
        display.textContent = currentText;
    }

    if(firstOperand !== "" && secondOperand === "" && operatorValue !== "" && (currentText.length === firstOperand.length + 1)){
        operatorValue = operator;
        currentText = firstOperand + operatorValue;
        display.textContent = currentText;
    }

    if(firstOperand !== "" && (currentText.length > firstOperand.length + 1) && operatorValue !== ""){
        secondOperand = currentText.slice(firstOperand.length + 1);
        currentText = firstOperand + operatorValue + secondOperand;
        display.textContent = currentText;
        result = operate(operatorValue, firstOperand, secondOperand);
        display.textContent = result;
        firstOperand = result;
        secondOperand = "";
        operatorValue = operator;
        currentText = firstOperand + operatorValue;
        display.textContent = currentText;
    }
}

function appendEquals(){
    if(firstOperand === "" && secondOperand === "" && operatorValue === "") 

    if(firstOperand !== "" && secondOperand === "" && operatorValue !== "")
    
    console.log(firstOperand, operatorValue);

    if(firstOperand !== "" && (currentText.length > firstOperand.length + 1) && operatorValue !== ""){
        secondOperand = currentText.slice(firstOperand.length + 1);
        currentText = firstOperand + operatorValue + secondOperand;
        display.textContent = currentText;
        result = operate(operatorValue, firstOperand, secondOperand);
        display.textContent = result;
        currentText = result;
        firstOperand = "";
        secondOperand = "";
        operatorValue = "";
    }
};

function appendClear(){
    if (currentText === "") return;

    if(currentText !== "" && secondOperand === "" && operatorValue === ""){
        firstOperand = "";
        currentText = currentText.slice(0, -1);
        display.textContent = currentText;
    }
    else if(firstOperand !== "" && secondOperand === "" && operatorValue !== "" && (currentText.length === firstOperand.length + 1)){
        operatorValue = "";
        currentText = currentText.slice(0, -1);
        display.textContent = currentText;
    }
    else if(firstOperand !== "" && (currentText.length > firstOperand.length + 1) && operatorValue !== ""){
        currentText = currentText.slice(0, -1);
        display.textContent = currentText;
    }
};


function appendNumbers(number){
    if (number === "." && currentText.slice(firstOperand.length + 1).includes(".") && currentText.slice(-firstOperand.length)) return;
    currentText += number;
};


function add (a, b) {
    let c = a + b;
    return checkforDecimal(c);
}

function subtract (a, b) {
    let c = a - b;
    return checkforDecimal(c);
}

function multiply (a, b) {
    let c = a * b;
    return checkforDecimal(c);
}

function divide(a, b) {
    if (b === 0) {
      return "Not Defined";
    }
    let c = a / b;
    return checkforDecimal(c);
  }

function percentage (a, b) {
    let c = a * (b / 100);
    return checkforDecimal(c);
}

function checkforDecimal (x) {
    if (Number.isInteger(x)) {
        return x.toString();

    } else {
        return x.toFixed(3);
    }   
}

function operate (operator, a, b) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b); 
        case "x":
            return multiply(a, b);
        case "÷":
            return divide(a, b);
        case "%":
            return percentage(a, b);
    }
}
