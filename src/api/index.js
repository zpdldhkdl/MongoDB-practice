const express = require('express');
const apiRouter = express.Router();
const book = require('./book');

apiRouter.use('/books', book);

module.exports = apiRouter;
