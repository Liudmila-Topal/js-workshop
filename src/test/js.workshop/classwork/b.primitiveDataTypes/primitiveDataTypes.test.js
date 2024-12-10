const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

// Numbers data type
// Example 1: Scientific Notation
test("Scientific Notation", () => {
    let a = 156e5; // Large number
    let b = 156e-5; // Small number

    logger.info(`Type of '${a}' is`, typeof a);
    logger.info(`Type of '${b}' is`, typeof b);
});

// Example 2: Integer Precision
test("Integer Precision", () => {
    let c = 999999999999999; // Precise
    let d = 9999999999999999; // Loss of precision

    logger.info(`Type of '${c}' is`, typeof c);
    logger.info(`Type of '${d}' is`, typeof d);
});

// Example 3: Floating Point Precision
test("Floating Point Precision", () => {
    let x = 0.22;

    logger.info(`Type of '${x}' is`, typeof x);
});

// String data type
// Example 1: Single Quotes
test("Single Quotes String", () => {
    let str = 'Create String with Single Quote';

    logger.info(`Type of '${str}' is`, typeof str);
});

// Example 2: Double Quotes
test("Double Quotes String", () => {
    let str2 = "Create String with Double Quote";

    logger.info(`Type of '${str2}' is`, typeof str2);
});

// Example 3: String Constructor
test("String Constructor", () => {
    let str3 = String('Create String with String Constructor');

    logger.info(`Type of '${str3}' is`, typeof str3);
});

// Example 4: Template Literals (String Interpolation)
test("Template Literals", () => {
    let str4 = 'Template Literal String';
    let newStr = `String created using ${str4}`;

    logger.info(`Type of '${newStr}' is`, typeof newStr);
});

// Example 5: Empty String
test("Empty String", () => {
    let str5 = '';
    let str6 = "";

    logger.info("Empty String with Single Quotes: " + str5);
    logger.info("Empty String with Double Quotes: " + str6);
});

// Boolean data type
// Example 1: Boolean Values
test("Boolean Values", () => {
    let a1 = true;
    let a2 = false;

    logger.info(`Type of '${a1}' is`, typeof a1);
    logger.info(`Type of '${a2}' is`, typeof a2);
});

// Null data type
// Example 1: Null Value
test("Null Value", () => {
    const var2 = null;
    logger.info(`Type of '${var2}' is`, typeof var2);
});

// Undefined data type
// Example 1: Undefined Variable
test("Undefined Variable", () => {
    let newVar;
    logger.info(`Type of 'newVar' is`, typeof newVar);
});

// Example 2: Undefined Value in Functions
test("Undefined Value in Functions", () => {
    function test(name) {
        logger.info(`Hi ${name}`);
    }
    let x = test('Tom');
    logger.info(`Value in variable 'x' is ${x}`);
});

// Example 3: Undefined Value in Object Properties
test("Undefined Value in Object Properties", () => {
    const person = { name: "Alice" };
    let age = person.age;

    logger.info(`Type of 'age' is`, typeof age);
});
