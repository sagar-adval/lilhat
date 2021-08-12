const express = require('express');
const config = require('./config/app');

const app = express();

const port = config.appPort;

app.get('/home', (req, res) => {
    return res.send('Home');
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
