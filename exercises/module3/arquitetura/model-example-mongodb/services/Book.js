const Book = require('../models/Book');

const isValid = (book) => {
    const { title, author_id } = book;
    if (!title || title.length < 3 || typeof title !== 'string'|| !author_id) { return false}
    return true;
}

const getAll = async () => {
    const books = await Book.getAll();
    return books;
}

const getByAuthorId = async (id) => {
    const bookById = await Book.getByAuthorId(id);
    return bookById;
}

const createBook = async (book) => {
    if (!(isValid(book))) { return null}
    console.log('deu bom');
    const newBook = await Book.createBook(book);
    return newBook
}

module.exports = {
    isValid,
    getAll,
    getByAuthorId,
    createBook,
}
