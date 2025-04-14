const add = function(num1,num2) {
  return num1 + num2
	
};

const subtract = function(num1,num2) {
	return num1 - num2
};

const sum = function(array) {
  var sum = 0
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i]
    
  }
  return sum
	
};

const multiply = function(array) {
  var multiply = 1
  for (let i = 0; i < array.length; i++) {
    multiply = multiply * array[i]
    
  }
  return multiply
	

};

const power = function(num1,num2) {
  var power = num1
  for (let i = 1; i < num2; i++) {
    power = power * num1
    
    
  }
  return power
	
};

const factorial = function() {
	
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
