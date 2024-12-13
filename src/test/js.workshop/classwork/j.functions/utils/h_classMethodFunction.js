class Library {
    constructor() {
        this.books = [];
    }

    // Adds a book to the collection if the title is valid
    addBook(title) {
        // Checks if the title is either falsy (e.g., null, undefined, or an empty string) or not a string
        if (!title || typeof title !== 'string') {
            // Throws an error, halting execution, with a message indicating the book title is invalid
            throw new Error('Invalid book title');
        }
        /*
         If the title passes validation, it is added to the books array,
         which is assumed to be a property of the current object (this)
         */
        this.books.push(title);
    }

    // Retrieves the entire collection of books
    getAllBooks() {
        // Simply returns the books array, which holds all the book titles
        return this.books;
    }

    // Checks if a specific book title exists in the collection
    findBook(title) {
        /*
        Uses the 'includes' method on the 'books' array to check if the given 'title' is present.
        Returns 'true' if the title exists, and 'false' otherwise.
         */
        return this.books.includes(title);
    }

    // TODO: Create removeBook() method with 'title' parameter
    /*
    1. Searches for the index of the 'title' in the 'books' array using the 'indexOf' method.
    If the title exists in the array, 'indexOf' returns the position (index) of the first occurrence of the 'title'.
    If the title is not found, it returns '-1'.

    2. Checks whether the 'index' is greater than '-1'.
    This condition ensures that the 'title' exists in the array because '-1' means the 'title' was not found.

    3. Removes 1 element from the 'books' array at the position 'index' using the 'splice' method.
    'splice(index, 1)' means:
    Start at the position 'index'.
    Remove exactly 1 element.
     */
    removeBook(title) {
        const index = this.books.indexOf(title);
        if (index > -1) {
            this.books.splice(index, 1);
        } else {
            throw new Error('Book not found');
        }
    }
}

module.exports = Library;