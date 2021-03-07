import { Express } from 'express';

const express = require('express');
const path = require('path');

const app: Express = express();

const distFolder = path.join(`${__dirname}/public`);

app.use(express.static(distFolder));

app.get(/^\/des(\/)?$/, (req, res) => {
  res.sendFile(`${distFolder}/index.html`);
});

app.get(/^\/cv(\/)?$/, (req, res) => {
  res.sendFile(`${distFolder}/cv.html`);
});

app.get('*', (req, res) => {
  res.status(404).sendFile(`${distFolder}/404.html`);
});

module.exports = app;
