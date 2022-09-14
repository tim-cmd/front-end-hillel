function createCalculator(initialVal){
  let result = initialVal;
  return {
    set:  (operand) => result  = operand,
    sum:  (operand) => result += operand,
    sub:  (operand) => result -= operand,
    div:  (operand) => result /= operand,
    mult: (operand) => result *= operand
  };
}

const calc = createCalculator(10);

console.log('sum',calc.sum(5)); // 15
console.log('mult',calc.mult(10)); // 150
console.log('sub',calc.sub(40)); // 110
console.log('mult',calc.div(10)); // 11
console.log('set',calc.set(100)); // 100
