const connection = require('./connection');
const { ObjectId } = require('mongodb');

const getAll = async () => {
    const db = await connection();
    const books = await db.collection('books').find().toArray()    
    return books
}

const getByAuthorId = async (id) => {
    const db = await connection();
    const bookById = await db.collection('books').findOne(new ObjectId(id));
    return bookById;
}

const createBook = async (book) => {
    const db = await connection()
    const result = await db.collection('books').insertOne({
        title: book.title,
        author_id: book.author_id,
    })
    return result;
}


module.exports = {
    getAll,
    getByAuthorId,
    createBook,
}
