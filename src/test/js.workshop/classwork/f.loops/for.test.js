const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/**
 * Pseudocode for printing first n numbers using a for loop
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT n
 *
 *   // Using a FOR loop
 *   FOR counter FROM 1 TO n DO
 *     PRINT counter
 *   END FOR
 * END
 */

test("Loop logs numbers from 0 to a given limit", () => {
    const limit = 50;
    const results = [];

    for (let counter = 0; counter <= limit; counter++) {
        results.push(counter); // Capture numbers instead of logging
        logger.info(counter);
    }
    logger.info(results);
});