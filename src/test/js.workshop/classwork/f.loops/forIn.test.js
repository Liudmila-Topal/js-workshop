const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/**
 * Pseudocode for printing object properties using a for ... in loop
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   // Define an object with properties
 *   person = {
 *     name: "Alice",
 *     age: 30,
 *     city: "New York"
 *   }
 *
 *   // Using FOR...IN loop to iterate through the object properties
 *   FOR property IN person DO
 *     PRINT property + ": " + person[property]
 *   END FOR
 * END
 */

test("Iterate over object properties using for...in", () => {
    const person = {
        name: "Alice",
        age: 30,
        city: "New York"
    };
    
    const actualOutput = [];

    for (let property in person) {
        const output = `${property}: ${person[property]}`;
        logger.info(output); // Logs each property and value
        actualOutput.push(output);
    }
})