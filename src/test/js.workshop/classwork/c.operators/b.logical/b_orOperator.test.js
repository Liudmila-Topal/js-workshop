const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Logical OR operator with normal values", () => {
    logger.info(true || false); 
    logger.info(false || false);
    logger.info(1 || 0);        
    logger.info(1 || 2);        
    logger.info("1" || true);   
    logger.info("0" || true);   
});

test("Logical OR operator with function calls", () => {
    function a() {
        logger.info("Welcome");
        return true;
    }
    function b() {
        logger.info("Hello");
        return false;
    }

    logger.info(a() || b());
});
