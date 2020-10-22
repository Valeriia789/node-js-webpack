const express = require('express');

const app = express();

app.use('*', (req, res) => {
  console.log('Был запрос от браузера');
  res.send('<h1>Вот тебе HTML в ответ</h1>');
});

const listener = app.listen(4444, () => {
  console.log(`Веб-сервер запущен на порте ${listener.address().port}`);
});

// const shortid = require('shortid');
// console.log(shortid.generate());

// const Joi = require('joi');
// const passwordSchema = Joi.string().min(3).max(10).alphanum();
// console.log(passwordSchema.validate('qweqwe'));
