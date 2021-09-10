const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers');
const middlewares = require('./middlewares');
const { makeLogin } = require('./controllers/login');

const app = express();

app.use(bodyParser.json());

app.get('/ping', controllers.ping);
app.post('/login', makeLogin);

app.use(middlewares.error);

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
