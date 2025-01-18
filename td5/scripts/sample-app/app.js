const express = require('express');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/name/:name', (req, res) => {
  res.render('hello', {name: req.params.name});
});

module.exports = app;

// Example 5-3: Update the app response text (td5/scripts/sample-app/app.js) 
res.send('DevOps Labs!');