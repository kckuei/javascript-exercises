const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  return array.reduce((previousValue, currentValue) => previousValue + currentValue,
    0);
};

const multiply = function (array) {
  return array.reduce((previousValue, currentValue) => previousValue * currentValue,
    1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num <= 1) {
    return 1;
  }
  result = 1;
  for (let i = 1; i < num + 1; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
