module.exports = register = (req, res) => {
    let query = 'INSERT INTO users (user, pass, first, last) VALUES (?,?,?,?)'
    const connect = require('./database');
    connect.query(query, [req.user, req.pass, req.first, req.last], (err, resp) => {
        if (err) return res(err, null);
        res(resp, null);
    })
}