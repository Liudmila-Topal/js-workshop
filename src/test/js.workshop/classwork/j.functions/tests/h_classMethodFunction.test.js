const Library = require('../utils/h_classMethodFunction');
const {beforeEach} = require("@jest/globals");

const log4js = require("log4js");
const logger = log4js.getLogger();
logger.level = "info";
let library;

// Initialize a new instance of Library before each test
beforeEach(() => {
    library = new Library();
});

test('should add a book to the library', () => {
    library.addBook('The Great Gatsby');
    expect(library.getAllBooks()).toContain('The Great Gatsby');
    logger.info("A new book was added to the Library")
});

test('should return all books in the library', () => {
    library.addBook('1984');
    library.addBook('To Kill a Mockingbird');
    expect(library.getAllBooks()).toEqual(['1984', 'To Kill a Mockingbird']);
    logger.info("Received all books from the Library:", library)
});

test('should find a book by title', () => {
    // TODO: Add a new book
    library.addBook('Moby Dick');
    // TODO: Find the book using findBook()
    expect(library.findBook('Moby Dick')).toBe(true);
    expect(library.findBook('Invisible Man')).toBe(false);
});

// TODO: Add test for new created removeBook() method
test('should remove a book from the library', () => {
    library.addBook('The Catcher in the Rye');
    library.removeBook('The Catcher in the Rye');
    expect(library.getAllBooks()).not.toContain('The Catcher in the Rye');
});

// TODO: Add test where removeBook() should throw an error when trying to remove a non-existent book
test('should throw an error when trying to remove a non-existent book', () => {
    expect(() => library.removeBook('Non-Existent Book')).toThrow('Book not found');
});

// TODO: Add test where addBook() should throw an error when adding an invalid book title
test('should throw an error when adding an invalid book title', () => {
    expect(() => library.addBook(123)).toThrow('Invalid book title');
    expect(() => library.addBook('')).toThrow('Invalid book title');
});