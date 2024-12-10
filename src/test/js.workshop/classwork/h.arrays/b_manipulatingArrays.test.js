const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";

test("push() and pop() methods", () => {
    const numbers = [1, 2, 3];
    numbers.push(4, 5);
    logger.info(`After using the 'push' method, the array looks like this: ${numbers}`);

    const lastElement = numbers.pop();
    logger.info(`The last element of array is '${lastElement}'`);
    logger.info(`After using the 'pop' method, the array looks like this: ${numbers}`);
});

test("unshift() and shift() methods", () => {
    const cities = ['Paris', 'London'];
    cities.unshift('New York', 'Tokyo');
    logger.info(`After using the 'unshift' method, the array looks like this: ${cities}`);

    const firstCity = cities.shift();
    logger.info(`The first element of array is '${firstCity}'`);
    logger.info(`After using the 'shift' method, the array looks like this: ${cities}`);
});

test("concat(), slice(), splice() methods", () => {
    const wildAnimals = ['Tiger', 'Lion', 'Hippopotamus'];
    const pets = ['Cat', 'Dog', 'Hamster'];

    const mergedArray = wildAnimals.concat(pets);
    logger.info(`After using the 'concat' method, the new array looks like this: ${mergedArray}`);

    const slicedAnimals = mergedArray.slice(1, 3);
    logger.info(`After using the 'slice' method, the new array looks like this: ${slicedAnimals}`);

    const splicedElement = mergedArray.splice(2, 1, 'Grape');
    logger.info(`The spliced element of array is '${splicedElement}'`);
    logger.info(`After using the 'splice' method, the new array looks like this: ${mergedArray}`);
});

test("includes() and forEach() methods", () => {
    const tech = ['JavaScript', 'HTML', 'CSS'];
    const findValue = 'JavaScript';
    const hasJS = tech.includes(findValue);
    logger.info(`The array contains '${findValue}' element: ${hasJS}`);

    tech.forEach((element) => {
        const updatedElement = element + ' language';
        logger.info(updatedElement);
    });
});

test("map(), filter(), find(), reduce() methods", () => {
    const squares = [1, 2, 3, 4, 5].map(num => num * num);
    logger.info(`After using the 'map' method, the new array looks like this: ${squares}`);

    const bigNumbers = squares.filter(num => num > 10);
    logger.info(`After using the 'filter' method, the new array looks like this: ${bigNumbers}`);

    const foundElement = squares.find(element => element >= 15);
    logger.info(`After using the 'find' method, the first found element of array is '${foundElement}'`);

    const sum = squares.reduce((total, num) => total + num);
    logger.info(`After using the 'reduce' method, the array looks like this: ${sum}`);
});

test("every(), some(), reverse() methods", () => {
    const numbers2 = [2, 4, 6];
    const allEven = numbers2.every(num => num % 2 === 0);
    logger.info(`All elements of array are even: ${allEven}`);

    const numbers3 = [1, 3, 5, 8];
    const hasEven = numbers3.some(num => num % 2 === 0);
    logger.info(`At least one element in the array is even: ${hasEven}`);

    numbers3.reverse();
    logger.info(`After using the 'reverse' method, the array looks like this: ${numbers3}`);
});

test("sort() method", () => {
    const letters = ['d', 'a', 'c', 'b'];
    letters.sort();
    logger.info(`After using Simple Sorting, the array looks like this: ${letters}`);

    const numbers4 = [3, 10, 1, 6];
    numbers4.sort((a, b) => a - b);
    logger.info(`After using Numeric Sorting, the array looks like this: ${numbers4}`);
});

test("join() method", () => {
    const words = ['Hello', 'world'];
    const sentence = words.join(' ');
    logger.info(`After using the 'join' method, the array was converted to string -'${sentence}' with type -`, typeof sentence);
});

test("fill() method", () => {
    const arr = [1, 2, 3, 4];
    arr.fill(0, 1, 3);
    logger.info(`After using the 'fill' method, the array looks like this: ${arr}`);
});
