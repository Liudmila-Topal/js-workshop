const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Remainder with Numbers and Infinity", () => {
    // Modulus operation with two numbers
    logger.info(100 % 23);

    // Modulus operation with Infinity
    logger.info(Infinity % 20);
});

// Example 2: Modulus with negative numbers and NaN
test("Modulus with negative numbers and NaN", () => {
    // Modulus operation with a negative number
    logger.info(-100 % 23);

    // Modulus operation with NaN
    logger.info(NaN % 20);
});
