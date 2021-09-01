const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');

const app = express();

app.use(bodyParser.json());

const { getAll, getByAuthorId, createBook, isValid } = require('./models/Book');


app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.create);

app.get('/books', async (req, res) => {
    const result = await getAll();
    return res.status(200).json(result);
})

app.get('/books/:id', async (req, res) => {
    const result = await getByAuthorId(req.params.id);

    return res.status(200).json(result);
})

app.post('/books', isValid, async (req, res) => {
    await createBook(req.body)
    return res.status(201).json({ message: 'Livro criado com sucesso!'})
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});

app.use((err, req, res, next) => {
    console.log(err);
    next(err);
})

