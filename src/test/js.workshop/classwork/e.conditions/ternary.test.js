const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/**
 Pseudocode for checking if a person is elgible to vote or not using ternary operator
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * START
 *   INPUT age
 *
 *   // Using a ternary operator to check eligibility
 *   eligibility = (age >= 18) ? "You are eligible to vote" : "You are not eligible to vote"
 *
 *   PRINT eligibility
 * END
 */

test("Check voting eligibility using ternary operator", () => {
    const age = 21; // Replace with test values as needed
    const eligibility = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote.";

    logger.info(eligibility);
});