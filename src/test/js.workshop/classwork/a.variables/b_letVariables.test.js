const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

// Example 1: The `num` variable is globally scoped and accessible anywhere in the program.
test("Global scope variable access", () => {
    let num = 10;
    logger.info(num);

    function firstExample() {
        logger.info(num);
    }

    firstExample();
});

// Example 2: The `num2` variable is declared inside the function and cannot be accessed outside.
test("Function scope variable access", () => {
    function fun() {
        let num2 = 15;
        logger.info(num2);
    }

    fun();

    // Uncommenting the following line would throw a ReferenceError because num2 is not defined in this scope.
    // logger.info(num2);
});

// Example 3: Variable `a` is redeclared inside a different block scope.
test("Block scope variable redeclaration", () => {
    let a = 77;

    {
        let a = 23; // This `a` is scoped to this block
        logger.info(a);
    }

    logger.info(a);
});

// Example 4: Variable `x` is redeclared inside the same block.
test("Variable redeclaration in the same block", () => {
    let x = 99;

    {
        let x = 1000; // This is legal because it is scoped to this block
        logger.info(x);
    }

    // Uncommenting the following line would throw a SyntaxError because `x` is already declared in the same scope.
    // let x = 55;

    logger.info(x); // Logs: 99
});
