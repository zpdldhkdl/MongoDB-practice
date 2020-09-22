const express = require('express');
const apiRouter = express.Router();
const book = require('./book');

apiRouter.use('/book', book);

module.exports = apiRouter;
