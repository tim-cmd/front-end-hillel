const INPUT_MSG = 'Please enter valid Number';
const INVALID_INPUT_ERR = 'You have entered invalid Number';

let firstInput = prompt(INPUT_MSG, 0);
let secondInput = prompt(INPUT_MSG, 0);

showResult();

function showResult(){
  if(isNaN(+firstInput)){
    alert(INVALID_INPUT_ERR + ' : ' + firstInput);

  } else if(isNaN(+secondInput)){
    alert(INVALID_INPUT_ERR + ' : ' + secondInput);

  } else {
    const summ = Number(firstInput) + Number(secondInput);
    alert(firstInput + ' + ' + secondInput + ' = ' + summ);
  }
}