const bookSchema = require('../../models/book');

exports.createBook = async(req, res) => {
    const { title, author } = req.body;

    if(!title || !author) {
        return res.status(400).send(`title or author empty`);
    }

    const book = new bookSchema({
        title: title,
        author: author,
    });

    try {
        await book.save();
        res.redirect('/');
    }
    catch(e) {
        res.status(500).send(e);
    }
}

exports.getAllBook = async(req, res) => {
    const book = bookSchema;

    try {
        const dbResponse = await book.find({}, {_id: 0, __v: 0});
        if(dbResponse) {
            res.status(200).json(dbResponse);
        }
    }
    catch(e) {
        res.status(500).send(e);
    }
}
