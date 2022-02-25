let displayText = "";
let currentOperator = "";
let firstNum =0;
let secondNum = 0;
let isCalculated = false;
const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', display));
const para = document.querySelector(".para");

function add(first, second){
    return +first + (+second);
};

function changeDisplay(){
    let num = para.textContent;
    para.textContent = "";
    if (firstNum === null){
        firstNum = num;
    } else if (!(firstNum === null) && secondNum === null) {
        secondNum = num;
    }
}

function subtract(first, second){
    return +first - (+second);
};

function multiply(first, second){
    return +first * (+second);
};

function divide(first, second){
    return +first / (+second);
};

function operate(operator, first, second){
    switch (operator){
        case "plus":
            return add(first,second);

        case "minus":
            return subtract(first,second);

        case "times":
            return multiply(first,second);

        case "divide":
            return divide(first,second);
        
        case "equal":
            return first;
    }
};

function display(e) {
    let clickedBtn = e.target;
    let classesArr = clickedBtn.className.split(" ");
    let numOrOperator = classesArr[1];
    if (numOrOperator === "numb")
    {
        if (isCalculated) {
            firstNum = Number(para.textContent);
            displayText = "";
            para.textContent = "";
        }
        let mathOperationName = classesArr[2];
        isCalculated = false;
        switch(mathOperationName) {
            case "one":
                displayText+="1";
                break;
            case "two":
                displayText+="2";
                break;
            case "three":
                displayText+="3";
                break;
            case "four":
                displayText+="4";
                break;
            case "five":
                displayText+="5";
                break;
            case "six":
                displayText+="6";
                break;
            case "seven":
                displayText+="7";
                break;
            case "eight":
                displayText+="8";
                break;
            case "nine":
                displayText+="9";
                break;
            case "zero":
                displayText+="0";
                break;
        }
        para.textContent = displayText;
    } else if (numOrOperator === "operator" || numOrOperator === "result")
    {
        let operatorName = classesArr[2];
        currentText = para.textContent;
        para.textContent = "";
        displayText = "";
        if (secondNum === 0 && firstNum !== 0){
            secondNum = Number(currentText);
            firstNum = operate(currentOperator,firstNum,secondNum);
            isCalculated = true;
            if (currentOperator == "equal") {
                para.textContent = firstNum;
            }
            currentOperator = operatorName;
            secondNum = 0;
            displayText = firstNum;
            para.textContent = displayText;
            isCalculated = true;
        } else if (firstNum === 0 && secondNum === 0) {
            firstNum = Number(currentText);
            currentOperator = operatorName;
            if (currentOperator == "equal") {
                para.textContent = firstNum;
            }
        } else if (firstNum !== 0 && secondNum !== 0) {
            firstNum = operate(currentOperator,firstNum,secondNum);
            if (currentOperator == "equal") {
                para.textContent = firstNum;
            }
            isCalculated = true;
            secondNum = 0;
            displayText = firstNum;
            para.textContent = displayText;
            isCalculated = true;
        }

    } else if (numOrOperator === "clear"){
        firstNum = 0;
        secondNum = 0;
        para.textContent = 0;
        displayText = "";
    } else if (numOrOperator === "dot") {
        if (!displayText.includes(".")){
            displayText +=".";
            para.textContent = displayText;
        }
    } else if (numOrOperator == "timesNeg1") {
        let outputText = para.textContent;
        if (outputText.startsWith("-")){
            para.textContent = outputText.slice(1,outputText.length);
        } else {
            para.textContent = outputText.substring(0,0) + "-" + outputText;
        }
    }
}



