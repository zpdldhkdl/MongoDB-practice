const express = require('express');
const bookRouter = express.Router();
const {
    createBook,
    getAllBook,
    deleteBook,
    updateBook,
} = require('./book.api');

bookRouter.get('/', getAllBook);
bookRouter.post('/', createBook);
bookRouter.put('/:author', updateBook);
bookRouter.delete('/:author', deleteBook);

module.exports = bookRouter;
