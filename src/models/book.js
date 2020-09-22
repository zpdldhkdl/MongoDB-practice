const mongoose = require('mongoose');

const Schema = mongoose.Schema;
mongoose.set('useCreateIndex', true);

const bookSchema = new Schema({
    title: {
        type: String,
        unique: true,
    },
    author: String,
    createAt: { type: Date, default: Date.now() },
});

module.exports = mongoose.model('book', bookSchema);
