module.exports = check = (user, res) => {
    const connection = require('./database');
    let query = 'SELECT user FROM users WHERE user=?';
    connection.query(query, [user], (err, resp) => {
        if (err) return res(err, null);
        return res(null, resp);
    })
}