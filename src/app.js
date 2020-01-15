const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({
    message: 'Hello world!',
  });
});

app.post('/', (req, res) => {
  res.send({message: 'You requested to send the following: ' + req.toString()});
})

module.exports = app;
