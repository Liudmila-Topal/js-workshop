const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

// Example 1: Using the addition operator on primitive data types
test("Addition operator with primitive data types", () => {
    logger.info("Add two numbers: " + (1 + 2));
    logger.info("Add NaN to a number: " + (NaN + 1));
    logger.info("Add boolean true to a number: " + (true + 1));
    logger.info("Add boolean false to a number: " + (false + 1));
});

// Example 2: Using the addition operator for concatenation
test("Addition operator for string concatenation", () => {
    // Concatenate string and number
    logger.info("1" + 2);

    // Concatenate two strings
    logger.info("Hello " + "Geek");
});
