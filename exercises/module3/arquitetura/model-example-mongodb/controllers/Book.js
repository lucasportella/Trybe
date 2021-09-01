const Book = require('../services/Book');

const getAll = async (req, res) => {
    const result = await Book.getAll();
    return res.status(200).json(result);
}

const getByAuthorId = async (req, res) => {
    const result = await Book.getByAuthorId(req.params.id);

    return res.status(200).json(result);
}

const createBook = async (req, res) => {
    const result = await Book.createBook(req.body);
    if (!result) {return res.status(400).json({message: "dados inválidos"})}
    return res.status(201).json({ message: 'Livro criado com sucesso!'})
}

module.exports = {
    getAll,
    getByAuthorId,
    createBook,
}