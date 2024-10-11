/*
Exercise 1:
String.
- Declare a 'string' variable with a sentence 'JavaScript is awesome!'.
  Convert the string to both uppercase and lowercase, and print the results.
- Check if it contains a specific word 'JavaScript' using the includes() method and print the result.
- Replace a specific word 'JavaScript' in the string with another word using the replace() method and print the result.
- Use the slice() method to extract and print the first 10 characters of the sentence.
- Use the split() method to break the sentence into words and print the resulting array.
 */

let sentence = "JavaScript is awesome!";
let upperCaseSentence = sentence.toUpperCase();
let lowerCaseSentence = sentence.toLowerCase();

console.log("Uppercase:", upperCaseSentence);
console.log("Lowercase:", lowerCaseSentence);

let containsWord = sentence.includes("JavaScript");
console.log("Does the sentence contain 'JavaScript'?", containsWord);

let newSentence = sentence.replace("Java", "JavaScript");
console.log("Updated sentence:", newSentence);

let substring = sentence.slice(0, 10);
console.log("First 10 characters:", substring);

let wordsArray = sentence.split(" ");
console.log("Words in the sentence:", wordsArray);

/*
Exercise 2:
Number.
- Declare a 'number' variable with a long decimal.
  Use the toFixed() method to format it to 2 decimal places and print the result.
- Use the toString() method to convert it to a string. Print the result.
- Use the toPrecision() method to specify the total number of significant digits, and print the result.
- Declare a number variable as a string with a decimal value.
  Use the parseFloat() method to extract the numeric value from the string and print the result.
 */

let longDecimal = 3.141592653589793;
let formattedNumber = longDecimal.toFixed(2);

console.log("Formatted number with 2 decimal places:", formattedNumber);

let numberAsString = longDecimal.toString();
console.log("Number as string:", numberAsString);

let preciseNumber = longDecimal.toPrecision(4);
console.log("Number with 4 significant digits:", preciseNumber);

let stringNumber = "123.45";
let floatValue = parseFloat(stringNumber);
console.log(`Type of parsed float value: '${floatValue}' is a`, typeof floatValue);

/*
Exercise 3:
Undefined.
- Declare a variable without assigning any value (it will be undefined).
  Print the type of the variable using typeof.
 */

let uninitializedVar;
console.log("Type of uninitializedVar:", typeof uninitializedVar);