const express = require('express');
const bookRouter = express.Router();
const {
    createBook,
    getAllBook,
    deleteBook,
} = require('./book.api');

bookRouter.get('/', getAllBook);
bookRouter.post('/', createBook);
bookRouter.delete('/:author', deleteBook);

module.exports = bookRouter;
