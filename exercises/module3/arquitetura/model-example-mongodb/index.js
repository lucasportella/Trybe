const express = require('express');
const bodyParser = require('body-parser');

const Author = require('./controllers/Author');
const Book = require('./controllers/Book');
const ErrorController = require('./controllers/ErrorController');


const app = express();

app.use(bodyParser.json());


app.get('/authors', Author.getAll);

app.get('/authors/:id', Author.findById);

app.post('/authors', Author.create);

app.get('/books', Book.getAll)

app.get('/books/:id', Book.getByAuthorId)

app.post('/books', Book.createBook)

app.use(ErrorController);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Ouvindo a porta ${PORT}`);
});

console.log(process.env.DB_URL)