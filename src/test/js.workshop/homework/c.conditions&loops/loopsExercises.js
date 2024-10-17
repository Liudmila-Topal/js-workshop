/*
Exercise 1. Sum of Numbers Using a for, while and do...while Loop
Write a program that uses a for loop to find the sum of numbers from 1 to 50.
Do the same task using while and do...while loops.
Log the result.
*/

// //For loop
let sum = 0;
for (let i = 0; i <= 50; i++) {
    sum += i;
}
console.log(sum);

//While loop
let sum = 0;
let i = 0;
while (i <= 50) {
    sum += i;
    i++;
}
console.log(sum);

//Do...while loop
let sum = 0;
let i = 0;
do {
    sum += i;
    i++;
} while (i <= 50);
console.log(sum);

/*
Exercise 2. Find Even Numbers Using continue
Write a program that uses a for loop to print all the even numbers between 1 and 20.
Hint: Use continue to skip the odd numbers.
*/
for (let i = 0; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

/*
Exercise 3. Breaking Out of a Loop
Write a program that uses a while loop to print numbers from 1 to 100, but stops when it reaches a number divisible by 25 and is even.
*/
let num = 1;
while (num <= 100) {
    if (num % 25 === 0 && num % 2 === 0) {
        console.log(`The loops breaks at ${num} iteration`);
        break;
    }
    console.log(num);
    num++;
}

/*
Exercice 4. Find the First Odd Number Using break
Write a program that uses a for..of loop to find the first odd number in an array [2, 4, 6, 7, 8, 10] and breaks the loop once it finds the odd number.
*/
let myArray = [2, 4, 6, 7, 8, 10];
for (let nr of myArray) {
    if (nr % 2 !== 0) {
        console.log(`first odd number in array is ${nr}`);
        break;
    } else {
        console.log(`${nr} is even number`)
    }
}

/*
BONUS:
Write a program that iterates over the properties of an object containing information about a car using a for...in loop.
1. If the property is year, check if the car is considered "new" (if it's less than or equal to 3 years old).
2. If the property is color, check if the color is blue and log a special message for blue cars.
Input:
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    color: 'blue'
};

Expected Output:
make: Toyota
model: Corolla
year: 2021 - This car is new.
color: blue - This is my favorite color!
 */
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021,
    color: 'blue'
};
let currentYear = 2024;

for (let property in car) {
    if (property === 'year') {
        let carAge = (currentYear - car[property]) <= 3 ? 'new' : 'not new';
        console.log(`${property}: ${car[property]} - This car is ${carAge}.`);
    } else if (property === 'color' && car[property] === 'blue') {
        console.log(`${property}: ${car[property]} - This is my favorite color!`);
    } else {
        console.log(`${property}: ${car[property]}`);
    }
}