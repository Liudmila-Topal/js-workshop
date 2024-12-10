const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Unary negation operator with numbers and strings", () => {
    const a = 20;
    const b = -a;

    logger.info(b);         
    logger.info(typeof b); 

    const x = "20";
    const y = -x;

    logger.info(y);           
    logger.info(typeof y);    
});

// Example 2: Unary negation operator working with numbers
test("Unary negation operator with numbers", () => {
    const c = 30;
    const x = "20";
    const d = -x; // x is converted to a number, and negated

    logger.info(c);        
    logger.info(typeof d);     
});

// Example 3: Unary negation operator with non-numbers
test("Unary negation operator with non-numbers", () => {
    const e = "30";
    const f = -e; // String "30" is converted to -30

    logger.info(f);        
    logger.info(typeof f);
});
