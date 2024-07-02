const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let total = array.reduce((total, current) => total + current, 0);
  return total;
};

const multiply = function(array) {
  let total = array.reduce((total, current) => total * current, 1);
  return total;
};

const power = function(a, b) {
	let powerArray = [];
  for (i = 0; i < b; i++) {
    powerArray[i] = a;
  }
  let total = powerArray.reduce((total, current) => total * current, 1);
  return total;
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  } 
  else if (number > 0) {
	let numberArray = [];
  let index = 0;
  for (i = 1; i <= number; i++) {
    numberArray[index] = i;
    index++;
    }
    let total = numberArray.reduce((total, current) => total * current, 1);
    return total; 
  }
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
