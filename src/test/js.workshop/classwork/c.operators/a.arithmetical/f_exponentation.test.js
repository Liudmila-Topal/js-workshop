const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Exponentiation operator with positive and negative numbers", () => {
    let a = 4;
    let b = 3;
    let c = -2;

    // 4 raised to the power of 3
    logger.info(a ** b);

    // 3 raised to the power of 4
    logger.info(b ** a);

    // -2 raised to the power of 4
    logger.info(c ** a);

    // 4 raised to the power of -2
    logger.info(a ** c);
});

// Example 2: Exponentiation with negative base
test("Exponentiation with negative base", () => {
    // Without parentheses, this would cause a syntax error in JavaScript
    // logger.info(-2 ** 3);

    // Correct usage with parentheses
    logger.info((-2) ** 3); // Logs: -8 (odd power keeps the sign negative)
});
