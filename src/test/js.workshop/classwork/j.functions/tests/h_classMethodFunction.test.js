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

    // TODO: Find the book using findBook() and assert
});

// TODO: Add test for new created removeBook() method

// TODO: Add test where removeBook() should throw an error when trying to remove a non-existent book

// TODO: Add test where addBook() should throw an error when adding an invalid book title