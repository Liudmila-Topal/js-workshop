const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/**
 *
 * Pseudocode for printing array values using a for ... of loop
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 * // Define an array of fruits
 * fruits = ["Apple", "Banana", "Cherry", "Date"]
 *
 * // Using FOR...OF loop to iterate through the array
 * FOR fruit OF fruits DO
 * PRINT fruit
 * END FOR
 * END
 */

test("Iterate through an array using for...of loop", () => {
    const fruits = ["Apple", "Banana", "Cherry", "Date"];

    for (const fruit of fruits) {
        logger.info(fruit); // Logs each fruit
    }
});