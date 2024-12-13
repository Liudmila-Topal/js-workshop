const {Person} = require('../utils/f_constructorFunction');

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test('should create a new Person object with the given name and age', () => {
    const person = new Person('Alice', 30);
    const name = person.name;
    const age = person.age;

    expect(name).toBe('Alice');
    expect(age).toBe(30);

    logger.info("The Person name is:", name)
    logger.info("The Person age:", name)
});

test('should return a greeting message with the correct name and age', () => {
    // TODO: Call the Person function with arguments to get the corresponding output

    // TODO: Add necessary data to fix a log message
    expect(person.greet()).toBe('Hello, my name is Bob and I am 25 years old.');
    logger.info(`Hello, my name is ${name} and I am ${age} years old.`)
});

test('should allow creating multiple instances with independent data', () => {
    // TODO: Create multiple instances of Person

    // TODO: Check each property of new instances

    // TODO: Check greet method works independently for each instance

});

test('should allow updating properties of an instance', () => {
    const person = new Person('Eve', 28);

    // TODO: Update each property

    // TODO: Check that properties were updated and greet method works as expected
});