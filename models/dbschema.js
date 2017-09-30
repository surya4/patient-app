var config = require('../config/config.js')
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'us-cdbr-iron-east-05.cleardb.net',
    user: 'b9ccb46f94f3eb',
    password: '6522e9ec',
    db_name: 'heroku_0e44aee5ba8a740'
});

connection.connect((err) => {
    if (err) throw err

    console.log('You are now connected...')
})

connection.query('use heroku_0e44aee5ba8a740');

module.exports = connection;