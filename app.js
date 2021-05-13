const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

module.exports = app;
