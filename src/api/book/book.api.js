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
        res.status(500).send({result: 0,});
        console.error(e);
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
        res.status(500).send({result: 0,});
        console.error(e);
    }
};

exports.updateBook = async(req, res) => {
    const book = bookSchema;

    const { author } = req.params;
    const { preTitle, nextTitle } = req.query;

    if(!preTitle || !author) {
        return res.status(400).send(`title or author empty`);
    }

    try {
        const dbResponse = await book.findOneAndUpdate({
            title: preTitle,
            author: author
        }, {
            title: nextTitle,
        });

        if(dbResponse) {
            return res.status(200).json({result: 1});
        }

        return res.status(400).json({result: 0})
    }
    catch(e) {
        res.status(500).send({result: 0});
        console.error(e);
    }
};

exports.deleteBook = async(req, res) => {
    const book = bookSchema;

    const { author } = req.params;
    const { title } = req.query;

    if(!title || !author) {
        return res.status(400).send(`title or author empty`);
    }

    try {
        const dbResponse = await book.deleteOne({
            title: title,
            author: author
        });

        if(dbResponse.deletedCount) {
            return res.status(200).json({result: 1});
        }
    }
    catch(e) {
        res.status(500).send({result: 0})
        console.error(e);
    }
};
