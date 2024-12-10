const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/**
 * Pseudocode for checking if a number is even
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT number
 *   IF number % 2 = 0 THEN
 *     PRINT "The number is even"
 *   END IF
 * END
 */
test("Check if a number is even", () => {
    const number = 10; // Replace with test values as needed

    if (number % 2 === 0) {
        logger.info("The number is even.");
    }
});