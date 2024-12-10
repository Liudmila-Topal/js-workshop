const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Less Than operator with String, Number, and Boolean", () => {
    logger.info("3" < 2);
    logger.info("2" < 3);
    logger.info(true < false);
});

test("Less Than operator with BigInt and other data types", () => {
    logger.info(2 < 2n);
    logger.info(5n < 4);
    logger.info(undefined < null);
    logger.info(null < undefined);
});
