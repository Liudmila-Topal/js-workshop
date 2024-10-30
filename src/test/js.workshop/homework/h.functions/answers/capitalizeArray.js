const capitalizeArray = (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
/*
Arrow Function capitalizeArray: Takes an array arr of strings.
    map Method: Iterates over each string (str) in the array.
Capitalization Logic:
    str.charAt(0).toUpperCase() converts the first character to uppercase.
    str.slice(1).toLowerCase() converts the rest of the string to lowercase.
    Concatenating them results in a capitalized version of each string.
Return: map returns a new array with each string capitalized.
*/
console.log(capitalizeArray(['hello', 'World'])); // Output ['Hello', 'World']