const express = require('express'),
  app = express(),
  path = require('path');

const distFolder = path.join(__dirname + '/public/dist');

app.use(express.static(__dirname + '/public'));

app.get(['/', /^\/des(\/)?$/], (req, res) => {
  res.sendFile(`${distFolder}/index.html`);
});

app.get('/cv', function(req, res) {
  res.sendFile(`${distFolder}/cv.html`);
});

app.get('*', (req, res) => {
  res.status(404)
    .sendFile(`${distFolder}/404.html`);
});

module.exports = app;