function onClick() {
  const inputsAreEmpty = checkInput();

  console.log(inputsAreEmpty)
  console.log(inputsAreEmpty)

  if (inputsAreEmpty) {
    label.textContent = 'Error: one or both inputs are empty.';
  }
  else{
    updateLabel();
  }
}

function checkInput() {
  const number1 = getNumber1();
  const number2 = getNumber2();

  console.log(number1 )
  console.log(number2)

  if (number1 === '' || number2 === '') {
    return true;
  } else {
    return false;
  }
}

function updateLabel() {
  let addend1 = getNumber1();
  let addend2 = getNumber2();
  let sum = addend1 + addend2;
  label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}

function getNumber1() {
  return inputs[0].value;
}

function getNumber2() {
  return inputs[1].value;
}

let inputs = document.querySelectorAll('input');
let label = document.querySelector('p');
let button = document.querySelector('button');
button.addEventListener('click', onClick);
