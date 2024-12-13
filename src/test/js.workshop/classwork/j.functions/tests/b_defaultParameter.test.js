const {greet} = require('../utils/b_defaultParameter');

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("should return a greeting with the provided name", () => {
    const result = greet("John");
    expect(result).toBe("Hello, John!");

    logger.info("A greet function returns the provided name:", result)
});

test("should return a greeting with the default name when no name is provided", () => {
    // TODO: call the greet function without argument

    // TODO: check that actual result is the same as expected

    // TODO: add a log

});

// TODO: add a test where greet function should handle an empty string as the provided name

// TODO: add a test where isDivide() should return true when the first number is divisible by the second

// TODO: add a test where isDivide() should return false when the first number is not divisible by the second

// TODO: add a test where isDivide() should return true when default parameters are used

// TODO: add a test where isDivide() should throw an error when dividing by zero