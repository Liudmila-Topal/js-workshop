const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Multiplication operator with numbers", () => {
    // Multiply two numbers
    logger.info(100 * 20);

    // Multiply infinity with a number
    logger.info(Infinity * 100);

    // Multiply infinity with 0
    logger.info(Infinity * 0);

    // Multiply NaN with a number
    logger.info(NaN * 100);
});

test("Multiplication operator with strings and non-numbers", () => {
    // Multiply a non-numeric string by a number
    logger.info("Hello" * 20);

    // Multiply a numeric string by a number
    logger.info("100" * 100);
});
