const bookSchema = require('../../models/book');

exports.createBook = async(req, res) => {
    const { title, author } = req.body;

    const book = new bookSchema({
        title: title,
        author: author,
    });

    try {
        await book.save();
    }
    catch(e) {
        res.status(500).send(e);
    }

    res.redirect('/');
}
