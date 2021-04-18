const express = require('express');
const router = express.Router();
var path = require('path');
const connection = require('../connection/connection');

router.get('/', function(request, response) {
	connection.query('SELECT * FROM posts', (error, results) => {
		if (!error) {
			response.render("blog", { users: results});
		}else {
			console.log(error);
		}
	});
});

module.exports = router;