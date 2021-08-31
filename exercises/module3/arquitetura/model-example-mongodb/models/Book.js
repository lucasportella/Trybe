const connection = require('./connection');

const getAll = async () => {
    const db = await connection();
    console.log('conn', db.collection('books'));
    const books = await db.collection('books').find().toArray()    
    return books
}

const getByAuthorId = async (id) => {
    const [bookById] = await connection.execute('SELECT * from model_example.books WHERE id = ?;',[id]);
    return bookById
}

const createBook = async (book) => {
    return await connection.execute('INSERT INTO model_example.books VALUES (?,?,?)',[book.id, book.title, book.author_id])
}

const isValid = async (req, res, next) => {
    const { title, author_id } = req.body;
    if (!title || title.length < 3 || typeof title !== 'string'|| !author_id || !(await getByAuthorId(author_id))) { return res.status(400).json({message: "dados inválidos"})}
    next()
}

module.exports = {
    getAll,
    getByAuthorId,
    createBook,
    isValid,
}
