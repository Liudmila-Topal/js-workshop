const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/**
 * Pseudocode for printing first n numbers using a while loop
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT n
 *
 *   // Initialize a counter variable
 *   counter = 0
 *
 *   WHILE counter <= n DO
 *     PRINT counter
 *     counter = counter + 1  // Increment the counter
 *   END WHILE
 * END
 */

test("While loop counts up to the limit", () => {
    const limit = 50;
    let counter = 0;

    const results = [];
    while (counter <= limit) {
        results.push(counter); // Store the counter value for validation
        logger.info(counter);
        counter++;
    }
    logger.info(results);
});