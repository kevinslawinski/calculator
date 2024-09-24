let first = '0';
let second = '0';
let operator = '';
let input = '';

const output = document.querySelector('.output');
const buttons = document.querySelectorAll('button');

function setDefaultState() {
  first = '0';
  second = '0';
  operator = '';
  input = "Hi I'm a calculator";
  output.innerHTML = input;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      input += button.innerHTML;
      output.innerHTML = input;
    } else if (button.classList.contains('dot')) {
      input += button.innerHTML;
      output.innerHTML = input;
    } else if (button.classList.contains('operator')) {
      operator = button.innerHTML;
    } else if (button.classList.contains('equal')) {
      operate(first, second, operator);
    } else if (button.classList.contains('clear')) {
      setDefaultState();
    }
  });
});

function add(first, second) {
  return first + second;
}

function subtract(first, second) {
  return first - second;
}

function multiply(first, second) {
  return first * second;
}

function divide(first, second) {
  return first / second;
}

function operate(first, second, operator) {
  switch (operator) {
    case '+':
      return add(first, second);
    case '-':
      return subtract(first, second);
    case '*':
      return multiply(first, second);
    case '/':
      return divide(first, second);
  }
}

setDefaultState();
