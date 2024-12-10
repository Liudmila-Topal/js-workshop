const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/**
 * Pseudocode for checking if a number is even or odd
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT number
 *   IF number % 2 = 0 THEN
 *     PRINT "The number is even"
 *   ELSE
 *     PRINT "The number is odd"
 *   END IF
 * END
 */
test("Odd or even number classification", () => {
    const number = 11; // Replace with test values as needed

    if (number % 2 === 0) {
        logger.info("The number is even.");
    } else {
        logger.info("The number is odd.");
    }
});