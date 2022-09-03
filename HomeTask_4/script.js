const supportedActions = { 
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
}

const action = getAction('Choose an action from "+", "-", "/", "*"');
const numsCount = getNumber('How many operands (min: 2)?', 2);
const useArray = confirm('Use Array-based calculation?');

const { aggregation, result } = useArray 
    ? calculateByArray(numsCount, action) 
    : calculateByLoop(numsCount, action);

const expression = `${aggregation} = ${result}`;
alert(expression);


function getNumber(label, minVal){
  let input = minVal; 
  do {
    input = prompt(label, input);
  } while(!isValidNum(minVal, input));
  
  return Number(input);
}

function getAction(label){
  let input = '+';
  do {
    input = prompt(label, input);
  } while(!isValidAction(input));

  return input;
}

function isValidNum(minVal, input){
  return input !== null && input.trim() !== '' && !isNaN(+input) && (isNaN(minVal) || +input >= minVal);
}

function isValidAction(input){
  return input in supportedActions;
}

function calculateByLoop(count, operator){
  let total = getNumber('Enter operand №1');
  let aggrStr = total.toString();
  
  for(let i = 2; i <= count; i++){
    let num_i = getNumber('Enter operand №'+i);
    aggrStr += operator + num_i;
    total = supportedActions[operator](total, num_i);
  }
  return { result : total, aggregation : aggrStr};
}

function calculateByArray(count, operator){
  let numList = [];
  for(let i = 1; i <= count; i++){
    numList.push(getNumber('Enter operand №'+i));
  }
  return { 
    result : numList.reduce(
              (sum, current) => supportedActions[operator](sum, current)
             ), 
    aggregation : numList.join(operator)
  };
}