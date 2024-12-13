const {concatenate, sumAll} = require('../utils/c_restParameter');

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test('concatenate should join strings with a given separator', () => {
    let concatenate1 = concatenate('-', 'hello', 'world');
    expect(concatenate1).toBe('hello-world');
    logger.info("Concatenated string:", concatenate1)

    let concatenate2 = concatenate(' ', 'This', 'is', 'a', 'test');
    expect(concatenate2).toBe('This is a test');
    logger.info("Concatenated string:", concatenate2)

    let concatenate3 = concatenate(',', 'one', 'two', 'three');
    expect(concatenate3).toBe('one,two,three');
    logger.info("Concatenated string:", concatenate3)
});

test('sumAll should return the sum of all arguments', () => {
    const sumAll1 = sumAll(1, 2, 3, 4);
    expect(sumAll1).toBe(10);
    logger.info("The sum of all arguments:", sumAll1)

    const sumAll2 = sumAll(5, 5, 5);
    expect(sumAll2).toBe(15);
    logger.info("The sum of all arguments:", sumAll2)

    const sumAll3 = sumAll();
    expect(sumAll3).toBe(0);
    logger.info("The sum of all arguments:", sumAll3)
});

// TODO: add a test where filterOut() should remove all occurrences of the filterValue
test('filterOut should remove all occurrences of the filterValue', () => {
    expect(filterOut(2, 1, 2, 3, 2, 4)).toEqual([1, 3, 4]);
    expect(filterOut('a', 'a', 'b', 'c', 'a', 'd')).toEqual(['b', 'c', 'd']);
    expect(filterOut(true, true, false, true)).toEqual([false]);
});