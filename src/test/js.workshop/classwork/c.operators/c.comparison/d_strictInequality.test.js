const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Strict inequality operator with the same data types", () => {
    let a = 2, b = 2, c = 3;
    let d = {name: "Ram"};
    let e = {name: "Ram"};
    let f = e;

    logger.info(a !== b);
    logger.info(a !== c);
    logger.info(d !== e);
    logger.info(f !== e);
});

test("Strict inequality operator with different data types", () => {
    let g = 2;
    let h = "2";
    let i = true;
    let j = null;
    let k = undefined;

    logger.info(g !== h);
    logger.info(g !== i);
    logger.info(j !== k);
});
