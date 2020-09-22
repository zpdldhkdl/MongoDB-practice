const express = require('express');
const bookRouter = express.Router();
const {
    createBook,
    getAllBook,
} = require('./book.api');

bookRouter.get('/', getAllBook);
bookRouter.post('/', createBook);

module.exports = bookRouter;
