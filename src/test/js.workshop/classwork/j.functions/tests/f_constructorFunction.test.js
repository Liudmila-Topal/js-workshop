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
    // TODO: Call the Person function to get the corresponding output
    const person = new Person('Bob', 25);

    // TODO: Add necessary data to fix a log message
    expect(person.greet()).toBe('Hello, my name is Bob and I am 25 years old.');
    logger.info(`Hello, my name is ${name} and I am ${age} years old.`)
});

test('should allow creating multiple instances with independent data', () => {
    // TODO: Create multiple instances of Person
    const person1 = new Person('Charlie', 40);
    const person2 = new Person('Diana', 35);

    // TODO: Check each property of new instances
    expect(person1.name).toBe('Charlie');
    expect(person1.age).toBe(40);
    expect(person2.name).toBe('Diana');
    expect(person2.age).toBe(35);

    // TODO: Check greet method works independently for each instance
    expect(person1.greet()).toBe('Hello, my name is Charlie and I am 40 years old.');
    expect(person2.greet()).toBe('Hello, my name is Diana and I am 35 years old.');
});

test('should allow updating properties of an instance', () => {
    const person = new Person('Eve', 28);

    // TODO: Update each property
    person.name = 'Evelyn';
    person.age = 29;

    // TODO: Check that properties were updated
    expect(person.name).toBe('Evelyn');
    expect(person.age).toBe(29);
    expect(person.greet()).toBe('Hello, my name is Evelyn and I am 29 years old.');
});