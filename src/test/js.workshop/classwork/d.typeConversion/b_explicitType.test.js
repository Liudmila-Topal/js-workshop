const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("Explicit conversion to String using String(value)", () => {
    const values = [
        String(0),
        String(''),
        String(true),
        String(NaN),
        String(undefined),
        String(null),
        String(Symbol()),
        String(Symbol('x')),
        String(-105.4),
        String([]),
        String({}),
        String({ a: 'a' })
    ];

    values.forEach((value, index) => {
        logger.info(`Type of value '${index + 1}' is`, typeof value);
    });
});

test("Explicit conversion to String using value.toString()", () => {
    let num = 5;
    let str = num.toString();
    let binStr = num.toString(2);

    logger.info(`Type of '${str}' is`, typeof str);
    logger.info(`Type of '${binStr}' is`, typeof binStr);
});

// Example 3: Explicit conversion to Number using Number(value)
test("Explicit conversion to Number using Number(value)", () => {
    const values = [
        Number(0),
        Number(''),
        Number(null),
        Number(NaN),
        Number(undefined),
        Number(true),
        Number(false),
        Number('   5    '),
        Number(' '),
        Number('\n'),
        Number('-1/2'),
        Number('105.4')
    ];

    values.forEach((value, index) => {
        logger.info(`Type of value '${index + 1}' is`, typeof value);
    });
});

test("Explicit conversion to Number using parseFloat()", () => {
    const values = [
        parseFloat(3.14),
        parseFloat('3.14'),
        parseFloat('  3.14  '),
        parseFloat('314e-2'),
        parseFloat('0.0314E+2'),
        parseFloat('3.14some non-digit characters'),
        parseFloat('NaN')
    ];

    values.forEach((value, index) => {
        logger.info(`Type of value '${index + 1}' is`, typeof value);
    });
});

test("Explicit conversion to Number using parseInt()", () => {
    const values = [
        parseInt('123'),
        parseInt('123', 10),
        parseInt('   123 '),
        parseInt('077'),
        parseInt('1.9'),
        parseInt('ff', 16),
        parseInt('0xFF', 16),
        parseInt('xyz')
    ];

    values.forEach((value, index) => {
        logger.info(`Type of value '${index + 1}' is`, typeof value);
    });
});
