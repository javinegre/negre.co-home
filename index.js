const express = require('express'),
  app = express(),
  path = require('path');

app.use(express.static(__dirname + '/public'));

app.get(/^\/des(\/)?$/, (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/cv', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/cv.html'));
});

app.get('*', (req, res) => {
  res.status(404)
    .sendFile(path.join(__dirname + '/public/404.html'));
});

module.exports = app;