const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

// Example 1: Subtraction operator with Numbers and Strings
test("Subtraction operator with Numbers and Strings", () => {
    // Subtract two numbers
    logger.info(200 - 100);

    // Subtract a number from a string containing a number
    logger.info("10" - 2);

    // Subtract a number from a string containing non-numeric characters
    logger.info("Hello" - 3);
});

// Example 2: Subtraction with BigInt data type
test("Subtraction operator with BigInt", () => {
    // Subtract two BigInt values
    logger.info(200n - 100n);

    // When we try to subtract the BigInt from a number we get an error.
    // logger.info(200n - 100);
});
