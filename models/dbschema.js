var config = require('../config/config.js')
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: config.db.user,
    password: config.db.password,
    database: 'patient_app'
});

connection.connect((err) => {
    if (err) throw err
    console.log('You are now connected...')
})

module.exports = connection;