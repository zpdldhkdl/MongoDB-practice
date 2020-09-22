const express = require('express');
const bookRouter = express.Router();
const {
    createBook,
    getAllBook,
} = require('./book.api');

bookRouter.get('/books', getAllBook);
bookRouter.post('/books', createBook);

module.exports = bookRouter;
