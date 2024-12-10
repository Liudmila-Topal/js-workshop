const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Logical AND operator with normal values", () => {
    logger.info(true && false); 
    logger.info(true && true);
    logger.info(1 && 0);      
    logger.info(1 && 2);      
    logger.info("1" && true); 
    logger.info("0" && true); 
});

// Example 2: AND operator with function calls
test("Logical AND operator with function calls", () => {
    function a() {
        return true;
    }
    function b() {
        return true;
    }

    logger.info(a() && b());
});
