test('should correctly add two numbers', () => {
    const add = (a, b) => a + b;
    expect(add(5, 3)).toBe(8);
    expect(add(-1, 1)).toBe(0);
});

test('should map an array to its square values', () => {
    const numbers = [1, 2, 3, 4];
    const squares = numbers.map(num => num * num);
    expect(squares).toEqual([1, 4, 9, 16]);
});

