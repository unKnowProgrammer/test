'use strict';

const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(process.env.PORT , function () {
  console.log('Sunucu çalışıyor...');
});
