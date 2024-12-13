const {checkNumber} = require("../utils/b_promise");

test("resolves when the number is positive", () => {
    // Testing a resolved Promise
    return checkNumber(5).then((message) => {
        expect(message).toBe("Number is positive");
    });
});

test("rejects when the number is zero or negative", () => {
    // Testing a rejected Promise
    return checkNumber(-3).catch((error) => {
        expect(error).toBe("Number is not positive");
    });
});

test("using .then() and .catch() together for a resolved Promise", () => {
    return checkNumber(10)
        .then((message) => {
            expect(message).toBe("Number is positive");
        })
        .catch(() => {
            // This block should not run for this test
            throw new Error("This should not be called");
        });
});

test("using .then() and .catch() together for a rejected Promise", () => {
    return checkNumber(0)
        .then(() => {
            // This block should not run for this test
            throw new Error("This should not be called");
        })
        .catch((error) => {
            expect(error).toBe("Number is not positive");
        });
});

test('should reverse a string', () => {
    return reverseStringWithPromise('hello').then((result) => {
        expect(result).toBe('olleh');
    });
});

test('should capitalize a string', () => {
    return capitalizeStringWithPromise('hello').then((result) => {
        expect(result).toBe('HELLO');
    });
});

test('should chain promises to reverse and capitalize a string', () => {
    return reverseStringWithPromise('world')
        .then((reversed) => capitalizeStringWithPromise(reversed))
        .then((result) => {
            expect(result).toBe('DLROW');
        });
});

test('should reject if input is not a string in reverseStringWithPromise', () => {
    return reverseStringWithPromise(123).catch((error) => {
        expect(error).toBe('Input must be a string');
    });
});

test('should reject if input is not a string in capitalizeStringWithPromise', () => {
    return capitalizeStringWithPromise(true).catch((error) => {
        expect(error).toBe('Input must be a string');
    });
});
