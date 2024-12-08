// script.js
const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const value = button.dataset.value;

    if (action === 'clear') {
      currentInput = '';
      previousInput = '';
      operator = '';
      display.textContent = '0';
    } else if (action === 'delete') {
      currentInput = currentInput.slice(0, -1) || '0';
      display.textContent = currentInput;
    } else if (action === 'calculate') {
      if (previousInput && operator && currentInput) {
        currentInput = eval(`${previousInput}${operator}${currentInput}`);
        operator = '';
        previousInput = '';
        display.textContent = currentInput;
      }
    } else if (['+', '-', '*', '/'].includes(value)) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      }
    } else {
      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
