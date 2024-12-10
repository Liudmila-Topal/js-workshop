const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/**
 * Pseudocode for printing first n numbers using a do...while loop
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT n
 *
 *   // Initialize a counter variable
 *   counter = 0
 *
 *   DO
 *     PRINT counter
 *     counter = counter + 1  // Increment the counter
 *   WHILE counter <= n
 * END
 */

test("do...while loop iterates until counter reaches the limit", () => {
    let limit = 50;
    let counter = 0;

    do {
        logger.info(`Current counter value: ${counter}, which is less than or equal to the limit: ${limit}`);
        counter++;
    } while (counter <= limit);
    logger.info(`Current counter value: ${counter}, which is more to the limit: ${limit}`);

});