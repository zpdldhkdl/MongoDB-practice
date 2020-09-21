const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    author: String,
    createAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('book', bookSchema);
