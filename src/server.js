const express = require('express');
const app = express();
const config = require('config');

app.get('/', (req, res) => {
    res.send('Hello world');
});

const server = app.listen(config.PORT, () => {
    console.log(`express server has started on port ${config.PORT}`);
})
