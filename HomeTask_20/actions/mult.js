function mult() {
  let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
    result *= arguments[i];
  }
  return result;
}
module.exports = mult;
