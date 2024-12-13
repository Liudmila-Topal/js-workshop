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

    // Assert
    expect(result).toBe(5);
});

test('multiply method should return the product of two numbers', () => {
    // TODO: Create two variables

    // TODO: Call the multiply function

    // TODO: Check that actual result is the same as expected and add a log
});

// TODO: add a test where divide() should return the quotient of two numbers

// TODO: add a test where divide() should throw an error when dividing by zero
