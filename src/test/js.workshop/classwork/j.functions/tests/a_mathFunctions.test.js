// TODO: Add new functions division and subtraction in 'const'
const {add, multiply} = require('../utils/a_mathFunctions.js');

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test('should correctly add two numbers', () => {
    const result = add(3, 7); // 3, 7 - arguments of function
    expect(result).toBe(10);

    logger.log("Add function works as expected. Sum is:", result);
});

// TODO: Fix test and add log
test('should correctly multiply two numbers', () => {
    const result = mutiply(3, 7);
    expect(result).toBe(20);
});

// TODO: Create a new test and check 'division' function

// TODO: Create a new test and check 'subtraction' function