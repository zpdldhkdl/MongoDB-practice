const config = require('./config');
const express = require('express');
const app = express();
const db = require('./lib/mongodb');
const apis = require('./api');
const bodyParser = require('body-parser');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api', apis);

const htmlRouter = require('./router/index')(app);

app.listen(config.PORT, () => {
    console.log(`express server has started on port ${config.PORT}`);
});
