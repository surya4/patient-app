var config = require('../config/config.js')
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: config.db.host,
    user: config.db.user,
    password: config.db.password,
    database: config.db.db_name
});

connection.connect((err) => {
    if (err) throw err
    console.log('You are now connected...')
})

connection.query('use ' + config.db.db_name);
connection.query('alter table patient_data change date_of_birth Date VARCHAR(20)');

module.exports = connection;