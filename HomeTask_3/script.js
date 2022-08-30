
const MAX_NUM = getMaxNumber();

const lastNumber = getNumber();
const sumWrapper = calculateSum(lastNumber);

showResult(sumWrapper.evenSum, sumWrapper.oddSum);


function getNumber(){
  let input = 1; 
  do {
    input = prompt('Please enter valid Number between 1 and ' + MAX_NUM, input);
  } while(!isValidNum(input));

  return Number(input);
}

function isValidNum(input){
  return input !== null && input.trim() !== '' && !isNaN(input) 
          && +input > 0 && +input <= MAX_NUM;
}

function getMaxNumber(){
  console.log('maxNumber call');
  let safeSum = 0;
  for(let i = 1; i <= Number.MAX_SAFE_INTEGER; i++){
    if(isEven(i)){
      if(Number.isSafeInteger(safeSum + i)){
        safeSum += i;
      } else {
        return i;
      }
    } 
  }
}

function calculateSum(lastNumber){
  let oddSum = 0;
  let evenSum = 0;
  for(let i = 1; i <= lastNumber; i++){
    if(isEven(i)){
      evenSum += i;
    } else {
      oddSum += i;
    }
  }
  return {
    oddSum: oddSum,
    evenSum: evenSum
  };
}

function isEven(a){
  return a % 2 == 0;
}

function showResult(evenSum, oddSum){
  alert(`Сумма четных: ${evenSum}
       \nСумма нечетных: ${oddSum}`);
}

