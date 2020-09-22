const bookRouter = require('express').Router();
const {
    createBook,
} = require('./book.api');

bookRouter.post('/books', createBook);

module.exports = bookRouter;
