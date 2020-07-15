// Config variables
const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

// Mysql module connection
const connect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DB
});

connect.connect((err) => {
    if (err) return console.log(err);
    console.log('Successfully connected');
});

// Export connection for reusability in other scripts
module.exports = connect;