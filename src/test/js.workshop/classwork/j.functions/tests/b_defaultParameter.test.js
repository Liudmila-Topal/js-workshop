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
    const result = greet();
    // TODO: check that actual result is the same as expected
    expect(result).toBe("Hello, Guest!");
    // TODO: add a log
    logger.info("A greet function returns the default name:", result)
});

// TODO: add a test where greet function should handle an empty string as the provided name
test("should handle an empty string as the provided name", () => {
    const result = greet("");
    expect(result).toBe("Hello, !");

    logger.info("A greet function handles an empty string as the provided name:", result)
});

// TODO: add a test where isDivide() should return true when the first number is divisible by the second
test("should return true when the first number is divisible by the second", () => {
    const result = isDivisible(10, 2);
    expect(result).toBe(true);
});

// TODO: add a test where isDivide() should return false when the first number is not divisible by the second
test("should return false when the first number is not divisible by the second", () => {
    const result = isDivisible(10, 3);
    expect(result).toBe(false);
});

// TODO: add a test where isDivide() should return true when default parameters are used
test("should return true when default parameters are used (1 divided by 1)", () => {
    const result = isDivisible();
    expect(result).toBe(true);
});

// TODO: add a test where isDivide() should throw an error when dividing by zero
test("should throw an error when dividing by zero", () => {
    expect(() => isDivisible(10, 0)).toThrow("Division by zero is not allowed.");
});