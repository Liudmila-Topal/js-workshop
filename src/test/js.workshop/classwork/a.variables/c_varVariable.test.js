const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

/*
Example 1:
Test for declaring multiple variables in a single statement
*/
test("Declare multiple variables in a single statement", () => {
    var test1 = 12,
        test2 = 14,
        test3 = 16;

    function firstExample() {
        logger.info(test1, test2, test3); // Logs: 12 14 16
    }

    firstExample();
});

/*
Example 2:
Test for variable hoisting with `var`
*/
test("Variable hoisting with `var`", () => {
    logger.info(test4); // Logs: undefined due to hoisting

    var test4 = 50;
    logger.info(test4); // Logs: 50
});

/*
Example 3:
Test for redeclaring a variable in the same global block
*/
test("Redeclare a variable in the same global block", () => {
    var test5 = 99;
    var test5 = 999; // No error occurs
    logger.info(test5); // Logs: 999
});

/*
Example 4:
Test for redeclaring a variable in another scope
*/
test("Redeclare a variable in another function scope", () => {
    var test6 = 35;

    function forthExample() {
        var test6 = 1000; // Scoped to the function
        logger.info(test6); // Logs: 1000
    }

    forthExample();
    logger.info(test6); // Logs: 35 (original value preserved in global scope)
});
