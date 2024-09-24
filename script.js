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
  document.querySelector('.dot').disabled = false;
}

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (
      button.classList.contains('number') ||
      button.classList.contains('dot')
    ) {
      updateValue(button);
    } else if (button.classList.contains('operator')) {
      document.querySelector('.dot').disabled = false;
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

function updateValue(button) {
  operator === '' ? first += button.innerHTML : second += button.innerHTML;
  output.innerHTML = operator === '' ? first : second;
  if(button.classList.contains('dot')) {
    document.querySelector('.dot').disabled = true;
  }
}

function armedAndReady() {
  if (first === '' || second === '' || operator === '') {
    return false;
  }
  if (operator === '/' && second === '0') {
    alert('You cannot divide by zero');
    setDefaultState();
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
