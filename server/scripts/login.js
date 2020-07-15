const bcrypt = require('bcrypt');

module.exports = login = (req, res) => {
    const check = require('./checkuser');
    check(req.user, (err, resp) => {
        if (err) return console.log(err);
        if (resp.length > 0) {
            let query = 'SELECT pass FROM users WHERE user=?';
            const connection = require('./database');
            connection.query(query, [req.user], (err, respo) => {
                bcrypt.compare(req.pass, respo[0].pass, function (err, result) {
                    if (result) {
                        return res(null, 1);
                    }
                    else {
                        return res(null, 0);
                    }
                });
            })
        }
        else {
            return res(null, 2);
        }
    })
}