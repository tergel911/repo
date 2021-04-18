var mysql = require('mysql');
var dotenv = require('dotenv');


dotenv.config();

var connection = mysql.createConnection({
	host     : process.env.DB_HOST,
	user     : process.env.DB_USERNAME,
	password : process.env.DB_PASS,
	database : process.env.DB_NAME
});

module.exports = connection;