const express = require('express');
const bookRouter = express.Router();
const {
    createBook,
} = require('./book.api');

bookRouter.post('/books', createBook);

module.exports = bookRouter;
