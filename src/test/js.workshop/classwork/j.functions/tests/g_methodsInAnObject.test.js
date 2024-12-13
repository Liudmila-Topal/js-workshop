const {mathOperations} = require('../utils/g_methodsInAnObject');

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test('add method should return the sum of two numbers', () => {
    // Arrange
    const num1 = 10;
    const num2 = 5;

    // Act
    const result = mathOperations.add(num1, num2);

    // Assert
    expect(result).toBe(15);
    logger.info("The sum of two numbers:", result)
});

test('subtract method should return the difference between two numbers', () => {
    // Arrange
    const num1 = 10;
    const num2 = 5;

    // TODO: Call the subtract function
    const result = mathOperations.subtract(num1, num2);

    // Assert
    expect(result).toBe(5);
});

test('multiply method should return the product of two numbers', () => {
    // TODO: Create two variables
    const num1 = 10;
    const num2 = 5;

    // TODO: Call the multiply function
    const result = mathOperations.multiply(num1, num2);

    // TODO: Check that actual result is the same as expected and add a log
    expect(result).toBe(50);
});

// TODO: add a test where divide() should return the quotient of two numbers
test('divide method should return the quotient of two numbers', () => {
    // Arrange
    const num1 = 10;
    const num2 = 5;

    // Act
    const result = mathOperations.divide(num1, num2);

    // Assert
    expect(result).toBe(2); // 10 / 5 = 2
});

// TODO: add a test where divide() should throw an error when dividing by zero
test('divide method should throw an error when dividing by zero', () => {
    // Arrange
    const num1 = 10;
    const num2 = 0;

    // Act and Assert
    expect(() => mathOperations.divide(num1, num2)).toThrow("Cannot divide by zero");
});
