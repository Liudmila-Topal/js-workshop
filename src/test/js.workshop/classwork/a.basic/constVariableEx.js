/*
 Example 1:
 In this example, we will declare the variable using the const keyword.
 */
const a = "Hello learners"
console.log(a);

const b = 400;
console.log(b);

const trueOrFalse = true;
console.log(trueOrFalse);

/*
Example 2:
Cannot be Reassigned
It describes that the const variable cannot be reassigned.
 */
// const x = 12;
// x = 13;
// x += 1;

/*
Example 3:
It describes the const variable which contains the Block Scope.
 */
// const a = 22;
// {
//     const a = 90;
//     console.log(a);
//
//     {
//         const a = 77;
//         console.log(a);
//     }
//     {
//         const a = 45;
//         console.log(a);
//     }
// }
// console.log(a);

/*
Example 4:
Variables must be Assigned
It describes the const variable and assigned it after declaration.
 */
// const b;
// b = 12;

/*
Example 5:
Cannot be Hoisted
It describes the const variable cannot be Hoisted (Hoisting is JavaScript's default behavior of moving declarations to the top).
 */
// c = 3;
// console.log(c);
// const c;

/*
Example 6:
Const in Arrays
It describes that the array values can be modified only reference to the array cannot be changed.
Changing the content of array is possible in cost array
 */
// const authors = ["King", "Tolkien", "Tolstoy", "Saint-Exupéry"];
// console.log(authors.toString());
//
// authors[2] = "Rowling"; // possible
//
// console.log(authors.toString());
//
// /*
// Example 7:
// Const in Objects
// It describes that the object properties can be modified only reference to the object cannot be changed.
//  */
// const person = {
//     first_name: "Tim",
//     last_name: "Burton",
//     Age: 66,
//     About: "American animator, director, producer, writer and illustrator"
// };
//
// console.log(person);
//
// // It is possible
// person.first_name = "Stephen";
// person.last_name = "King";
// person.Age = 77;
// person.About = "American author";
//
// console.log(person);
//
// // it is not possible
// // const person={
// // "first_name":"Stephen",
// // "last_name":"King",
// // "Age":77,
// // "About":"American author"
// // }