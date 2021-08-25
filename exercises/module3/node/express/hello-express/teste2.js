const express = require('express');
const app = express();

function timeMiddleware(req, res, next) {
  req.startTime = Date.now();
  next();
}

app.listen(3000, () => {
    console.log('Aplicação ouvindo na porta 3000');
  });

app.get('/tempo', (req, res) => {
    req.startTime = Date.now();
  const endTime = Date.now() - req.startTime;
  res.status(200).json({
    message: `essa request foi processada em ${endTime} milissegundos`,
  });
});