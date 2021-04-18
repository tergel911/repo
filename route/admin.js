const express = require('express');
const router = express.Router();
var path = require('path');
const connection = require('../connection/connection');

router.get('/admin', function(request, response) {
	if (request.session.loggedin) {
		connection.query('SELECT * FROM accounts', function ( error, results, field){
			console.log(results);
		response.render("admin", {users: results });
		});
	} else {
		response.render("login", { error: "please login" });
	}
});

module.exports = router;