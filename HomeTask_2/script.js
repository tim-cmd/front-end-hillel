const ACTIONS_ARR = ['+', '-', '/', '*'];
const INPUT_NUM_MSG = 'Please enter valid Number.';
const INPUT_ACTION_MSG = 'Choose an action from ' + ACTIONS_ARR.join(' , ');
const INVALID_INPUT_ERR = 'Invalid format. ';

const firstInput = askNumber();
const secondInput = askNumber();
const action = askAction();

const result = calculateResult(+firstInput, +secondInput, action);
const expression = `${firstInput} ${action} ${secondInput} = ${result}`;

alert(expression);

function askNumber(){
  let input = prompt(INPUT_NUM_MSG, 0);
  while(!isValidNum(input)){
    input = prompt(INVALID_INPUT_ERR + INPUT_NUM_MSG, input);
  }
  return input.trim();
}

function askAction(){
  let input = prompt(INPUT_ACTION_MSG, '+');
  while(!isValidAction(input)){
    input = prompt(INVALID_INPUT_ERR + INPUT_ACTION_MSG, input);
  }
  return input.trim();
}

function isValidNum(input){
  return input !== null && input.trim() !== '' && !isNaN(+input);
}

function isValidAction(input){
  return input !== null && ACTIONS_ARR.includes(input.trim());
}

function calculateResult(a, b, action){
  switch (action) {
    case '+': return a + b;
    case '-': return a - b;
    case '/': return a / b;
    case '*': return a * b;
  }

}