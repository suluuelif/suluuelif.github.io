let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(op) {
  if (currentInput !== '') {
    operator = op;
    firstOperand = currentInput;
    currentInput = '';
    updateDisplay();
  }
}

function appendDecimal() {
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = '';
  updateDisplay();
}

function calculate() {
  let result;
  const secondOperand = currentInput;
  switch (operator) {
    case '+':
      result = parseFloat(firstOperand) + parseFloat(secondOperand);
      break;
    case '-':
      result = parseFloat(firstOperand) - parseFloat(secondOperand);
      break;
    case '*':
      result = parseFloat(firstOperand) * parseFloat(secondOperand);
      break;
    case '/':
      result = parseFloat(firstOperand) / parseFloat(secondOperand);
      break;
    default:
      return;
  }
  display.value = result;
}

function updateDisplay() {
  display.value = currentInput !== '' ? currentInput : '0';
}