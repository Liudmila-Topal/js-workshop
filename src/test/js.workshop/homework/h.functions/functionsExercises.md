### Basic Functions

1. **Write a Function to Add Two Numbers**
- Write a function `add(a, b)` that takes two arguments and returns their sum.
- **Example**: `add(3, 5)` should return `8`.\
Answer: **[Click here for answer](https://github.com/Liudmila-Topal/js-workshop/blob/master/src/test/js.workshop/homework/h.functions/answers.md#1)**

2. **Create a Function to Check If a Number is Even or Odd**
- Write a function `isEven(num)` that returns `true` if the number is even, and `false` if it’s odd.
- **Example**: `isEven(4)` should return `true`, `isEven(5)` should return `false`.\
  Answer: **[Click here for answer](https://github.com/Liudmila-Topal/js-workshop/blob/master/src/test/js.workshop/homework/h.functions/answers.md#2)**

3. **Function to Calculate Factorial**
- Write a function `factorial(n)` that returns the factorial of a given positive integer. If given number is negative, return it's value.
- **Example**: `factorial(5)` should return `120`, `factorial(-5)` should return `-5`.\
Answer: **[Click here for answer](https://github.com/Liudmila-Topal/js-workshop/blob/master/src/test/js.workshop/homework/h.functions/answers.md#3)**

4. **Convert Celsius to Fahrenheit**
- Write a function `toFahrenheit(celsius)` that converts Celsius to Fahrenheit. To convert Celsius to Fahrenheit, we use the C to F formula which is `°F = (9/5) °C + 32`. Substitute the value of given temperature in Celsius in this and get the value in Fahrenheit.
- **Example**: `toFahrenheit(0)` should return `32`, toFahrenheit(5)` should return `41`.\
  Answer: **[Click here for answer]()**

---

### Arrow Functions

5. **Square Each Element in an Array**
- Write an arrow function `squareArray(arr)` that takes an array of numbers and returns a new array with each number squared.
- **Example**: `squareArray([1, 2, 3])` should return `[1, 4, 9]`.\
  Answer: **[Click here for answer]()**

6. **Calculate the Sum of an Array Using Arrow Functions**
- Write an arrow function `sumArray(arr)` that takes an array and returns the sum of all its elements.
- **Example**: `sumArray([1, 2, 3])` should return `6`.\
  Answer: **[Click here for answer]()**

7. **Check if All Elements in an Array Are Positive**
- Write an arrow function `areAllPositive(arr)` that takes an array of numbers and returns `true` if all numbers are positive, otherwise `false`.
- **Example**: `areAllPositive([1, 2, 3])` should return `true`, `areAllPositive([1, -2, 3])` should return `false`.\
  Answer: **[Click here for answer]()**

---

### Higher-Order Functions

8. **Filter Array of Numbers to Return Only Odd Numbers**
- Write a function `filterOdds(arr)` that takes an array of numbers and returns a new array containing only the odd numbers.
- **Example**: `filterOdds([1, 2, 3, 4, 5])` should return `[1, 3, 5]`.\
  Answer: **[Click here for answer]()**

9. **Use Map to Capitalize Each String in an Array**
- Write a function `capitalizeArray(arr)` that takes an array of strings and returns a new array with each string capitalized.
- **Example**: `capitalizeArray(["hello", "world"])` should return `["Hello", "World"]`.\
  Answer: **[Click here for answer]()**

10. **Sort an Array of Numbers in Descending Order Using a Higher-Order Function**
- Write a function `sortDescending(arr)` that sorts an array of numbers in descending order.
- **Example**: `sortDescending([1, 5, 3, 2, 4])` should return `[5, 4, 3, 2, 1]`.\
  Answer: **[Click here for answer]()**

11. **Calculate the Product of All Elements in an Array Using Reduce**
- Write a function `productArray(arr)` that takes an array of numbers and returns the product of all elements.
- **Example**: `productArray([1, 2, 3, 4])` should return `24`.\
  Answer: **[Click here for answer]()**

---

### Closure and Function Scope

12 **Create a Counter with Closures**

- Write a function `createCounter` that, when called, returns an object with two methods: `increment` and `getValue`.
- **increment()**: Increases the counter by 1 each time it’s called.
- **decrement()**: decreases the counter by 1 each time it’s called.
- **getValue()**: Returns the current value of the counter.

Each counter should maintain its own independent count, so calling `createCounter()` again should return a new counter with a separate count.

**Example:**
```javascript
const counter1 = createCounter();
counter1.increment(); // Counter is now 1
counter1.increment(); // Counter is now 2
console.log(counter1.getValue()); // Should print 2
counter1.decrement(); // Counter is now 1
console.log(counter1.getValue()); // Should print 1

const counter2 = createCounter();
console.log(counter2.getValue()); // Should print 0, since it's a new counter
counter2.increment();
console.log(counter2.getValue()); // Should print 1
```

Answer: **[Click here for answer]()**
