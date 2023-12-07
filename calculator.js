let currentInput = '';
  let operator = '';
  let firstOperand = null;

  function clearDisplay() {
    document.getElementById('display').value = '';
    currentInput = '';
    operator = '';
    firstOperand = null;
  }

  function backspace() {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').value = currentInput;
  }

  function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
  }

  function setOperator(op) {
    if (currentInput !== '') {
      if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
      } else {
        calculate();
        operator = op;
      }
    } else {
      displayError('Invalid');
    }
  }

  function calculate() {
    if (currentInput !== '' && firstOperand !== null) {
      const secondOperand = parseFloat(currentInput);
      switch (operator) {
        case '+':
          currentInput = firstOperand + secondOperand;
          break;
        case '-':
          currentInput = firstOperand - secondOperand;
          break;
        case '*':
          currentInput = firstOperand * secondOperand;
          break;
        case '/':
          if (secondOperand !== 0) {
            currentInput = firstOperand / secondOperand;
          } else {
            displayError('Cannot divide by zero.');
            return;
          }
          break;
        default:
          displayError('Invalid operator.');
          return;
      }
      document.getElementById('display').value = currentInput;
      firstOperand = null;
      operator = '';
    }
  }

  function toggleNegation() {
    if (currentInput !== '') {
      currentInput = -parseFloat(currentInput);
      document.getElementById('display').value = currentInput;
    } else {
      displayError('Invalid');
    }
  }

  function applyPercentage() {
    if (currentInput !== '') {
      currentInput = parseFloat(currentInput) / 100;
      document.getElementById('display').value = currentInput;
    } else {
      displayError('Invalid');
    }
  }

  function displayError(message) {
    document.getElementById('display').value = message;
  }