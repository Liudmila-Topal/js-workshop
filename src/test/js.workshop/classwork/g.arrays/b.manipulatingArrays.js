/*
Example 1:
- push() - adds one or more elements to the end of an array.
- pop() - removes the last element from an array and returns it.
 */
const numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(`After using the 'push' method, the array looks like this: ${numbers}`);

const lastElement = numbers.pop();
console.log(`The last element of array is '${lastElement}'`);
console.log(`After using the 'pop' method, the array looks like this: ${numbers}`);

/*
Example 2:
- unshift() - adds one or more elements to the beginning of an array.
- shift() - removes the first element from an array and returns it.
 */
const cities = ['Paris', 'London'];
cities.unshift('New York', 'Tokyo');
console.log(`After using the 'unshift' method, the array looks like this: ${cities}`);

const firstCity = cities.shift();
console.log(`The first element of array is '${firstCity}'`);
console.log(`After using the 'shift' method, the array looks like this: ${cities}`);

/*
Example 3:
- concat() - merges two or more arrays into a new array.
- slice() - returns a shallow copy of a portion of an array into a new array.
- splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 */
const wildAnimals = ['Tiger', 'Lion', 'Hippopotamus'];
const pets = ['Cat', 'Dog', 'Hamster'];
const mergedArray = wildAnimals.concat(pets);
console.log(`After using the 'concat' method, the new array looks like this: ${mergedArray}`);

const slicedAnimals = mergedArray.slice(1, 3);  // Extracts from index 1 to 2 (not including 3)
console.log(`After using the 'slice' method, the new array looks like this: ${slicedAnimals}`);

const splicedElement = mergedArray.splice(2, 1, 'Grape');
console.log(`The spliced element of array is '${splicedElement}'`);
console.log(`After using the 'splice' method, the new array looks like this: ${mergedArray}`);

/*
Example 4:
- includes() - checks if an array contains a specific element, returning true or false.
- forEach() - executes a provided function once for each array element.
 */
const tech = ['JavaScript', 'HTML', 'CSS'];
const findValue = 'JavaScript';
const hasJS = tech.includes(findValue);
console.log(`The array contains '${findValue}' element: ${hasJS}`);

tech.forEach((element) => {
    const updatedElement = element + ' language';
    console.log(updatedElement);
})

/*
Example 5:
- map() - creates a new array populated with the results of calling a provided function on every element in the array.
- filter() - creates a new array with all elements that pass a test implemented by the provided function.
- find() - returns the 'first' element in the array that satisfies the provided testing function.
- reduce() - executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
 */
const squares = [1, 2, 3, 4, 5].map(num => num * num);
console.log(`After using the 'map' method, the new array looks like this: ${squares}`);

const bigNumbers = squares.filter(num => num > 10);
console.log(`After using the 'filter' method, the new array looks like this: ${bigNumbers}`);

const fountElement = squares.find(element => element >= 15);
console.log(`After using the 'find' method, the first fount element of array is '${fountElement}'`);

const sum = squares.reduce((total, num) => total + num);
console.log(`After using the 'reduce' method, the new array looks like this: ${sum}`);

/*
Example 6:
- every() - tests whether all elements in the array pass the test implemented by the provided function.
  It returns 'true' if all elements pass, otherwise 'false'.

- some() - tests whether at least 'one' element in the array passes the test implemented by the provided function.
  It returns 'true' or 'false'.
- reverse() - reverses the order of the elements in an array.
 */
const numbers2 = [2, 4, 6];
const allEven = numbers2.every(num => num % 2 === 0);
console.log(`All elements of array are even: ${allEven}`);

const numbers3 = [1, 3, 5, 8];
const hasEven = numbers3.some(num => num % 2 === 0);
console.log(`At least one element in the array is even: ${hasEven}`);

numbers3.reverse();
console.log(`After using the 'reduce' method, the array looks like this: ${numbers3}`);

/*
Example 7:
sort() - sorts the elements of an array in place and returns the sorted array.
By default, it converts elements to strings and compares their sequences of UTF-16 code unit values.
 */
// a) Simple Sorting
const letters = ['d', 'a', 'c', 'b'];
letters.sort();
console.log(`After using Simple Sorting, the array looks like this: ${letters}`);

// b) Numeric Sorting
const numbers4 = [3, 10, 1, 6];
numbers4.sort((a, b) => a - b);
console.log(`After using Numeric Sorting, the array looks like this: ${numbers4}`);

/*
Example 8:
join() - joins all elements of an array into a string.
 */
const words = ['Hello', 'world'];
const sentence = words.join(' ');
console.log(`After using the 'join' method, the array was converted to string -'${sentence}' with type -`, typeof sentence);

/*
Example 9:
fill() - fills all the elements of an array from a start index to an end index with a static value.
 */
const arr = [1, 2, 3, 4];
arr.fill(0, 1, 3);  // Fills with 0 from index 1 to 2
console.log(`After using the 'fill' method, the array looks like this: ${arr}`);
