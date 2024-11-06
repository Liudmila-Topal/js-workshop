/*
Exercise 1:
Object Deep Freeze.
- Create a function 'deepFreeze(obj)' that freezes not only the object but also any objects nested inside it
  (making the entire object structure immutable).
- You should use 'Object.freeze()' but ensure that it applies to all levels of nested objects.

Requirements:
- Use recursion to traverse all properties of the object.
- Ensure all nested objects are also frozen.
 */


/*
Exercise 2:
Compare Objects by Properties.
- Create a function 'compareObjects(obj1, obj2, properties)' that takes two objects and an array of property names.
- The function should return 'true' if both objects have the same values for all properties in the list, and 'false' otherwise.
- It should work for both primitive values and nested objects (deep comparison).

Requirements:
- Handle both primitive values and objects within the specified properties.
- Perform deep comparison for nested objects using recursion.
- Use 'Object.keys()', 'Object.entries()', and recursion where appropriate.
 */


/*
Exercise 3:
Create a Safe Copy with Hidden Properties.
- Write a function 'createSafeObject(original, hiddenProps)' that takes an object and an array of property names to hide.
- The function should return a copy of the original object where the properties in hiddenProps are not enumerable
  (i.e., they won't show up in 'Object.keys()' or 'Object.entries()', but can still be accessed directly).

Requirements:
- Use 'Object.defineProperty()' or 'Object.defineProperties()' to hide specific properties.
- Ensure the copy retains all other properties as is.
*/
