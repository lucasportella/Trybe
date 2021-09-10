// controllers/login.js
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const secret = 'mysupersecret';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const validateBody = (body) =>
  /* Utilizamos o Joi para validar o schema do body */
  Joi.object({
    username: Joi.string().min(5).alphanum().required(),
    password: Joi.string().min(5).required(),
  }).validate(body);

const makeLogin = async (req, res, next) => {
  console.log(req.body);
  /* Construímos um schema do Joi */
  const { error } = validateBody(req.body);
  const { username } = req.body;

  /* Caso ocorra erro na validação do Joi, passamos esse */
  /* erro para o express, que chamará nosso middleware de erro */
  if (error) return next(error);

  const token = jwt.sign({ data: username }, secret, jwtConfig);
  res.status(200).json({ token });
};

module.exports = {
  makeLogin,
}