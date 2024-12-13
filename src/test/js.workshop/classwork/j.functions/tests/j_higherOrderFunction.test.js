// Higher-order function
// This function takes an array and an operation as parameters
function processItems(items, operation) {
    return items.map(operation);
}

// Different operations
const capitalize = (item) => item.charAt(0).toUpperCase() + item.slice(1);
const reverseString = (item) => item.split('').reverse().join('');
const appendExclamation = (item) => `${item}!`;

test('should capitalize each string in the array', () => {
    const items = ['apple', 'banana', 'cherry'];
    const result = processItems(items, capitalize);
    expect(result).toEqual(['Apple', 'Banana', 'Cherry']);
});

test('should reverse each string in the array', () => {
    const items = ['apple', 'banana', 'cherry'];
    const result = processItems(items, reverseString);
    expect(result).toEqual(['elppa', 'ananab', 'yrrehc']);
});

test('should append an exclamation mark to each string in the array', () => {
    const items = ['apple', 'banana', 'cherry'];
    const result = processItems(items, appendExclamation);
    expect(result).toEqual(['apple!', 'banana!', 'cherry!']);
});

test('should handle an empty array gracefully', () => {
    const items = [];
    const result = processItems(items, capitalize);
    expect(result).toEqual([]);
});