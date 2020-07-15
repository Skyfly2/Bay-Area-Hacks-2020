const bcrypt = require('bcrypt');

module.exports = register = (req, res) => {
    let query = 'INSERT INTO users (user, pass, first, last) VALUES (?,?,?,?)'
    const connect = require('./database');

    // Hash Password
    bcrypt.hash(req.pass, 10, function (err, hash) {
        // Query Database
        connect.query(query, [req.user, hash, req.first, req.last], (err, resp) => {
            if (err) return res(err, null);
            res(resp, null);
        });
    });

}