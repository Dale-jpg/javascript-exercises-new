const add = function(a,b) {
	 return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum,current) => sum + current, 0);
};

const multiply = function(arr) {
  return arr.reduce((product,current) => product * current);
};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(num) {
  let product = 1;
  for (i=num;i > 0;i--) {
    product *= i;
  }
	return product;
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
