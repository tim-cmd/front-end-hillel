function mult(...argsArr) {
  const result = argsArr.reduce((total, current) => (total *= current));
  return result;
}
module.exports = mult;
