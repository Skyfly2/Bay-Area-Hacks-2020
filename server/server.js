// Server initialization
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Register a user
app.post('/register', (req, res) => {
    const info = req.body;
    const register = require('./scripts/register');
    register(info, (err, resp) => {
        if (err) return console.log(err);
        res.json({ status: 'registered' });
    })
});

app.listen(4000, () => console.log('listening on 4000'));

