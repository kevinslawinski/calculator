let first;
let second;
let operator;
let input;
let result;

const output = document.querySelector('.output');
const buttons = document.querySelectorAll('button');

function setDefaultState() {
  first = '';
  second = '';
  operator = '';
  input = '';
  result = '';
  output.innerHTML = input;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (
      button.classList.contains('number') ||
      button.classList.contains('dot')
    ) {
      if (operator === '') {
        first += button.innerHTML;
        output.innerHTML = first;
      } else {
        second += button.innerHTML;
        output.innerHTML = second;
      }
    } else if (button.classList.contains('operator')) {
      if (armedAndReady()) {
        result = calculate(first, second, operator);
        output.innerHTML = result;
        first = result;
        second = '';
      }
      operator = button.innerHTML;
    } else if (button.classList.contains('equal')) {
      armedAndReady();
    } else if (button.classList.contains('clear')) {
      setDefaultState();
    }
  });
});

function armedAndReady() {
  if (first === '' || second === '' || operator === '') {
    return false;
  }
  result = calculate(first, second, operator);
  output.innerHTML = result;
  return true;
}

function calculate(first, second, operator) {
  switch (operator) {
    case '+':
      return Math.round((parseFloat(first) + parseFloat(second)) * 100) / 100;
    case '-':
      return Math.round((parseFloat(first) - parseFloat(second)) * 100) / 100;
    case '*':
      return Math.round(parseFloat(first) * parseFloat(second) * 100) / 100;
    case '/':
      return Math.round((parseFloat(first) / parseFloat(second)) * 100) / 100;
  }
}

setDefaultState();
