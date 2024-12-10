const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Unary plus operator with a string", () => {
    const x = "10";
    let y = +x;

    logger.info(`Type of 'x' is`, typeof x);
    logger.info(y);
    logger.info(`Type of 'y' is`, typeof y);
});

test("Unary plus operator with numbers", () => {
    const a = 100;
    const b = -100;
    const c = 20;

    logger.info(+a);
    logger.info(+b);
    logger.info(+c);
});

test("Unary plus operator with non-numbers", () => {
    const e = true;
    const f = false;
    const g = null;

    logger.info(+e);
    logger.info(+f);
    logger.info(+g);
});
