const sortDescending = (arr) => arr.sort((a, b) => b - a);

/*
Arrow Function sortDescending: Takes an array arr of numbers.
sort Method: Uses a comparison function (a, b) => b - a to sort in descending order.
      If b - a is positive, b comes before a, resulting in a descending order.
Return: sort modifies arr in place and returns it sorted in descending order.
 */
console.log(sortDescending([1, 11, -2, 22])); // Output [22, 11, 1, -2]
