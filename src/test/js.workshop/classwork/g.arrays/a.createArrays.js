/*
Example 1:
Using Array Literal Syntax ([]).
The most common and simplest way to create an array is by using the array literal syntax.
This is the preferred way to create arrays when you already know the elements you want to include.
 */
const fruits = ["apple", "banana", "orange"];
console.log(fruits);

/*
Example 2:
Using the Array() Constructor.
You can create an array using the Array() constructor.
There are two ways to use this constructor.

 */

/*
  a) With Initial Elements.
     You can pass the elements directly as arguments to the Array() constructor.
 */
const numbers = Array(1, 2, 3, 4, 5);
console.log(numbers);

/*
  b) With a Single Argument (Creates an Empty Array with Length).
  If you pass a single numeric argument to the Array() constructor, it creates an empty array with the specified length.
 */
const emptyArray = Array(5);
console.log(emptyArray);
console.log(emptyArray.length);

/*
Example 3:
Using Array.of().
The Array.of() method creates a new array with the given arguments as its elements.

Unlike the Array() constructor, if you pass a single number, it creates an array containing that number, rather than
an empty array of that length.
 */
const arr1 = Array.of(10);
const arr2 = Array.of(1, 2, 3);

console.log(arr1);
console.log(arr2);

/*
Example 4:
Using Array.from().
Array.from() creates a new array from an array-like or iterable object (such as a string, Set, Map, or NodeList).
 */

// a) From a String
const str = "hello";
const charArray = Array.from(str);
console.log(charArray);

// b) From a Set
const set = new Set([1, 2, 3]);
const setArray = Array.from(set);
console.log(setArray);

// c) From an Array-Like Object
function createArray() {
    return Array.from(arguments);
}

console.log(createArray(1, 2, 3));

/*
Example 5:
Using Array.fill() to Create a Pre-filled Array.
You can use Array() combined with fill() to create an array with a predefined length and fill it with the same value.
 */
const filledArray = Array(5).fill(0);
console.log(filledArray);  // Output: [0, 0, 0, 0, 0]

/*
Example 6:
Using the new Array() Constructor.
You can explicitly create a new array using the new Array() syntax, similar to the Array() constructor.
 */

// a) With Elements
const colors = new Array("red", "green", "blue");
console.log(colors);

// b) With Length
const largeArray = new Array(10);
console.log(largeArray);
console.log(largeArray.length);