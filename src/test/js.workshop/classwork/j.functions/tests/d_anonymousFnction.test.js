const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test('should correctly add two numbers', () => {
    // function(a, b) - anonymous function
    const add = function(a, b) {
        return a + b;
    };
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
});

test('should filter even numbers from an array', () => {
    // function(numbers) - anonymous function
    const filterEven = function(numbers) {
        return numbers.filter(num => num % 2 === 0);
    };
    // TODO: Fix asserts
    expect(filterEven([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6, 7]);
    expect(filterEven([7, 9, 11, 12])).toEqual([]);
});

test('should map an array to its square values', () => {
    // TODO: Create an anonymous function which map an array to its square values

    expect(squareValues([1, 2, 3])).toEqual([1, 4, 9]);
    expect(squareValues([-1, 0, 2])).toEqual([1, 0, 4]);
});

test('should reduce an array to its sum', () => {
    // TODO: Create an anonymous function which reduce an array to its sum

    expect(sumArray([1, 2, 3])).toBe(6);
    expect(sumArray([-1, -2, -3])).toBe(-6);
});

// TODO: add a test where an anonymous function should return reversed string