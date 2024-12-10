const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/**
 * Pseudocode for checking if a number is positive, negative or zero
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT number
 *   IF number > 0 THEN
 *     PRINT "The number is positive"
 *   ELSE IF number < 0 THEN
 *     PRINT "The number is negative"
 *   ELSE
 *     PRINT "The number is zero"
 *   END IF
 * END
 */
test("Number classification as positive, negative, or zero", () => {
    const number = 30; // Replace with test values as needed

    if (number > 0) {
        logger.info("The number is positive.");
    } else if (number < 0) {
        logger.info("The number is negative.");
    } else {
        logger.info("The number is zero.");
    }
});
