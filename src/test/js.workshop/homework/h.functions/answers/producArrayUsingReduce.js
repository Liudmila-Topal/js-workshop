const productArray = (arr) => arr.reduce((acc, num) => acc * num, 1);

/*
Arrow Function productOfArray: Takes an array arr as input.
reduce Method:
     acc (accumulator) is initialized to 1 (since 1 is the neutral element for multiplication).
     Each element (num) is multiplied with acc.
Return: The final value of acc, which is the product of all elements in arr.
 */
console.log(productArray([1, 2, 3, -4])); // Output -24