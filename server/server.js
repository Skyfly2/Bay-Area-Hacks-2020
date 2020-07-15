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
        if (resp) {
            res.json({ status: 'registered' });
        }
        else {
            res.json({ status: 'taken' })
        }

    })
});

// Login a user
app.post('/login', (req, res) => {
    const info = req.body;
    const login = require('./scripts/login');
    login(info, (err, resp) => {
        if (err) return console.log(err);
        if (resp === 1) {
            res.json({ status: 'success' });
        }
        else if (resp === 2) {
            res.json({ status: 'dne' });
        }
        else {
            res.json({ status: 'wrong' });
        }
    })
})

app.listen(4000, () => console.log('listening on 4000'));

