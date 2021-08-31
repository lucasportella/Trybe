const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./models/Author');

const app = express();

app.use(bodyParser.json());
const { getAll, getByAuthorId, createBook, isValid } = require('./models/Book');


app.get('/authors', async (_req, res) => {
    const authors = await Author.getAll();

    return res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
    const result = await getAll();
    return res.status(200).json(result);
})

app.get('/books/:id', async (req, res) => {
    const result = await getByAuthorId(req.params.id);
    if (result.length === 0) { return res.status(404).json({message: "Not Found"})}

    return res.status(200).json(result);
})

app.post('/books', isValid, async (req, res) => {
    console.log(req.body);
    await createBook(req.body)
    return res.status(201).json({ message: 'Livro criado com sucesso!'})
})

app.post('/authors', async (req, res) => {
    console.log(req.body);
    const { first_name, middle_name, last_name } = req.body;

    if (!Author.isValid(first_name, middle_name, last_name)) {
        return res.status(400).json({ message: 'Dados inválidos' });
    }

    await Author.create(first_name, middle_name, last_name);

    res.status(201).json({ message: 'Autor criado com sucesso! '});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});

app.use((err, req, res, next) => {
    console.log(err);
    next(err);
})

