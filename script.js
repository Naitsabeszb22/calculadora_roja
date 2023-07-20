let currentOperand = '';
let previousOperand = '';
let currentOperator = null;

const display = document.getElementById('display');

function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentOperator !== null) calculate();
  currentOperator = operator;
  previousOperand = currentOperand;
  currentOperand = '';
}

function calculate() {
  if (currentOperator === null) return;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  switch (currentOperator) {
    case '+':
      currentOperand = (prev + current).toString();
      break;
    case '-':
      currentOperand = (prev - current).toString();
      break;
    case '*':
      currentOperand = (prev * current).toString();
      break;
    case '/':
      currentOperand = (prev / current).toString();
      break;
    default:
      return;
  }
  currentOperator = null;
  previousOperand = '';
  updateDisplay();
}

function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  currentOperator = null;
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentOperand || '0';
}
