const config = require('./config');
const express = require('express');
const app = express();
const router = express.Router();
const db = require('./lib/mongodb');
const apis = require('./api');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

router.use('/api', apis);

const htmlRouter = require('./router/index')(app);

app.listen(config.PORT, () => {
    console.log(`express server has started on port ${config.PORT}`);
});
