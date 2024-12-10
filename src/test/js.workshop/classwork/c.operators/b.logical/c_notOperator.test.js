const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Logical NOT operator on boolean and other data types", () => {
    logger.info(!true);
    logger.info(!false);
    logger.info(!"1");
    logger.info(!"");
    logger.info(!null);
});

test("Double NOT operator on boolean and other data types", () => {
// When we applied the NOT operator two times we got the original boolean value back.
    logger.info(!!true);
    logger.info(!!false);
    logger.info(!!"1");
    logger.info(!!"");
    logger.info(!!null);
});
