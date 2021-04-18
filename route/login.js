const express = require('express');
const router = express.Router();
const conn = require('../connection/connection');


router.get('/login', function(request, response) {
	response.render("login", { error: "" });
});

router.get('/logout', function(request, response) {
	request.session.loggedin = false;
	request.session.username = "";
	response.redirect("/");
});


router.post('/auth', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	if (username && password) {
		conn.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.username = username;
				response.redirect('/admin');
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});

module.exports = router;