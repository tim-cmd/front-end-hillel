const supportedActions = { 
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

const action = getAction('Choose an action from "+", "-", "/", "*"');
const operandsArr = getNumbers('Enter valid numbers divided by comma (min: 2)');
const result = calculateResult(operandsArr, action);
alert(`Result: ${result}`);


function getNumbers(label){
  let input = ''; 
  do {
    input = prompt(label, input);
    console.log('input', input);
  } while(!isValidNumbers(input));
  
  return input.split(',').map(Number);
}

function getAction(label){
  let input = '+';
  do {
    input = prompt(label, input);
  } while(!isValidAction(input));

  return input;
}

function isValidNumbers(input){
  if(input == null || input.trim() === ''){
    return false;
  }
  const rawArr = input.split(',');
  if(rawArr.length < 2){
    return false;
  }
  return rawArr.every(isValidNum);
}

function isValidNum(input){
  return input.trim() !== '' && !isNaN(+input);
}

function isValidAction(input){
  return input in supportedActions;
}

function calculateResult(numList, operator){
  return numList.reduce(
    (sum, current) => supportedActions[operator](sum, current)
  );
}