const supportedActions = { 
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b
}

document.getElementById('submitBtn').addEventListener("click", handleSubmit);
  
function handleSubmit(){
  console.log('handleSubmit');
  const operandA = document.getElementById('operandA').value;
  const operandB = document.getElementById('operandB').value;
  
  if(isValidNum(operandA) && isValidNum(operandB)){
    const action = document.getElementById('action').value;
    const result = supportedActions[action](+operandA, +operandB);
    showResult(`${operandA} ${action} ${operandB} = ${result}`);
  } else {
    alert('Please enter valid Number(s)');
  }
}

function isValidNum(input){
  return input !== null && input.trim() !== '' && !isNaN(+input);
}

function showResult(expression){
  document.getElementById('resultOutput').innerText = expression;
}