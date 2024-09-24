let first = '';
let second = '';
let operator = '';
let input = '';

const output = document.querySelector('.output');
const buttons = document.querySelectorAll('button');

function setDefaultState() {
  first = '';
  second = '';
  operator = '';
  input = '';
  output.innerHTML = input;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.classList.contains('number')) {
      if (operator === '') {
        first += button.innerHTML;
        output.innerHTML = first;
      } else {
        second += button.innerHTML;
        output.innerHTML = second;
      }
    } else if (button.classList.contains('dot')) {
      if (operator === '') {
        first += button.innerHTML;
        output.innerHTML = first;
      } else {
        second += button.innerHTML;
        output.innerHTML = second;
      }
    } else if (button.classList.contains('operator')) {
      operator = button.innerHTML;
    } else if (button.classList.contains('equal')) {
      if (armedAndReady()) {
        output.innerHTML = operate(first, second, operator);
      }
    } else if (button.classList.contains('clear')) {
      setDefaultState();
    }
  });
});

function armedAndReady() {
  if (operator === '' || second === '') {
    return false;
  }
  return true;
}

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
