const bcrypt = require('bcrypt');

module.exports = register = (req, res) => {
    let query = 'INSERT INTO users (user, pass, first, last) VALUES (?,?,?,?)'
    const connect = require('./database');
    const checkuser = require('./checkuser');
    // Haha callback hell :(
    checkuser(req.user, (err, resp) => {
        if (err) return console.log(err);
        // Check to see if user exists
        if (resp.length === 0) {
            // Hash Password
            bcrypt.hash(req.pass, 10, function (err, hash) {
                // Query Database
                connect.query(query, [req.user, hash, req.first, req.last], (err, resp) => {
                    if (err) return res(err, null);
                    res(null, 1);
                });
            });
        }
        else {
            // User already exists
            res(null, null);
        }
    });


}