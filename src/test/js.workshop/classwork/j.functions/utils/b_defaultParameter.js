// Function with a default parameter
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// TODO: Create a function for testing if one number divides another without a remainder
// * you can use 'throw new Error();' because division by zero is not allowed
function isDivisible(num1 = 1, num2 = 1) {
  if (num2 === 0) throw new Error("Division by zero is not allowed.");
  return num1 % num2 === 0;
}

// TODO: Add new function in 'module.exports'
module.exports = { greet, isDivisible };