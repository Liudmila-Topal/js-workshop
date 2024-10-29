1. **Write a Function to Add Two Numbers**

**Answer:**
```javascript
function addNumbers(number1, number2){
    return number1 + number2;
}
```

2. **Create a Function to Check If a Number is Even or Odd**

**Answer:**
```javascript
function isEven(num) {
    return num % 2 === 0;
}
```

3. **Function to Calculate Factorial**

**Answer:**
```javascript
function factorial(n) {
    let result = 1;
    let tmp = n;
    while (tmp > 0) {
        result *= tmp;
        tmp--;
    }
    return n > 0 ? result : n;
}
```

4. **Convert Celsius to Fahrenheit**

**Answer:**
```javascript
function toFahrenheit(celsius) {
    return 9 / 5 * celsius + 32;
}
```

---

5. **Square Each Element in an Array**

**Answer:**
```javascript
const squareArray = (arr) => {
    let result = [];
    arr.forEach(elem => {
        result.push(elem * elem);
    })
    return result;
}
```

6. **Calculate the Sum of an Array Using Arrow Functions**

**Answer:**
```javascript
const sumArray = (arr) => {
let result = 0;
arr.forEach(elem => {
result += elem;
})
return result;
}
```

7. **Check if All Elements in an Array Are Positive**
   
**Answer:**
```javascript
const areAllPositive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            return false;
        }
    }
    return true;
}
```

---

8. **Filter Array of Numbers to Return Only Odd Numbers**

**Answer:**
```javascript
const filterOddNumbers = (arr) => arr.filter(num => num % 2 !== 0);
```

9. **Use Map to Capitalize Each String in an Array**

**Answer:**
```javascript
const capitalizeArray = (arr) => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
```

10. **Sort an Array of Numbers in Descending Order Using a Higher-Order Function**
    
**Answer:**
```javascript
const sortDescending = (arr) => arr.sort((a, b) => b - a);
```

11. **Calculate the Product of All Elements in an Array Using Reduce**

**Answer:**
```javascript
const productArray = (arr) => arr.reduce((acc, num) => acc * num, 1);
```

12 **Create a Counter with Closures**

**Answer:**
```javascript
function createCounter() {
    let count = 0;

    return {
        increment() {
            count++;
        },
        decrement() {
            count--;
        },
        getValue() {
            return count;
        }
    };
}
```