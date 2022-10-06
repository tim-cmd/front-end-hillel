'use strict';

function Calculator(value) {
  this.value = value;
  this.set = (operand) => (this.value = operand);
  this.sum = (operand) => (this.value += operand);
  this.sub = (operand) => (this.value -= operand);
  this.div = (operand) => (this.value /= operand);
  this.mult = (operand) => (this.value *= operand);
}

const calc = new Calculator(10);

console.log('sum', calc.sum(5)); // 15
console.log('mult', calc.mult(10)); // 150
console.log('sub', calc.sub(40)); // 110
console.log('mult', calc.div(10)); // 11
console.log('set', calc.set(100)); // 100
