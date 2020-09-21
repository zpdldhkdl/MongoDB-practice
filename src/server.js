const config = require('./config');
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const book = require('./models/book');
const db = require('./lib/mongodb');

/*app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);*/

app.post('/', (req, res) => {
    let book1 = new book();
    book1.title = 'test';
    book1.author = 'test2';

    book1.save((err) => {
        if(err) {
            console.error(err);
            res.json({result: 0});
            return;
        }

        res.json({result: 1});
    });
});

//const router = require('./router/index')(app);

const server = app.listen(config.PORT, () => {
    console.log(`express server has started on port ${config.PORT}`);
});
