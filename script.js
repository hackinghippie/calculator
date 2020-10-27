//numbers
let number = document.querySelectorAll(".number");
let num0 = document.querySelector("#num0");
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let num6 = document.querySelector("#num6");
let num7 = document.querySelector("#num7");
let num8 = document.querySelector("#num8");
let num9 = document.querySelector("#num9");

//operators
let opEqual = document.querySelector("#op-equal");
let opSum = document.querySelector("#op-sum");
let opMinus = document.querySelector("#op-minus");
let opDivide = document.querySelector("#op-divide");
let opMultiply = document.querySelector("#op-multiply");
let opDot = document.querySelector("#op-dot");
let opDelete = document.querySelector("#op-delete");

const results = document.querySelector('#results');

let currentDisplay = '0';
let currentOperation = '';
let lastOperation = '';
let lastOperand = '';
let resetDisplay = false;



function operate(x, y, operator) {
    x = +x;
    y = +y;
    switch(operator) {
        case '+':
            return x + y;
            break;
        case '-':
            return x - y;
            break;
        case '*':
            return x * y;
            break;
        case '/':
            if(y === 0) return alert('Wait, that is illegal!');
            return x / y;
            break;
        default:
            console.log('error - invalid operator', operator);
            break;
    }
}



function addNumberToScreen(e) {
const number = e.key || e.target.textContent.trim();
results.textContent === '0' || resetDisplay ? results.textContent = number : results.textContent += number;
resetDisplay = false;
}   


function prepareToOperate(e) {
    const operator = e.key || e.target.textContent.trim();

    if(operator === '=' && (currentOperation || lastOperation)) {
        results.textContent = operate(currentDisplay, results.textContent, currentOperation || lastOperation);
        lastOperation = currentOperation ? currentOperation : lastOperation;
        currentOperation = '';
    } else if(currentOperation) {
        results.textContent = operate(currentDisplay, results.textContent, currentOperation);
        lastOperation = currentOperation;
        currentDisplay = results.textContent;
        currentOperation = operator;
    } else if(e.target.textContent.trim() !== '=') {
        currentOperation = operator;
        currentDisplay = results.textContent;
    }
    

    resetDisplay = true;
}

function addDecimal() {
    if(!results.textContent.includes('.')) {
        results.textContent += '.';
    }
}

function clearCalculator() {
    currentDisplay = '';
    currentOperation = '';
    lastOperation = '';

    results.textContent = '';
    resetDisplay = false;
}

function convertToPercent() {
    results.textContent = +results.textContent / 100;
}

function switchSign() {
    results.textContent = +results.textContent * -1;
}

function keydownHandler(e) {
    if(e.key === '.') {
        addDecimal();
    } else if(/\d/.test(e.key)) {
        addNumberToScreen(e);
    } else if('-+/*'.includes(e.key)) {
        prepareToOperate(e)
    } else if(e.key === 'Enter' || e.key === '=') {
        prepareToOperate({key: '='});
    } else if(e.key === 'Backspace') {
        results.textContent = results.textContent.substring(0, results.textContent.length - 1);
    } else if(e.key === '%') {
        convertToPercent();
    }

    //keycodes for numbers
    if(event.keyCode == 96 || event.keyCode == 48) {
        console.log('0 was pressed');
        num0.style.color = "white";
        setTimeout(function() {
            num0.style.color = "transparent";
        }, 500);
        
    } else if (event.keyCode == 97 || event.keyCode == 49) {
        console.log('1 was pressed');
        num1.style.color = "white";
        setTimeout(function() {
            num1.style.color = "transparent";
        }, 500);

    } else if (event.keyCode == 98 || event.keyCode == 50) {
        console.log('2 was pressed');
        num2.style.color = "white";
        setTimeout(function() {
            num2.style.color = "transparent";
        }, 500);

    } else if (event.keyCode == 99 || event.keyCode == 51) {
        console.log('3 was pressed');
        num3.style.color = "white";
        setTimeout(function() {
            num3.style.color = "transparent";
        }, 500);

    } else if (event.keyCode == 100 || event.keyCode == 52) {
        console.log('4 was pressed');
        num4.style.color = "white";
        setTimeout(function() {
            num4.style.color = "transparent";
        }, 500);

    } else if (event.keyCode == 101 || event.keyCode == 53) {
        console.log('5 was pressed');
        num5.style.color = "white";
        setTimeout(function() {
            num5.style.color = "transparent";
        }, 500);

    } else if (event.keyCode == 102 || event.keyCode == 54) {
        console.log('6 was pressed');
        num6.style.color = "white";
        setTimeout(function() {
            num6.style.color = "transparent";
        }, 500);

    } else if (event.keyCode == 103 || event.keyCode == 55) {
        console.log('7 was pressed');
        num7.style.color = "white";
        setTimeout(function() {
            num7.style.color = "transparent";
        }, 500);

    } else if (event.keyCode == 104 || event.keyCode == 56) {
        console.log('8 was pressed');
        num8.style.color = "white";
        setTimeout(function() {
            num8.style.color = "transparent";
        }, 500);

    } else if (event.keyCode == 105 || event.keyCode == 57) {
        console.log('9 was pressed');
        num9.style.color = "white";
        setTimeout(function() {
            num9.style.color = "transparent";
        }, 500);

    //keycodes for operators
    } else if (event.keyCode == 107) {
        console.log('+ was pressed');
        opSum.style.color = "white";
        setTimeout(function() {
            opSum.style.color = "transparent";
        }, 500);

    } else if (event.keyCode == 109) {
        console.log('- was pressed');
        opMinus.style.color = "white";
        setTimeout(function() {
            opMinus.style.color = "transparent";
        }, 500);
    } else if (event.keyCode == 106) {
        console.log('* was pressed');
        opMultiply.style.color = "white";
        setTimeout(function() {
            opMultiply.style.color = "transparent";
        }, 500);
    } else if (event.keyCode == 111) {
        console.log('/ was pressed');
        opDivide.style.color = "white";
        setTimeout(function() {
            opDivide.style.color = "transparent";
        }, 500);
    } else if (event.keyCode == 13) {
        console.log('= was pressed');
        opEqual.style.color = "white";
        setTimeout(function() {
            opEqual.style.color = "transparent";
        }, 500);
    } else if (event.keyCode == 190 || event.keyCode == 110) {
        console.log('. was pressed');
        opDot.style.color = "white";
        addDecimal()
        setTimeout(function() {
            opDot.style.color = "transparent";
        }, 500);
    } else if (event.keyCode == 8 || event.keyCode == 46 ) {
        console.log('delete was pressed');
        opDelete.style.color = "#fc6c29";
        clearCalculator()
        setTimeout(function() {
            opDelete.style.color = "transparent";
        }, 500);
}   }

document.querySelector('#op-delete').addEventListener('click', clearCalculator);
document.querySelector('#op-dot').addEventListener('click', addDecimal);

document.querySelectorAll('.number').forEach(btn => btn.addEventListener('click', addNumberToScreen));
document.querySelectorAll('.operator').forEach(btn => btn.addEventListener('click', prepareToOperate));

window.addEventListener('keydown', keydownHandler);
